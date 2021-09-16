/**
 * Extend the base Actor document by defining a custom roll data structure which is ideal for the Simple system.
 * @extends {Actor}
 */
export class MnM3eActor extends Actor {

	/** @override */
	prepareData() {
		// Prepare data for the actor. Calling the super version of this executes
		// the following, in order: data reset (to clear active effects),
		// prepareBaseData(), prepareEmbeddedDocuments() (including active effects),
		// prepareDerivedData().
		super.prepareData();
	}

	/** @override */
	prepareBaseData() {
		// Data modifications in this step occur before processing embedded
		// documents or derived data.
		const data = this.data.data;

		// Reset the bonus of abilities, skills, defences, and initiative to 0.
		for (let [k, v] of Object.entries(data.abilities)) v.bonus = 0;
		for (let [k, v] of Object.entries(data.skills)) v.bonus = 0;
		for (let [k, v] of Object.entries(data.defences)) v.bonus = 0;
		data.attributes.ini.bonus = 0;
	}

	/**
	 * @override
	 * Augment the basic actor data with additional dynamic data. Typically,
	 * you'll want to handle most of your calculated/derived data in this step.
	 * Data calculated in this step should generally not exist in template.json
	 * (such as ability modifiers rather than ability scores) and should be
	 * available both inside and outside of character sheets (such as if an actor
	 * is queried and has a roll executed directly from it).
	 */
	prepareDerivedData() {
		const actorData = this.data;
		const data = actorData.data;
		const flags = actorData.flags.mnm3e || {};

		// Calculate the total bonus for each ability
		for (let [key, ability] of Object.entries(data.abilities)) {
			ability.total = (+ability.rank) + (+ability.bonus);
		}

		// Calculate the total bonus for each skill, adding their base ability ranks as well
		for (let [key, skill] of Object.entries(data.skills)) {
			skill.total = (+skill.rank) + (+(data.abilities[skill.ability]?.total ?? 0)) + (+skill.bonus);
		}

		// Calculate the total bonus for each defence
		for (let [key, defence] of Object.entries(data.defences)) {
			defence.total = (+defence.rank) + (+(data.abilities[defence.ability]?.total ?? 0)) + (+defence.bonus);
			defence.static = 10 + defence.total;
		}

		// Calculate the total initiative bonus
		data.attributes.ini.total = (+data.attributes.ini.rank) + (+(data.abilities[data.attributes.ini.ability]?.total ?? 0)) + (+data.attributes.ini.bonus);

		// Make separate methods for each Actor type (character, npc, etc.) to keep
		// things organized.
		this._prepareCharacterData(actorData);
		this._prepareNpcData(actorData);
	}

	/**
	 * Prepare Character type specific data
	 */
	_prepareCharacterData(actorData) {
		if (actorData.type !== 'character') return;
		const data = actorData.data;
	}

	/**
	 * Prepare NPC type specific data
	 */
	_prepareNpcData(actorData) {
		if (actorData.type !== 'npc') return;
		const data = actorData.data;
	}

	/**
	 * Override getRollData() that's supplied to rolls.
	 */
	getRollData() {
		const data = super.getRollData();

		// Prepare character roll data.
		this._getCharacterRollData(data);

		return data;
	}

	/**
	 * Prepare character roll data.
	 */
	_getCharacterRollData(data) {
		if (this.data.type !== 'character') return;

		// Copy the ability scores to the top level, so that rolls can use
		// formulas like `@str.mod + 4`.
		if (data.abilities) {
			for (let [k, v] of Object.entries(data.abilities)) {
				data[k] = foundry.utils.deepClone(v);
			}
		}

		// Add level for easier access, or fall back to 0.
		data.lvl = data.attributes.power.lvl ?? 0;
	}

	async _preCreate(data, options, user) {
		await super._preCreate(data, options, user);

		// Player character configuration
		if (this.type === "character") {
			this.data.token.update({vision: true, actorLink: true, disposition: 1});
		}
        // NPC character configuration
        else if (this.type === "npc") {
            this.data.token.update({vision: true, actorLink: true, disposition: 2});
        }
	}

}
