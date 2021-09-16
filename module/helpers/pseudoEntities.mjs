export default class PseudoEntities {

	/**
	 * Create a dynamic entity link from a regular expression match
	 * @param {string} match          The full matched string
	 * @param {string} type           The matched entity type or "Compendium"
	 * @param {string} target         The requested match target (_id or name)
	 * @param {string} name           A customized or over-ridden display name for the link
	 * @return {HTMLAnchorElement}    An HTML element for the entity link
	 * @private
	 */
	static createContentLink(match, type, target, inputName) {
		switch (type) {
			// case "Power Effect":
			// 	return `<a class="power-effect-link" data-target="${target}">${name ? name : target}</a>`
			// case "Power Modifier":
			// 	return `<a class="power-modifier-link" data-target="${target}">${name ? name : target}</a>`
			// case "Advantage":
			// 	return `<a class="advantage-link" data-target="${target}">${name ? name : target}</a>`
			case "Action":
				const action = CONFIG.MNM3E.actions.find(a => game.i18n.localize(a.name).toLowerCase() === target.toLowerCase());

				if (!action) console.error(`Invalid action '${target}'`);
				else {
					const name = game.i18n.localize(action.name);
					const abbr = game.i18n.localize(action.abbr);
					const desc = game.i18n.localize(action.desc);
					const type = game.i18n.localize(action.type);
					return `<a class="action-link" data-target="${action}" title="${name} (${type}): ${desc}">${inputName ? inputName : name}</a>`
				}
			case "Maneuver":
				return `<a class="maneuver-link" data-target="${target}">${name ? name : target}</a>`
			case "Condition":
				return `<a class="condition-link" data-target="${target}">${name ? name : target}</a>`
			case "Rule":
				return `<a class="rule-link" data-target="${target}">${name ? name : target}</a>`
			default:
				console.error(`Invalid entity type '${type}'`);
		}
		return `<a>${name ? name : target ? target : type}</a>`
	}

	/**
	 * Create a dynamic entity link from a regular expression match
	 * @param {string} match          The full matched string
	 * @param {string} type           The matched entity type or "Compendium"
	 * @param {string} target         The requested match target (_id or name)
	 * @param {string} name           A customized or over-ridden display name for the link
	 * @return {HTMLAnchorElement}    An HTML element for the entity link
	 * @private
	 */
	static createMeasurementLink(match, type, target, name) {
		if (CONFIG.MNM3E.DERIVED_MEASUREMENTS[type]) {
			// DERIVED
			const measurement = CONFIG.MNM3E.DERIVED_MEASUREMENTS[type];

			let targets = target.split('|').map(t => (t === '?') ? '?' : parseInt(t, 10));

			if (targets.length < measurement.length+1){
				while (targets.length < measurement.length) targets.push(0);
				targets.push((targets.filter(t => t === '?').length === 0) ? '?' : 0);
			}

			const unknownInputs = targets.filter(t => t === '?').length;
			const validInputs = targets.filter(t => t !== NaN).length;

			if (unknownInputs !== 1) {
				return console.warn(`Invalid input, '${type}' expects exactly 1 '?' input. Received '${target}'.`);
			}
			if (targets.length !== validInputs) {
				return console.warn(`Invalid input, '${type}' expects integers or '?'. Received '${target}'.`);
			}
			if (targets.length > (measurement.length + 1)){
				return console.warn(`Invalid input, '${type}' expects up to ${measurement.length + 1} inputs, received '${target}'.`);
			}


			if (type == "Speed") {
				let [spd, time, dist] = targets;
				if (spd  === '?') spd  = dist - time;
				if (time === '?') time = dist - spd;
				if (dist === '?') dist = time + spd;

				let time_str = (time < -5 || time > 30) ? 31 : time;
				let dist_str = (dist < -5 || dist > 30) ? 31 : dist;

				time_str = game.i18n.localize(CONFIG.MNM3E.measurements5.time[5+time_str]);
				dist_str = game.i18n.localize(CONFIG.MNM3E.measurements5.distance[5+dist_str]);

				return `<a class="measurement-speed-link" title="${dist_str} / ${time_str}">Speed rank ${spd}</a>`;
			}
			else if (type == "Strength") {
				let [str, mass, dist] = targets;
				if (str  === '?') str = dist + mass;
				if (mass === '?') mass = str - dist;
				if (dist === '?') dist = str - mass;

				let mass_str = (mass < -5 || mass > 30) ? 31 : mass;
				let dist_str = (dist < -5 || dist > 30) ? 31 : dist;

				mass_str = game.i18n.localize(CONFIG.MNM3E.measurements5.mass[5+mass_str]);
				dist_str = game.i18n.localize(CONFIG.MNM3E.measurements5.distance[5+dist_str]);

				return `<a class="measurement-strength-link" title="Throws ${mass_str} up to ${dist_str} away.">Strength rank ${str}</a>`;
			}
			else console.error(`Invalid entity type '${type}'`);
		}

		// BASE
		target = parseInt(target, 10);
		if (target === NaN) return console.warn(`Invalid input, '${type}' expects exactly 1 integer input. Received '${target}'.`);

		const abbr = type.toLowerCase();
		let str = (target < -5 || target > 30) ? 31 : target;
		str = game.i18n.localize(CONFIG.MNM3E.measurements5[abbr][5+str]);

		return `<a class="measurement-${abbr}-link" title="${str}">${type} rank ${target}</a>`;
	}

}