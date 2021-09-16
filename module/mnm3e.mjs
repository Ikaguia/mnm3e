// Import document classes.
import { MnM3eActor } from "./documents/actor.mjs";
import { MnM3eItem } from "./documents/item.mjs";
// Import sheet classes.
import { MnM3eActorSheet } from "./sheets/actor-sheet.mjs";
import { MnM3eItemSheet } from "./sheets/item-sheet.mjs";
// Import helper/utility classes and constants.
import { preloadHandlebarsTemplates } from "./helpers/templates.mjs";
import { MNM3E } from "./helpers/config.mjs";
// Import hooks
import { registerHooks } from "./helpers/hooks.mjs"

/* -------------------------------------------- */
/*  Init Hook                                   */
/* -------------------------------------------- */

Hooks.once('init', async function() {

  // Add utility classes to the global game object so that they're more easily
  // accessible in global contexts.
  game.mnm3e = {
    MnM3eActor,
    MnM3eItem
  };

  // Add custom constants for configuration.
  CONFIG.MNM3E = MNM3E;

  /**
   * Set an initiative formula for the system
   * @type {String}
   */
  CONFIG.Combat.initiative = {
    formula: "1d20 + @attributes.ini.total",
    decimals: 2
  };

  // Define custom Document classes
  CONFIG.Actor.documentClass = MnM3eActor;
  CONFIG.Item.documentClass = MnM3eItem;

  // Register sheet application classes
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("mnm3e", MnM3eActorSheet, { makeDefault: true });
  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("mnm3e", MnM3eItemSheet, { makeDefault: true });

  // Preload Handlebars templates.
  return preloadHandlebarsTemplates();
});

registerHooks();
