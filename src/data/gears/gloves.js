const gloves = {
  talents: [
    {
      name: 'Critical',
      type1: 'Common',
      type2: 'Offensive',
    },
    {
      name: 'Surgical',
      type1: 'Common',
      type2: 'Offensive',
    },
    {
      name: 'Precise',
      type1: 'Common',
      type2: 'Offensive',
    },
    {
      name: 'Devastating',
      type1: 'Common',
      type2: 'Offensive',
    },
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
      name: 'Wicked',
      type1: 'Active',
      type2: 'Offensive',
    },
    {
      name: 'Obliterate',
      type1: 'Active',
      type2: 'Offensive',
    },
    {
      name: 'Opportunistic',
      type1: 'Active',
      type2: 'Offensive',
    },
    {
      name: 'Compensated',
      type1: 'Active',
      type2: 'Offensive',
    },
    {
      name: 'Clutch',
      type1: 'Active',
      type2: 'Defensive',
    },
    {
      name: 'Terminate',
      type1: 'Active',
      type2: 'Utility',
    },
    {
      name: 'To Order',
      type1: 'Active',
      type2: 'Utility',
    },
    {
      name: 'Knee Cap',
      type1: 'Active',
      type2: 'Utility',
    },
  ],
  equipments: [
    {
      name: 'Station Grip Gloves',
      brand: '5.11 Tactical',
      talents: [
        {
          Common: ['Offensive', 'Defensive', 'Utility'],
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
        Defensive: 0,
        Utility: 0,
      },
      attribute: [
        { type: ['Offensive'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
      ],
    },
    {
      name: 'Diamondback Gloves / Diamondback Gloves Replica',
      brand: 'Gila Guard',
      talents: [
        {
          Common: ['Offensive', 'Defensive'],
          Active: ['Offensive', 'Utility'],
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
        { type: ['Defensive'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
      ],
    },
    {
      name: 'Shasta Gloves',
      brand: 'Yaahl Gear',
      talents: [
        {
          Common: ['Defensive'],
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
        Defensive: 0,
        Utility: 0,
      },
      attribute: [
        { type: ['Defensive', 'Utility'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
      ],
    },
    {
      name: 'Olympic Gloves / Salvaged Olympic Gloves',
      brand: 'Yaahl Gear',
      talents: [
        {
          Common: ['Offensive', 'Defensive', 'Utility'],
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
      name: 'ST 520 / Salvaged ST 520',
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
      name: '"Neptune" Protection Gloves / "Neptune" Protection Gloves Replica',
      brand: 'Overlord Armaments',
      talents: [
        {
          Common: ['Offensive'],
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
      name: 'Tactical Assault Gloves',
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
      name: 'Durability Gloves "Meles" / Durability Gloves "Meles" Replica',
      brand: 'Badger Tuff',
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
        { type: ['Defensive'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
      ],
    },
    {
      name: 'Climbing Gloves / Climbing Gloves Replica',
      brand: 'Alps Summit Armament',
      talents: [
        {
          Common: ['Utility'],
          Active: ['Defensive', 'Utility'],
        },
      ],
      protocol: {
        Offensive: 1,
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
      ],
    },
    {
      name: 'Hybrid FL Gloves',
      brand: 'Alps Summit Armament',
      talents: [
        {
          Common: [],
          Active: ['Defensive', 'Utility'],
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
        { type: ['Offensive', 'Defensive', 'Utility'] },
      ],
    },
    {
      name: 'Salvaged Hybrid FL Gloves',
      brand: 'Alps Summit Armament',
      talents: [
        {
          Common: ['Defensive', 'Utility'],
          Active: [],
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
        { type: ['Offensive', 'Defensive', 'Utility'] },
      ],
    },
    {
      name: 'Heracles Dexterity Gloves / Heracles Dexterity Gloves Replica',
      brand: 'Airaldi Holdings',
      talents: [
        {
          Common: [],
          Active: ['Offensive', 'Utility'],
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
      ],
    },
    {
      name: 'Persephone Precision Gloves / Salvaged Persephone Precision Gloves replica',
      brand: 'Airaldi Holdings',
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
        { type: ['Offensive', 'Defensive', 'Utility'] },
      ],
    },
    {
      name: '"Kote" Hand Guards',
      brand: 'Murakami Industries',
      talents: [
        {
          Common: ['Offensive', 'Defensive'],
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
        Defensive: 0,
        Utility: 0,
      },
      attribute: [
        { type: ['Defensive'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
      ],
    },
    {
      name: '"Yugake" Firearm Gloves',
      brand: 'Murakami Industries',
      talents: [
        {
          Common: ['Offensive', 'Defensive', 'Utility'],
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

export default gloves;

