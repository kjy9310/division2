const backpack = {
  talents: [
    {
      name: 'Hard Hitting',
      type1: 'Common',
      type2: 'Offensive',
    },
    {
      name: 'Vital',
      type1: 'Common',
      type2: 'Defensive',
    },
    {
      name: 'Hardened',
      type1: 'Common',
      type2: 'Defensive',
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
      name: 'Safeguard',
      type1: 'Active',
      type2: 'Offensive',
    },
    {
      name: 'Efficient',
      type1: 'Active',
      type2: 'Defensive',
    },
    {
      name: 'Tech Support',
      type1: 'Active',
      type2: 'Utility',
    },
    {
      name: 'Skilled',
      type1: 'Active',
      type2: 'Utility',
    },
    {
      name: 'On the Ropes',
      type1: 'Active',
      type2: 'Utility',
    },
  ],
  equipments: [
    {
      name: 'RUSH24 Backpack',
      brand: '5.11 Tactical',
      talents: [
        {
          Common: ['Offensive', 'Defensive', 'Utility'],
          Active: ['Offensive', 'Defensive', 'Utility'],
        },
        {
          Common: ['Offensive', 'Defensive'],
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
        { type: ['Offensive'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
      ],
    },
    {
      name: 'All Hazards Nitro Backpack',
      brand: '5.11 Tactical',
      talents: [
        {
          Common: ['Offensive', 'Defensive', 'Utility'],
          Active: ['Offensive', 'Defensive', 'Utility'],
        },
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
      name: 'All Hazards Prime Backpack',
      brand: '5.11 Tactical',
      talents: [
        {
          Common: ['Offensive', 'Defensive', 'Utility'],
          Active: ['Offensive', 'Defensive', 'Utility'],
        },
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
        Defensive: 1,
        Utility: 0,
      },
      attribute: [
        { type: ['Offensive'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
      ],
    },
    {
      name: 'RUSH12 Backpack',
      brand: '5.11 Tactical',
      talents: [
        {
          Common: ['Offensive', 'Defensive', 'Utility'],
          Active: ['Offensive', 'Defensive', 'Utility'],
        },
        {
          Common: ['Offensive', 'Defensive', 'Utility'],
          Active: [],
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
        { type: ['Offensive'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
      ],
    },
    {
      name: 'RUSH72 Backpack',
      brand: '5.11 Tactical',
      talents: [
        {
          Common: ['Offensive', 'Defensive', 'Utility'],
          Active: ['Offensive', 'Defensive', 'Utility'],
        },
        {
          Common: ['Offensive', 'Defensive', 'Utility'],
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
        { type: ['Offensive'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
      ],
    },
    {
      name: 'AMP24',
      brand: '5.11 Tactical',
      talents: [
        {
          Common: ['Offensive', 'Defensive', 'Utility'],
          Active: ['Offensive', 'Defensive', 'Utility'],
        },
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
        Utility: 1,
      },
      attribute: [
        { type: ['Offensive'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
      ],
    },
    {
      name: 'Gila Inventory System',
      brand: 'Gila Guard',
      talents: [
        {
          Common: ['Offensive', 'Defensive'],
          Active: [],
        },
        {
          Common: [],
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
      name: 'Big Horn Pack / Salvaged Big Horn Pack',
      brand: 'Gila Guard',
      talents: [
        {
          Common: [],
          Active: ['Offensive', 'Defensive'],
        },
        {
          Common: ['Offensive', 'Defensive', 'Utility'],
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
      name: 'Ancile Rucksack',
      brand: 'Richter & Kaiser GmbH',
      talents: [
        {
          Common: ['Offensive', 'Defensive', 'Utility'],
          Active: [],
        },
        {
          Common: [],
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
        { type: ['Offensive'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
      ],
    },
    {
      name: 'Aegis Knapsack / Salvaged Aegis Knapsack',
      brand: 'Richter & Kaiser GmbH',
      talents: [
        {
          Common: [],
          Active: ['Offensive', 'Defensive', 'Utility'],
        },
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
        Defensive: 1,
        Utility: 0,
      },
      attribute: [
        { type: ['Offensive'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
      ],
    },
    {
      name: 'Duban Fitted Hauler',
      brand: 'Richter & Kaiser GmbH',
      talents: [
        {
          Common: [],
          Active: ['Offensive', 'Utility'],
        },
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
      name: 'TacSack / TacSack Replica',
      brand: 'Petrov Defense Group',
      talents: [
        {
          Common: ['Offensive', 'Defensive', 'Utility'],
          Active: [],
        },
        {
          Common: [],
          Active: ['Defensive', 'Utility'],
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
        { type: ['Utility'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
      ],
    },
    {
      name: 'Support Weapons Bag / Salvaged Support Weapons Bag',
      brand: 'Petrov Defense Group',
      talents: [
        {
          Common: [],
          Active: ['Offensive', 'Defensive', 'Utility'],
        },
        {
          Common: ['Defensive', 'Utility'],
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
        { type: ['Utility'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
      ],
    },
    {
      name: 'Tactical 48h Backpack',
      brand: 'Providence Defense',
      talents: [
        {
          Common: ['Offensive', 'Defensive', 'Utility'],
          Active: [],
        },
        {
          Common: [],
          Active: ['Offensive', 'Defensive', 'Utility'],
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
        { type: ['Offensive', 'Defensive', 'Utility'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
      ],
    },
    {
      name: 'Police SW Backpack / Salvaged Police SW Backpack',
      brand: 'Providence Defense',
      talents: [
        {
          Common: [],
          Active: ['Offensive', 'Defensive', 'Utility'],
        },
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
        { type: ['Offensive', 'Defensive', 'Utility'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
      ],
    },
    {
      name: 'Long Range Pack "Sett" / Long Range Pack "Sett" Replica',
      brand: 'Badger Tuff',
      talents: [
        {
          Common: [],
          Active: [],
        },
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
        { type: ['Offensive', 'Defensive', 'Utility'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
      ],
    },
    {
      name: 'Winter Carryall "Bergmann" / Salvaged Winter Carryall "Bergman',
      brand: 'Badger Tuff',
      talents: [
        {
          Common: [],
          Active: [],
        },
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
        Defensive: 1,
        Utility: 0,
      },
      attribute: [
        { type: ['Defensive'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
      ],
    },
    {
      name: 'Roamer Pack "Sow"',
      brand: 'Badger Tuff',
      talents: [
        {
          Common: [],
          Active: [],
        },
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
        { type: ['Defensive'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
      ],
    },
    {
      name: 'Mountain Hiking Pack / Mountain Hiking Pack Replica',
      brand: 'Alps Summit Armament',
      talents: [
        {
          Common: ['Utility'],
          Active: [],
        },
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
        Offensive: 1,
        Defensive: 0,
        Utility: 0,
      },
      attribute: [
        { type: ['Offensive', 'Defensive', 'Utility'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
      ],
    },
    {
      name: 'Trekking Elite Pack / Salvaged Trekking Elite Pack',
      brand: 'Alps Summit Armament',
      talents: [
        {
          Common: [],
          Active: ['Utility'],
        },
        {
          Common: ['Defensive', 'Utility'],
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
        Utility: 1,
      },
      attribute: [
        { type: ['Offensive', 'Defensive', 'Utility'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
      ],
    },
    {
      name: 'Element Outdoors Rucksack',
      brand: 'Alps Summit Armament',
      talents: [
        {
          Common: ['Utility'],
          Active: ['Utility'],
        },
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
        Utility: 1,
      },
      attribute: [
        { type: ['Offensive', 'Defensive', 'Utility'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
      ],
    },
    {
      name: '"Trapezius" Go-bag',
      brand: 'Wyvern Wear',
      talents: [
        {
          Common: ['Offensive'],
          Active: [],
        },
        {
          Common: [],
          Active: ['Offensive', 'Defensive', 'Utility'],
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
        { type: ['Offensive', 'Defensive', 'Utility'] },
      ],
    },
    {
      name: '"Scapula" Bug-out Bag',
      brand: 'Wyvern Wear',
      talents: [
        {
          Common: [],
          Active: ['Offensive'],
        },
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
        Defensive: 1,
        Utility: 0,
      },
      attribute: [
        { type: ['Offensive', 'Utility'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
      ],
    },
    {
      name: '"Pygostyle" Sack',
      brand: 'Wyvern Wear',
      talents: [
        {
          Common: ['Offensive'],
          Active: ['Offensive'],
        },
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
        Utility: 1,
      },
      attribute: [
        { type: ['Offensive', 'Utility'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
      ],
    },
    {
      name: 'Apollo Operator Pack / Apollo Operator Pack Replica',
      brand: 'Airaldi Holdings',
      talents: [
        {
          Common: ['Utility'],
          Active: [],
        },
        {
          Common: [],
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
        { type: ['Offensive', 'Defensive', 'Utility'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
      ],
    },
    {
      name: 'Demeter Quick-Stash',
      brand: 'Airaldi Holdings',
      talents: [
        {
          Common: [],
          Active: ['Utility'],
        },
        {
          Common: ['Offensive', 'Utility'],
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
      name: '"Sashimono" Backpack / "Sashimono" Backpack Replica',
      brand: 'Murakami Industries',
      talents: [
        {
          Common: ['Offensive', 'Defensive'],
          Active: [],
        },
        {
          Common: [],
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
        { type: ['Defensive'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
      ],
    },
    {
      name: '"Horo" CarryBack',
      brand: 'Murakami Industries',
      talents: [
        {
          Common: [],
          Active: ['Offensive', 'Defensive'],
        },
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
        Defensive: 1,
        Utility: 0,
      },
      attribute: [
        { type: ['Defensive'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
      ],
    },
  ],
};

export default backpack;
