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
    name: 'Restorative',
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
};

export default talents;
