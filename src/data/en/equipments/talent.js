const talents = {
  'Hard Hitting': {
    name: 'Hard Hitting',
    description: 'Damage to Elites increased by 15%',
    requirement: '',
  },
  Vital: {
    name: 'Vital',
    description: 'Health increased by 20%',
    requirement: '',
  },
  Hardened: {
    name: 'Hardened',
    description: 'Armor increased by 10%',
    requirement: '',
  },
  Insulated: {
    name: 'Insulated',
    description: 'Hazard Protection increased by 10%',
    requirement: '',
  },
  Restorative: {
    name: 'Restorative',
    description: 'Health on Kill increased by 10%',
    requirement: '',
  },
  'Self Adjusting': {
    name: 'Self Adjusting',
    description: 'Armor Regeneration increased by 20%',
    requirement: '',
  },
  Empowered: {
    name: 'Empowered',
    description: 'Skill Power increased by 10%',
    requirement: '',
  },
  Surge: {
    name: 'Surge',
    description: 'Reduces Skill Cooldown by 10%',
    requirement: '',
  },
  Destructive: {
    name: 'Destructive',
    description: 'Explosive Damage increased by 20%',
    requirement: '',
  },
  Capacitive: {
    name: 'Capacitive',
    description: 'Battery Life for Skills increased by 20% (increases skill duration)',
    requirement: '',
  },
  Spotter: {
    name: 'Spotter',
    description: 'Damage increased to Pulsed enemies by 10%',
    requirement: '5 or more Utility',
  },
  Centered: {
    name: 'Centered',
    description: 'Headshot kills grant status effect immunity for 10 seconds',
    requirement: '4 or more Defense',
  },
  'Creeping Death': {
    name: 'Creeping Death',
    description: 'Causing Status Effect on a enemy has a chance to spread that same Status Effect to the nearest Enemy within 10m. Can only occur once every 15s',
    requirement: '3 or less Offense',
  },
  Trauma: {
    name: 'Trauma',
    description: 'Headshots have a 15% chance to Blind enemies for 3 seconds. 15s cooldown in PVP',
    requirement: 'Requires a Marksman Rifle or Rifle Equipped',
  },
  'Dialed In': {
    name: 'Dialed In',
    description: 'After aiming your weapon stability is increased by [25]% of your Weapon Accuracy for [5] seconds. (values TBD?)',
    requirement: '',
  },
  Beserk: {
    name: 'Beserk',
    description: 'For every 10% of your armor bar missing, weapon damage is increased by 10%',
    requirement: 'Shotgun/SMG/AR',
  },
  Bloodsucker: {
    name: 'Bloodsucker',
    description: 'Depleting an enemy\'s armor adds a stack of +20% bonus armor for 20s. Max stack is 5',
    requirement: '7 or more Defense',
  },
  'Unstoppable Force': {
    name: 'Unstoppable Force',
    description: 'After a kill your Weapon damage is increased by 2% for every 10000 armor of your maximum armor. Buff lasts for 10 seconds',
    requirement: '7 or more Defense',
  },
  Grenadier: {
    name: 'Grenadier',
    description: 'Destroying an enemy skill increases your equipped Grenade effect by 50% and increases All Resistance by 50% for 15 seconds',
    requirement: '4 or less Defense',
  },
  Unbreakable: {
    name: 'Unbreakable',
    description: 'After your armor breaks it is repaired by 25% and using an Armor Kit within 5s does not consume the Armor Kit. Can occur once every 60 seconds.',
    requirement: 'No other active talents affecting armor kits',
  },
  'Mad Bomber': {
    name: 'Mad Bomber',
    description: 'Grenade radius is increased by 150%. Grenades that kill an enemy are refunded',
    requirement: '4 or less Utility',
  },
  Safeguard: {
    name: 'Safeguard',
    description: 'Killing a target grants a 150% bonus to repairing and healing effects for 20s',
    requirement: '5 or less Offense',
  },
  Efficient: {
    name: 'Efficient',
    description: 'Using a Armor Kit while at 0 armor has a 50% chance to not consume the armor kit',
    requirement: 'No other active talents affecting armor kits',
  },
  'Tech Support': {
    name: 'Tech Support',
    description: 'Kills by active skills grant +25% Skill Damage and Skill Duration for 10s',
    requirement: '5 or more Utility',
  },
  Skilled: {
    name: 'Skilled',
    description: 'Skill kills have a 25% chance to reset all active skill cooldowns',
    requirement: '4 or more Utility',
  },
  'On the Ropes': {
    name: 'On the Ropes',
    description: 'While all Skills are on cooldown Weapon Damage is increased by 25%',
    requirement: '7 or more Utility',
  },
  Wicked: {
    name: 'Wicked',
    description: 'Damage is increased by 10% against Status effected enemies',
    requirement: '4 or more Offense',
  },
  Obliterate: {
    name: 'Obliterate',
    description: 'Destroying a targets armor increases Critical Hit Damage by 25% for 5 seconds',
    requirement: '4 or more Offense',
  },
  Opportunistic: {
    name: 'Opportunistic',
    description: 'Destroying an enemy\'s weak spot increases its damage taken from all source by 10% for 20s',
    requirement: 'Marksman/Shotgun',
  },
  Compensated: {
    name: 'Compensated',
    description: 'Weapon Damage is increased by 15% when you have less than 20% Critical Hit Chance.',
    requirement: '3 or less Offense',
  },
  Clutch: {
    name: 'Clutch',
    description: 'Critical hits restore 15% health per hit and 2% armor per hit based on what you are missing.',
    requirement: 'AR/SMG/LMG',
  },
  Terminate: {
    name: 'Terminate',
    description: 'Destroying a targets Armor increases Skill Damage by 35% for 15 seconds',
    requirement: '4 or more Utility',
  },
  'To Order': {
    name: 'To Order',
    description: 'Grenades can now be "cooked" by holding the fire button, making them explode earlier',
    requirement: '',
  },
  'Knee Cap': {
    name: 'Knee Cap',
    description: 'Shooting a Enemy in the legs applies a Bleed Status Effect.',
    requirement: '4 or Less Utility',
  },
  Devastating: {
    name: 'Devastating',
    description: 'Weapon Damage increased by 5%',
    requirement: '',
  },
  Precise: {
    name: 'Precise',
    description: 'Headshot Damage increased by 15%',
    requirement: '',
  },
  Surgical: {
    name: 'Surgical',
    description: 'Critical Hit Chance increased by 8%',
    requirement: '',
  },
  Critical: {
    name: 'Critical',
    description: 'Critical Hit Damage increased by 8%',
    requirement: '',
  },
  Reassigned: {
    name: 'Reassigned',
    description: 'Killing an enemy who is effected by a Status Effect has a chance to fill the remaining ammo in the magazine with a random Special Ammo type for 3 seconds. Can only happen once every 45 seconds.',
    requirement: '',
  },
  Gunslinger: {
    name: 'Gunslinger',
    description: 'Swapping to your Sidearm within 3 seconds of a kill increases Weapon damage by 20% for the entire magazine of the sidearm. Buff is lost on weapon swap or when the player exits combat.',
    requirement: '5 or less Defense',
  },
  Blacksmith: {
    name: 'Blacksmith',
    description: 'Killing a enemy with your sidearm instantly replenishes 25% armor based on your maximum armor. This can only happen once every 10 seconds',
    requirement: '5 or more Defense',
  },
  Bloodlust: {
    name: 'Bloodlust',
    description: 'Swapping to another weapon within 3 seconds after a kill, increases all weapon damage by 25%',
    requirement: '4 or less Defense',
  },
  'Filler Up': {
    name: 'Fill\'er Up',
    description: 'Reloading from empty reloads all weapons.',
    requirement: '',
  },
  Patience: {
    name: 'Patience',
    description: 'After staying in cover for 3 seconds, Armor repairs by 5% of your max Armor every second. Exiting cover stops armor recovery if in combat.',
    requirement: '7 or more Defense',
  },
  Entrench: {
    name: 'Entrench',
    description: 'Headshots while in cover repair your armor by 5% of your maximum armor.',
    requirement: 'Rifle/Marksman',
  },
  Calculated: {
    name: 'Calculated',
    description: 'Killing a enemy while in cover reduces active skill cooldowns by 20%',
    requirement: '7 or more Utility',
  },
  Braced: {
    name: 'Braced',
    description: 'Weapon Handling is increased by 25% for 10 seconds after entering cover. Buff is lost when the player exits cover.',
    requirement: '',
  },
  Cloaked: {
    name: 'Cloaked',
    description: 'When armor drops below 0, enemy electronics within 10m cannot track you for 10s. Can occur once every 30s',
    requirement: '5 or less Utility',
  },
};

export default talents;
