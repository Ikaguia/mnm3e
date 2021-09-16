export const MNM3E = {};

/**
 * The set of Ability Scores used within the sytem.
 * @type {Object}
 */
MNM3E.abilities = {
	"str": "MNM3E.AbilityStr",
	"sta": "MNM3E.AbilitySta",
	"agi": "MNM3E.AbilityAgi",
	"dex": "MNM3E.AbilityDex",
	"fgt": "MNM3E.AbilityFgt",
	"int": "MNM3E.AbilityInt",
	"awe": "MNM3E.AbilityAwe",
	"pre": "MNM3E.AbilityPre"
};

MNM3E.abilityAbbreviations = {
	"str": "MNM3E.AbilityStrAbbr",
	"sta": "MNM3E.AbilityStaAbbr",
	"agi": "MNM3E.AbilityAgiAbbr",
	"dex": "MNM3E.AbilityDexAbbr",
	"fgt": "MNM3E.AbilityFgtAbbr",
	"int": "MNM3E.AbilityIntAbbr",
	"awe": "MNM3E.AbilityAweAbbr",
	"pre": "MNM3E.AbilityPreAbbr"
};

/**
 * The set of Skills used within the sytem.
 * @type {Object}
 */
MNM3E.skills = {
	"acr": "MNM3E.SkillAcr",
	"ath": "MNM3E.SkillAth",
	"cc1": "MNM3E.SkillCc1",
	"cc2": "MNM3E.SkillCc2",
	"cc3": "MNM3E.SkillCc3",
	"cc4": "MNM3E.SkillCc4",
	"dec": "MNM3E.SkillDec",
	"ex1": "MNM3E.SkillEx1",
	"ex2": "MNM3E.SkillEx2",
	"ex3": "MNM3E.SkillEx3",
	"ex4": "MNM3E.SkillEx4",
	"ins": "MNM3E.SkillIns",
	"int": "MNM3E.SkillInt",
	"inv": "MNM3E.SkillInv",
	"prc": "MNM3E.SkillPrc",
	"prs": "MNM3E.SkillPrs",
	"rc1": "MNM3E.SkillRc1",
	"rc2": "MNM3E.SkillRc2",
	"rc3": "MNM3E.SkillRc3",
	"rc4": "MNM3E.SkillRc4",
	"soh": "MNM3E.SkillSoh",
	"stl": "MNM3E.SkillStl",
	"tec": "MNM3E.SkillTec",
	"trt": "MNM3E.SkillTrt",
	"veh": "MNM3E.SkillVeh"
};

MNM3E.skillAbbreviations = {
	"acr": "MNM3E.SkillAcrAbbr",
	"ath": "MNM3E.SkillAthAbbr",
	"cc1": "MNM3E.SkillCc1Abbr",
	"cc2": "MNM3E.SkillCc2Abbr",
	"cc3": "MNM3E.SkillCc3Abbr",
	"cc4": "MNM3E.SkillCc4Abbr",
	"dec": "MNM3E.SkillDecAbbr",
	"ex1": "MNM3E.SkillEx1Abbr",
	"ex2": "MNM3E.SkillEx2Abbr",
	"ex3": "MNM3E.SkillEx3Abbr",
	"ex4": "MNM3E.SkillEx4Abbr",
	"ins": "MNM3E.SkillInsAbbr",
	"int": "MNM3E.SkillIntAbbr",
	"inv": "MNM3E.SkillInvAbbr",
	"prc": "MNM3E.SkillPrcAbbr",
	"prs": "MNM3E.SkillPrsAbbr",
	"rc1": "MNM3E.SkillRc1Abbr",
	"rc2": "MNM3E.SkillRc2Abbr",
	"rc3": "MNM3E.SkillRc3Abbr",
	"rc4": "MNM3E.SkillRc4Abbr",
	"soh": "MNM3E.SkillSohAbbr",
	"stl": "MNM3E.SkillStlAbbr",
	"tec": "MNM3E.SkillTecAbbr",
	"trt": "MNM3E.SkillTrtAbbr",
	"veh": "MNM3E.SkillVehAbbr"
};

/**
 * The set of Defences used within the sytem.
 * @type {Object}
 */
MNM3E.defences = {
	"dod": "MNM3E.DefenceDod",
	"par": "MNM3E.DefencePar",
	"for": "MNM3E.DefenceFor",
	"wil": "MNM3E.DefenceWil",
	"tou": "MNM3E.DefenceTou",
};

MNM3E.defenceAbbreviations = {
	"dod": "MNM3E.DefenceDodAbbr",
	"par": "MNM3E.DefenceParAbbr",
	"for": "MNM3E.DefenceForAbbr",
	"wil": "MNM3E.DefenceWilAbbr",
	"tou": "MNM3E.DefenceTouAbbr",
};

MNM3E.initiative = "MNM3E.Ini";
MNM3E.initiativeAbbreviation = "MNM3E.IniAbbr";


MNM3E.PSEUDO_ENTITIES = [
	// "Power Effect",
	// "Power Modifier",
	// "Advantage",
	"Action",
	"Maneuver",
	"Condition",
	"Rule"
];

MNM3E.MEASUREMENTS = [
	"Mass",
	"Time",
	"Distance",
	"Volume",
	"Speed",
	"Strength"
];

MNM3E.DERIVED_MEASUREMENTS = {
	"Speed": ["Time", "Distance"],
	"Strength": ["Mass", "Distance"]
};

MNM3E.measurements5 = {
	mass: [
		"MNM3E.MeasurementMass-5",
		"MNM3E.MeasurementMass-4",
		"MNM3E.MeasurementMass-3",
		"MNM3E.MeasurementMass-2",
		"MNM3E.MeasurementMass-1",
		"MNM3E.MeasurementMass00",
		"MNM3E.MeasurementMass01",
		"MNM3E.MeasurementMass02",
		"MNM3E.MeasurementMass03",
		"MNM3E.MeasurementMass04",
		"MNM3E.MeasurementMass05",
		"MNM3E.MeasurementMass06",
		"MNM3E.MeasurementMass07",
		"MNM3E.MeasurementMass08",
		"MNM3E.MeasurementMass09",
		"MNM3E.MeasurementMass10",
		"MNM3E.MeasurementMass11",
		"MNM3E.MeasurementMass12",
		"MNM3E.MeasurementMass13",
		"MNM3E.MeasurementMass14",
		"MNM3E.MeasurementMass15",
		"MNM3E.MeasurementMass16",
		"MNM3E.MeasurementMass17",
		"MNM3E.MeasurementMass18",
		"MNM3E.MeasurementMass19",
		"MNM3E.MeasurementMass20",
		"MNM3E.MeasurementMass21",
		"MNM3E.MeasurementMass22",
		"MNM3E.MeasurementMass23",
		"MNM3E.MeasurementMass24",
		"MNM3E.MeasurementMass25",
		"MNM3E.MeasurementMass26",
		"MNM3E.MeasurementMass27",
		"MNM3E.MeasurementMass28",
		"MNM3E.MeasurementMass29",
		"MNM3E.MeasurementMass30",
		"MNM3E.MeasurementMassOoB"
	],
	time: [
		"MNM3E.MeasurementTime-5",
		"MNM3E.MeasurementTime-4",
		"MNM3E.MeasurementTime-3",
		"MNM3E.MeasurementTime-2",
		"MNM3E.MeasurementTime-1",
		"MNM3E.MeasurementTime00",
		"MNM3E.MeasurementTime01",
		"MNM3E.MeasurementTime02",
		"MNM3E.MeasurementTime03",
		"MNM3E.MeasurementTime04",
		"MNM3E.MeasurementTime05",
		"MNM3E.MeasurementTime06",
		"MNM3E.MeasurementTime07",
		"MNM3E.MeasurementTime08",
		"MNM3E.MeasurementTime09",
		"MNM3E.MeasurementTime10",
		"MNM3E.MeasurementTime11",
		"MNM3E.MeasurementTime12",
		"MNM3E.MeasurementTime13",
		"MNM3E.MeasurementTime14",
		"MNM3E.MeasurementTime15",
		"MNM3E.MeasurementTime16",
		"MNM3E.MeasurementTime17",
		"MNM3E.MeasurementTime18",
		"MNM3E.MeasurementTime19",
		"MNM3E.MeasurementTime20",
		"MNM3E.MeasurementTime21",
		"MNM3E.MeasurementTime22",
		"MNM3E.MeasurementTime23",
		"MNM3E.MeasurementTime24",
		"MNM3E.MeasurementTime25",
		"MNM3E.MeasurementTime26",
		"MNM3E.MeasurementTime27",
		"MNM3E.MeasurementTime28",
		"MNM3E.MeasurementTime29",
		"MNM3E.MeasurementTime30",
		"MNM3E.MeasurementTimeOoB"
	],
	distance: [
		"MNM3E.MeasurementDistance-5",
		"MNM3E.MeasurementDistance-4",
		"MNM3E.MeasurementDistance-3",
		"MNM3E.MeasurementDistance-2",
		"MNM3E.MeasurementDistance-1",
		"MNM3E.MeasurementDistance00",
		"MNM3E.MeasurementDistance01",
		"MNM3E.MeasurementDistance02",
		"MNM3E.MeasurementDistance03",
		"MNM3E.MeasurementDistance04",
		"MNM3E.MeasurementDistance05",
		"MNM3E.MeasurementDistance06",
		"MNM3E.MeasurementDistance07",
		"MNM3E.MeasurementDistance08",
		"MNM3E.MeasurementDistance09",
		"MNM3E.MeasurementDistance10",
		"MNM3E.MeasurementDistance11",
		"MNM3E.MeasurementDistance12",
		"MNM3E.MeasurementDistance13",
		"MNM3E.MeasurementDistance14",
		"MNM3E.MeasurementDistance15",
		"MNM3E.MeasurementDistance16",
		"MNM3E.MeasurementDistance17",
		"MNM3E.MeasurementDistance18",
		"MNM3E.MeasurementDistance19",
		"MNM3E.MeasurementDistance20",
		"MNM3E.MeasurementDistance21",
		"MNM3E.MeasurementDistance22",
		"MNM3E.MeasurementDistance23",
		"MNM3E.MeasurementDistance24",
		"MNM3E.MeasurementDistance25",
		"MNM3E.MeasurementDistance26",
		"MNM3E.MeasurementDistance27",
		"MNM3E.MeasurementDistance28",
		"MNM3E.MeasurementDistance29",
		"MNM3E.MeasurementDistance30",
		"MNM3E.MeasurementDistanceOoB"
	],
	volume: [
		"MNM3E.MeasurementVolume-5",
		"MNM3E.MeasurementVolume-4",
		"MNM3E.MeasurementVolume-3",
		"MNM3E.MeasurementVolume-2",
		"MNM3E.MeasurementVolume-1",
		"MNM3E.MeasurementVolume00",
		"MNM3E.MeasurementVolume01",
		"MNM3E.MeasurementVolume02",
		"MNM3E.MeasurementVolume03",
		"MNM3E.MeasurementVolume04",
		"MNM3E.MeasurementVolume05",
		"MNM3E.MeasurementVolume06",
		"MNM3E.MeasurementVolume07",
		"MNM3E.MeasurementVolume08",
		"MNM3E.MeasurementVolume09",
		"MNM3E.MeasurementVolume10",
		"MNM3E.MeasurementVolume11",
		"MNM3E.MeasurementVolume12",
		"MNM3E.MeasurementVolume13",
		"MNM3E.MeasurementVolume14",
		"MNM3E.MeasurementVolume15",
		"MNM3E.MeasurementVolume16",
		"MNM3E.MeasurementVolume17",
		"MNM3E.MeasurementVolume18",
		"MNM3E.MeasurementVolume19",
		"MNM3E.MeasurementVolume20",
		"MNM3E.MeasurementVolume21",
		"MNM3E.MeasurementVolume22",
		"MNM3E.MeasurementVolume23",
		"MNM3E.MeasurementVolume24",
		"MNM3E.MeasurementVolume25",
		"MNM3E.MeasurementVolume26",
		"MNM3E.MeasurementVolume27",
		"MNM3E.MeasurementVolume28",
		"MNM3E.MeasurementVolume29",
		"MNM3E.MeasurementVolume30",
		"MNM3E.MeasurementVolumeOoB"
	]
}

MNM3E.actions = [
	{
		name: 'MNM3E.actionAid',
		abbr: 'MNM3E.actionAidAbbr',
		desc: 'MNM3E.actionAidDesc',
		type: 'MNM3E.actionTypeStandard'
	},
	{
		name: 'MNM3E.actionAim',
		abbr: 'MNM3E.actionAimAbbr',
		desc: 'MNM3E.actionAimDesc',
		type: 'MNM3E.actionTypeStandard'
	},
	{
		name: 'MNM3E.actionAttack',
		abbr: 'MNM3E.actionAttackAbbr',
		desc: 'MNM3E.actionAttackDesc',
		type: 'MNM3E.actionTypeStandard'
	},
	{
		name: 'MNM3E.actionCharge',
		abbr: 'MNM3E.actionChargeAbbr',
		desc: 'MNM3E.actionChargeDesc',
		type: 'MNM3E.actionTypeStandard'
	},
	{
		name: 'MNM3E.actionCommand',
		abbr: 'MNM3E.actionCommandAbbr',
		desc: 'MNM3E.actionCommandDesc',
		type: 'MNM3E.actionTypeMove'
	},
	{
		name: 'MNM3E.actionCrawl',
		abbr: 'MNM3E.actionCrawlAbbr',
		desc: 'MNM3E.actionCrawlDesc',
		type: 'MNM3E.actionTypeMove'
	},
	{
		name: 'MNM3E.actionDefend',
		abbr: 'MNM3E.actionDefendAbbr',
		desc: 'MNM3E.actionDefendDesc',
		type: 'MNM3E.actionTypeStandard'
	},
	{
		name: 'MNM3E.actionDelay',
		abbr: 'MNM3E.actionDelayAbbr',
		desc: 'MNM3E.actionDelayDesc',
		type: 'MNM3E.actionTypeNo'
	},
	{
		name: 'MNM3E.actionDisarm',
		abbr: 'MNM3E.actionDisarmAbbr',
		desc: 'MNM3E.actionDisarmDesc',
		type: 'MNM3E.actionTypeStandard'
	},
	{
		name: 'MNM3E.actionDropItem',
		abbr: 'MNM3E.actionDropItemAbbr',
		desc: 'MNM3E.actionDropItemDesc',
		type: 'MNM3E.actionTypeFree'
	},
	{
		name: 'MNM3E.actionDropProne',
		abbr: 'MNM3E.actionDropProneAbbr',
		desc: 'MNM3E.actionDropProneDesc',
		type: 'MNM3E.actionTypeFree'
	},
	{
		name: 'MNM3E.actionEscape',
		abbr: 'MNM3E.actionEscapeAbbr',
		desc: 'MNM3E.actionEscapeDesc',
		type: 'MNM3E.actionTypeMove'
	},
	{
		name: 'MNM3E.actionGrab',
		abbr: 'MNM3E.actionGrabAbbr',
		desc: 'MNM3E.actionGrabDesc',
		type: 'MNM3E.actionTypeStandard'
	},
	{
		name: 'MNM3E.actionMove',
		abbr: 'MNM3E.actionMoveAbbr',
		desc: 'MNM3E.actionMoveDesc',
		type: 'MNM3E.actionTypeMove'
	},
	{
		name: 'MNM3E.actionReady',
		abbr: 'MNM3E.actionReadyAbbr',
		desc: 'MNM3E.actionReadyDesc',
		type: 'MNM3E.actionTypeStandard'
	},
	{
		name: 'MNM3E.actionRecover',
		abbr: 'MNM3E.actionRecoverAbbr',
		desc: 'MNM3E.actionRecoverDesc',
		type: 'MNM3E.actionTypeStandard'
	},
	{
		name: 'MNM3E.actionSmash',
		abbr: 'MNM3E.actionSmashAbbr',
		desc: 'MNM3E.actionSmashDesc',
		type: 'MNM3E.actionTypeStandard'
	},
	{
		name: 'MNM3E.actionStand',
		abbr: 'MNM3E.actionStandAbbr',
		desc: 'MNM3E.actionStandDesc',
		type: 'MNM3E.actionTypeMove'
	},
	{
		name: 'MNM3E.actionTrip',
		abbr: 'MNM3E.actionTripAbbr',
		desc: 'MNM3E.actionTripDesc',
		type: 'MNM3E.actionTypeStandard'
	}
]
