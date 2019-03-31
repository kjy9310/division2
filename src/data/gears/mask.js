const masks = {
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
      name: 'Javelina Mask / Javelina Mask Replica',
      brand: 'Gila Guard',
      talents: [
        {
          Common: ['Offensive', 'Defensive'],
          Active: ['Offensive', 'Defensive'],
        },
      ],
      protocol: {
        Offensive: 0,
        Defensive: 0,
        Utility: 1,
      },
      system: {
        Offensive: 0,
        Defensive: 0,
        Utility: 0,
      },
      attribute: [
        { type: ['Offensive'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
      ],
    },
    {
      name: 'Svalinn Heavy Breather / Svalinn Heavy Breather Replica',
      brand: 'Richter & Kaiser GmbH',
      talents: [
        {
          Common: ['Offensive', 'Utility'],
          Active: [],
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
        Utility: 0,
      },
      attribute: [
        { type: ['Offensive'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
      ],
    },
    {
      name: 'Cascades Mask / Cascades Mask Replica',
      brand: 'Yaahl Gear',
      talents: [
        {
          Common: ['Defensive'],
          Active: ['Defensive'],
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
        Utility: 0,
      },
      attribute: [
        { type: ['Defensive', 'Utility'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
      ],
    },
    {
      name: 'MJ 54 / MJ 54 Replica',
      brand: 'China Light Industries Corporation',
      talents: [
        {
          Common: ['Utility'],
          Active: ['Utility'],
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
        Utility: 0,
      },
      attribute: [
        { type: ['Offensive', 'Utility'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
      ],
    },
    {
      name: 'Field Protective Mask',
      brand: 'Providence Defense',
      talents: [
        {
          Common: ['Offensive', 'Defensive', 'Utility'],
          Active: [],
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
        Utility: 0,
      },
      attribute: [
        { type: ['Offensive', 'Defensive', 'Utility'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
      ],
    },
    {
      name: 'Combat Mask "Cete" / Combat Mask "Cete" Replica / Salvaged Combat Mask "Cete"',
      brand: 'Badger Tuff',
      talents: [
        {
          Common: [],
          Active: [],
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
        Utility: 0,
      },
      attribute: [
        { type: ['Defensive'] },
        { type: ['Offensive', 'Defensive'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
      ],
    },
    {
      name: '"Lomond" Medium Breather / "Lomond" Medium Breather Replica / Salvaged "Lomond" Medium Breather',
      brand: 'Douglas & Harding',
      talents: [
        {
          Common: ['Defensive'],
          Active: ['Defensive'],
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
        Utility: 0,
      },
      attribute: [
        { type: ['Offensive', 'Utility'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
      ],
    },
    {
      name: '"Maxillam" Respirator',
      brand: 'Wyvern Wear',
      talents: [
        {
          Common: ['Offensive', 'Utility'],
          Active: ['Offensive'],
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
        Utility: 0,
      },
      attribute: [
        { type: ['Offensive', 'Utility'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
      ],
    },
    {
      name: 'Special Operations Mask / Salvaged Special Operations Mask',
      brand: 'Sokolov Concern',
      talents: [
        {
          Common: ['Offensive', 'Defensive'],
          Active: ['Offensive', 'Defensive'],
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
        Utility: 0,
      },
      attribute: [
        { type: ['Offensive'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
      ],
    },
    {
      name: '"Mengu" Face Protection / Julius\'s "Mengu" Face Protection / Salvaged "Mengu" Face Protection',
      brand: 'Murakami Industries',
      talents: [
        {
          Common: ['Offensive', 'Defensive'],
          Active: ['Offensive', 'Defensive'],
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
        Utility: 0,
      },
      attribute: [
        { type: ['Defensive'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
      ],
    },
  ],
};

export default masks;
