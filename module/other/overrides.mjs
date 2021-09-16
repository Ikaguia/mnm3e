import PseudoEntities from "../helpers/pseudoEntities.mjs";

export default function () {

  /**
   * Enrich HTML content by replacing or augmenting components of it
   * @param {string} content        The original HTML content (as a string)
   * @param {object} [options={}]   Additional options which configure how HTML is enriched
   * @param {boolean} [options.secrets=false]      Include secret tags in the final HTML? If false secret blocks will be removed.
   * @param {boolean} [options.entities=true]      Replace dynamic entity links?
   * @param {boolean} [options.links=true]         Replace hyperlink content?
   * @param {boolean} [options.rolls=true]         Replace inline dice rolls?
   * @param {Object|Function} [options.rollData]   The data object providing context for inline rolls
   * @return {string}               The enriched HTML content
   */
  TextEditor.enrichHTML = (content, {secrets=false, entities=true, links=true, rolls=true, rollData}={}) => {

    // Create the HTML element
    const html = document.createElement("div");
    html.innerHTML = String(content);

    // Remove secret blocks
    if ( !secrets ) {
      let elements = html.querySelectorAll("section.secret");
      elements.forEach(e => e.parentNode.removeChild(e));
    }

    // Plan text content replacements
    let updateTextArray = true;
    let text = [];

    // Replace entity links
    if ( entities ) {
      if ( updateTextArray ) text = TextEditor._getTextNodes(html);
      const entityTypes = CONST.ENTITY_LINK_TYPES.concat("Compendium").concat(CONFIG.MNM3E.PSEUDO_ENTITIES).concat(CONFIG.MNM3E.MEASUREMENTS);
      const rgx = new RegExp(`@(${entityTypes.join("|")})\\[([^\\]]+)\\](?:{([^}]+)})?`, 'g');
      updateTextArray = TextEditor._replaceTextContent(text, rgx, TextEditor._createContentLink);
    }

    // Replace hyperlinks
    if ( links ) {
      if ( updateTextArray ) text = TextEditor._getTextNodes(html);
      const rgx = /(https?:\/\/)(www\.)?([^\s<]+)/gi;
      updateTextArray = TextEditor._replaceTextContent(text, rgx, TextEditor._createHyperlink);
    }

    // Replace inline rolls
    if ( rolls ) {
      rollData = rollData instanceof Function ? rollData() : (rollData || {});
      if (updateTextArray) text = TextEditor._getTextNodes(html);
      const rgx = /\[\[(\/[a-zA-Z]+\s)?(.*?)([\]]{2,3})(?:{([^}]+)})?/gi;
      updateTextArray = TextEditor._replaceTextContent(text, rgx, (...args) => TextEditor._createInlineRoll(...args, rollData));
    }

    // Return the enriched HTML
    return html.innerHTML;
  };

  /* -------------------------------------------- */

  /**
   * Create a dynamic entity link from a regular expression match
   * @param {string} match          The full matched string
   * @param {string} type           The matched entity type or "Compendium"
   * @param {string} target         The requested match target (_id or name)
   * @param {string} name           A customized or over-ridden display name for the link
   * @return {HTMLAnchorElement}    An HTML element for the entity link
   * @private
   */
  TextEditor._createContentLink = (match, type, target, name) => {

    // Prepare replacement data
    const data = {
      cls: ["entity-link"],
      icon: null,
      dataset: {},
      name: name
    };
    let broken = false;

    // Get a matched World document
    if (CONST.ENTITY_TYPES.includes(type)) {

      // Get the linked Document
      const config = CONFIG[type];
      const collection = game.collections.get(type);
      const document = /^[a-zA-Z0-9]{16}$/.test(target) ? collection.get(target) : collection.getName(target);
      if (!document) broken = true;

      // Update link data
      data.name = data.name || (broken ? target : document.name);
      data.icon = config.sidebarIcon;
      data.dataset = {entity: type, id: broken ? null : document.id};
    }

    // Get a matched Compendium entity
    else if (type === "Compendium") {

      // Get the linked Entity
      let [scope, packName, id] = target.split(".");
      const pack = game.packs.get(`${scope}.${packName}`);
      if ( pack ) {
        data.dataset = {pack: pack.collection};
        data.icon = CONFIG[pack.metadata.entity].sidebarIcon;

        // If the pack is indexed, retrieve the data
        if (pack.index.size) {
          const index = pack.index.find(i => (i._id === id) || (i.name === id));
          if ( index ) {
            if ( !data.name ) data.name = index.name;
            data.dataset.id = index._id;
          }
          else broken = true;
        }

        // Otherwise assume the link may be valid, since the pack has not been indexed yet
        if ( !data.name ) data.name = data.dataset.lookup = id;
      }
      else broken = true;
    }

    // Handle pseudo entities
    else if (CONFIG.MNM3E.PSEUDO_ENTITIES.includes(type)) {
      let a = $(PseudoEntities.createContentLink(match, type, target, name))[0];
      a.draggable = true;
      return a;
    }

    // Handle measurements
    else if (CONFIG.MNM3E.MEASUREMENTS.includes(type)) {
      let a = $(PseudoEntities.createMeasurementLink(match, type, target, name))[0];
      a.draggable = true;
      return a;
    }

    // Flag a link as broken
    if (broken) {
      data.icon = "fas fa-unlink";
      data.cls.push("broken");
    }

    // Construct the formed link
    const a = document.createElement('a');
    a.classList.add(...data.cls);
    a.draggable = true;
    for (let [k, v] of Object.entries(data.dataset)) {
      a.dataset[k] = v;
    }
    a.innerHTML = `<i class="${data.icon}"></i> ${data.name}`;
    return a;
  }

}