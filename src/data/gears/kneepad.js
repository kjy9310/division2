const kneepads = {
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
      name: 'Patience',
      type1: 'Active',
      type2: 'Defensive',
    },
    {
      name: 'Entrench',
      type1: 'Active',
      type2: 'Defensive',
    },
    {
      name: 'Calculated',
      type1: 'Active',
      type2: 'Utility',
    },
    {
      name: 'Braced',
      type1: 'Active',
      type2: 'Utility',
    },
    {
      name: 'Cloaked',
      type1: 'Active',
      type2: 'Utility',
    },
  ],
  equipments: [
    {
      name: 'Sidewinder Kneepads',
      brand: 'Gila Guard',
      talents: [
        {
          Common: ['Offensive', 'Defensive'],
          Active: ['Defensive'],
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
        Utility: 0,
      },
      attribute: [
        { type: ['Defensive'] },
      ],
    },
    {
      name: 'HX 02 / HX 02 Replica / Salvaged HX 02',
      brand: 'China Light Industries Corporation',
      talents: [
        {
          Common: ['Utility'],
          Active: ['Utility'],
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
        { type: ['Offensive', 'Utility'] },
      ],
    },
    {
      name: '"Dingson" Protection Pads / Salvaged "Dingson" Protection Pads',
      brand: 'Overlord Armaments',
      talents: [
        {
          Common: ['Offensive'],
          Active: ['Offensive'],
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
        { type: ['Offensive', 'Defensive'] },
      ],
    },
    {
      name: 'Urban Warfare Kneepads',
      brand: 'Providence Defense',
      talents: [
        {
          Common: ['Offensive', 'Defensive', 'Utility'],
          Active: [],
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
      name: '"Tay" Protective Pads / "Tay" Protective Pads Replica',
      brand: 'Douglas & Harding',
      talents: [
        {
          Common: ['Offensive', 'Defensive', 'Utility'],
          Active: [],
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
        { type: ['Offensive', 'Utility'] },
      ],
    },
    {
      name: 'Kn├ñskydd Knee Protectors',
      brand: 'Fenris Group AB',
      talents: [
        {
          Common: ['Offensive', 'Defensive'],
          Active: [],
        },
        {
          Common: [],
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
        { type: ['Offensive', 'Defensive', 'Utility'] },
      ],
    },
    {
      name: '"Patella" Knee Cups / "Patella" Knee Cups Replica / Salvaged "Patella" Knee Cups',
      brand: 'Wyvern Wear',
      talents: [
        {
          Common: ['Offensive'],
          Active: ['Utility'],
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
        { type: ['Offensive', 'Utility'] },
      ],
    },
    {
      name: 'Nimble Knee Protectors / Nimble Knee Protectors Replica / Salvaged Nimble Knee Protectors',
      brand: 'Sokolov Concern',
      talents: [
        {
          Common: ['Offensive', 'Defensive'],
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
        { type: ['Offensive'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
      ],
    },
    {
      name: '"Suneate" Knee Braces',
      brand: 'Murakami Industries',
      talents: [
        {
          Common: ['Offensive', 'Defensive'],
          Active: ['Defensive'],
        },
      ],
      protocol: {
        Offensive: 0,
        Defensive: 1,
        Utility: 0,
      },
      system: {
        Offensive: 0,
        Defensive: 0,
        Utility: 0,
      },
      attribute: [
        { type: ['Defensive'] },
      ],
    },
    {
      name: '"Suneate" Knee Braces Replica / Salvaged "Suneate" Knee Braces',
      brand: 'Murakami Industries',
      talents: [
        {
          Common: ['Offensive', 'Defensive'],
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
        { type: ['Defensive'] },
      ],
    },
  ],
};

export default kneepads;
