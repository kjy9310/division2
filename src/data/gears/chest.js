const chest = {
  talents: [
    {
      name: 'Hard Hitting',
      type1: 'Common',
      type2: 'Offensive',
    },
    {
      name: 'Insulated',
      type1: 'Common',
      type2: 'Defensive',
    },
    {
      name: 'Restorative',
      type1: 'Common',
      type2: 'Defensive',
    },
    {
      name: 'Self Adjusting',
      type1: 'Common',
      type2: 'Defensive',
    },
    {
      name: 'Empowered',
      type1: 'Common',
      type2: 'Utility',
    },
    {
      name: 'Surge',
      type1: 'Common',
      type2: 'Utility',
    },
    {
      name: 'Destructive',
      type1: 'Common',
      type2: 'Utility',
    },
    {
      name: 'Capacitive',
      type1: 'Common',
      type2: 'Utility',
    },
    {
      name: 'Spotter',
      type1: 'Active',
      type2: 'Offensive',
    },
    {
      name: 'Centered',
      type1: 'Active',
      type2: 'Defensive',
    },
    {
      name: 'Creeping Death',
      type1: 'Active',
      type2: 'Utility',
    },
    {
      name: 'Trauma',
      type1: 'Active',
      type2: 'Utility',
    },
    {
      name: 'Dialed In',
      type1: 'Active',
      type2: 'Utility',
    },
  ],
  equipments: [
    {
      name: 'TacLite Plate Carrier',
      brand: '5.11 Tactical',
      talents: [
        {
          Common: ['Offensive', 'Defensive', 'Utility'],
          Active: ['Offensive', 'Defensive', 'Utility'],
        },
      ],
      protocol: {
        Offensive: 1,
        Defensive: 0,
        Utility: 0,
      },
      system: {
        Offensive: 1,
        Defensive: 0,
        Utility: 0,
      },
      attribute: [
        { type: ['Offensive'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
      ],
    },
    {
      name: 'Armadillo Vest',
      brand: 'Gila Guard',
      talents: [
        {
          Common: ['Offensive', 'Defensive'],
          Active: ['Offensive', 'Defensive'],
        },
      ],
      protocol: {
        Offensive: 0,
        Defensive: 1,
        Utility: 0,
      },
      system: {
        Offensive: 1,
        Defensive: 1,
        Utility: 0,
      },
      attribute: [
        { type: ['Defensive'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
      ],
    },
    {
      name: 'Iguana Hauberk / Salvaged Iguana Hauberk',
      brand: 'Gila Guard',
      talents: [
        {
          Common: ['Offensive', 'Defensive'],
          Active: ['Offensive', 'Defensive'],
        },
      ],
      protocol: {
        Offensive: 0,
        Defensive: 1,
        Utility: 0,
      },
      system: {
        Offensive: 0,
        Defensive: 1,
        Utility: 1,
      },
      attribute: [
        { type: ['Defensive'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
      ],
    },
    {
      name: 'Ops Armor / Ops Armor Replica',
      brand: 'Petrov Defense Group',
      talents: [
        {
          Common: ['Offensive', 'Defensive', 'Utility'],
          Active: ['Defensive', 'Utility'],
        },
      ],
      protocol: {
        Offensive: 0,
        Defensive: 0,
        Utility: 0,
      },
      system: {
        Offensive: 0,
        Defensive: 0,
        Utility: 1,
      },
      attribute: [
        { type: ['Utility'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
      ],
    },
    {
      name: 'Crew-Adapted Chest Rig / Salvaged Crew-Adapted Chest Rig',
      brand: 'Petrov Defense Group',
      talents: [
        {
          Common: ['Defensive', 'Utility'],
          Active: ['Offensive', 'Defensive', 'Utility'],
        },
      ],
      protocol: {
        Offensive: 0,
        Defensive: 0,
        Utility: 0,
      },
      system: {
        Offensive: 0,
        Defensive: 1,
        Utility: 0,
      },
      attribute: [
        { type: ['Utility'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
      ],
    },
    
  ],
};

export default chest;
