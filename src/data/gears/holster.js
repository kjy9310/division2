const holster = {
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
      name: 'Reassigned',
      type1: 'Active',
      type2: 'Offensive',
    },
    {
      name: 'Gunslinger',
      type1: 'Active',
      type2: 'Defensive',
    },
    {
      name: 'Blacksmith',
      type1: 'Active',
      type2: 'Defensive',
    },
    {
      name: 'Bloodlust',
      type1: 'Active',
      type2: 'Defensive',
    },
    {
      name: 'Filler Up',
      type1: 'Active',
      type2: 'Utility',
    },
  ],
  equipments: [
    {
      name: 'Jackrabbit Holster',
      brand: 'Gila Guard',
      talents: [
        {
          Common: [],
          Active: [],
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
        { type: ['Defensive'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
      ],
    },
    {
      name: 'Pridwen Holster / Pridwen Holster Replica',
      brand: 'Richter & Kaiser GmbH',
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
        Utility: 1,
      },
      attribute: [
        { type: ['Offensive'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
      ],
    },
    {
      name: 'Jaivardhan Thigh Rig',
      brand: 'Richter & Kaiser GmbH',
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
        Offensive: 1,
        Defensive: 0,
        Utility: 0,
      },
      attribute: [
        { type: ['Offensive'] },
      ],
    },
    {
      name: 'Salvaged Jaivardhan Thigh Rig',
      brand: 'Richter & Kaiser GmbH',
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
        Offensive: 1,
        Defensive: 0,
        Utility: 0,
      },
      attribute: [
        { type: ['Offensive'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
      ],
    },
    {
      name: 'Drop Leg Holster / Drop Leg Holster Replica',
      brand: 'Petrov Defense Group',
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
        { type: ['Utility'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
      ],
    },
    {
      name: 'Modular Holster / Modular Holster Replica',
      brand: 'Providence Defense',
      talents: [
        {
          Common: [],
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
        { type: ['Offensive', 'Defensive', 'Utility'] },
      ],
    },
    {
      name: '"Morar" Holster System',
      brand: 'Douglas & Harding',
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
        Utility: 1,
      },
      attribute: [
        { type: ['Offensive', 'Utility'] },
      ],
    },
    {
      name: '"Awe" Thigh Mag/Holster / Salvaged "Awe" Thigh Mag/Holster',
      brand: 'Douglas & Harding',
      talents: [
        {
          Common: [],
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
        { type: ['Offensive', 'Defensive', 'Utility'] },
      ],
    },
    {
      name: 'Fodral Holster / Fodral Holster Replica',
      brand: 'Fenris Group AB',
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
        { type: ['Offensive', 'Defensive', 'Utility'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
      ],
    },
    {
      name: 'Salvaged Fodral Holster',
      brand: 'Fenris Group AB',
      talents: [
        {
          Common: ['Offensive'],
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
      name: '"Talon" Tactical Holster / "Talon" Tactical Holster Replica',
      brand: 'Wyvern Wear',
      talents: [
        {
          Common: [],
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
        { type: ['Offensive', 'Utility'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
      ],
    },
    {
      name: '"Didactyl" Pad Holster',
      brand: 'Wyvern Wear',
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
        Offensive: 0,
        Defensive: 0,
        Utility: 0,
      },
      attribute: [
        { type: ['Offensive', 'Utility'] },
      ],
    },
    {
      name: 'Salvaged "Didactyl" Pad Holster',
      brand: 'Wyvern Wear',
      talents: [
        {
          Common: [],
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
        { type: ['Offensive', 'Defensive', 'Utility'] },
      ],
    },
    {
      name: 'Artemis Fast Draw Holster',
      brand: 'Airaldi Holdings',
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
        Offensive: 1,
        Defensive: 0,
        Utility: 0,
      },
      attribute: [
        { type: ['Offensive', 'Defensive', 'Utility'] },
      ],
    },
    {
      name: 'Hera Pouch-Holster Combo',
      brand: 'Airaldi Holdings',
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
        { type: ['Offensive', 'Defensive', 'Utility'] },
      ],
    },
    {
      name: 'Salvaged Hera Pouch-Holster Combo',
      brand: 'Airaldi Holdings',
      talents: [
        {
          Common: [],
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
      name: '"Haidate" Thigh System / Katinka\'s "Haidate" Thigh System',
      brand: 'Murakami Industries',
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
        Utility: 1,
      },
      attribute: [
        { type: ['Defensive'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
      ],
    },
  ],
};

export default holster;
