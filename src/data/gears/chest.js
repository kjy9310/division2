const chest = {
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
      name: 'Beserk',
      type1: 'Active',
      type2: 'Offensive',
    },
    {
      name: 'Bloodsucker',
      type1: 'Active',
      type2: 'Defensive',
    },
    {
      name: 'Unstoppable Force',
      type1: 'Active',
      type2: 'Defensive',
    },
    {
      name: 'Grenadier',
      type1: 'Active',
      type2: 'Defensive',
    },
    {
      name: 'Unbreakable',
      type1: 'Active',
      type2: 'Defensive',
    },
    {
      name: 'Mad Bomber',
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
    {
      name: 'Ranier Vest / Ranier Vest Replica',
      brand: 'Yaahl Gear',
      talents: [
        {
          Common: ['Defensive'],
          Active: ['Offensive', 'Defensive', 'Utility'],
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
        { type: ['Defensive', 'Utility'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
      ],
    },
    {
      name: 'Glacier Bay Vest / Salvaged Glacier Bay Vest',
      brand: 'Yaahl Gear',
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
        Offensive: 1,
        Defensive: 1,
        Utility: 0,
      },
      attribute: [
        { type: ['Defensive', 'Utility'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
      ],
    },
    {
      name: '"Pointblank" Protection Vest / "Pointblank" Protection Vest Replica',
      brand: 'Overlord Armaments',
      talents: [
        {
          Common: ['Offensive'],
          Active: ['Offensive'],
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
        { type: ['Offensive', 'Utility'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
      ],
    },
    {
      name: '"Big Drum" Body Armor / Salvaged "Big Drum" Body Armor',
      brand: 'Overlord Armaments',
      talents: [
        {
          Common: ['Offensive'],
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
        { type: ['Offensive', 'Utility'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
      ],
    },
    {
      name: '"Fortitude" Plate Carrier',
      brand: 'Overlord Armaments',
      talents: [
        {
          Common: ['Offensive', 'Defensive', 'Utility'],
          Active: ['Offensive'],
        },
      ],
      protocol: {
        Offensive: 0,
        Defensive: 1,
        Utility: 0,
      },
      system: {
        Offensive: 1,
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
      name: 'Body Armor System / Body Armor System Replica',
      brand: 'Providence Defense',
      talents: [
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
        Utility: 1,
      },
      attribute: [
        { type: ['Offensive', 'Defensive', 'Utility'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
      ],
    },
    {
      name: 'Counterforce Vest / Salvaged Counterforce Vest',
      brand: 'Providence Defense',
      talents: [
        {
          Common: ['Offensive', 'Defensive', 'Utility'],
          Active: ['Offensive', 'Defensive', 'Utility'],
        },
      ],
      protocol: {
        Offensive: 0,
        Defensive: 1,
        Utility: 0,
      },
      system: {
        Offensive: 1,
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
      name: 'Harnesk Armor / Harnesk Armor Replica',
      brand: 'Fenris Group AB',
      talents: [
        {
          Common: ['Offensive'],
          Active: ['Offensive'],
        },
        {
          Common: ['Offensive', 'Defensive'],
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
        { type: ['Offensive', 'Defensive', 'Utility'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
      ],
    },
    {
      name: 'Förstärkt Breastplate / Salvaged F├╢rst├ñrkt Brest Plate',
      brand: 'Fenris Group AB',
      talents: [
        {
          Common: [],
          Active: ['Offensive', 'Defensive'],
        },
        {
          Common: ['Offensive'],
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
        { type: ['Offensive', 'Defensive', 'Utility'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
      ],
    },
    {
      name: 'Stridväst Combat Vest',
      brand: 'Fenris Group AB',
      talents: [
        {
          Common: [],
          Active: ['Offensive'],
        },
        {
          Common: ['Offensive', 'Defensive'],
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
        { type: ['Offensive', 'Defensive', 'Utility'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
      ],
    },
    {
      name: 'Reinforced Utility Vest',
      brand: 'Alps Summit Armament',
      talents: [
        {
          Common: ['Defensive'],
          Active: ['Defensive', 'Utility'],
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
        { type: ['Offensive', 'Defensive', 'Utility'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
      ],
    },
    {
      name: 'X-TREYME Pro Ribcage',
      brand: 'Alps Summit Armament',
      talents: [
        {
          Common: ['Defensive', 'Utility'],
          Active: ['Defensive'],
        },
      ],
      protocol: {
        Offensive: 0,
        Defensive: 1,
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
      name: 'Lightweight Ballistic Vest / Lightweight Ballistic Vest Replica',
      brand: 'Sokolov Concern',
      talents: [
        {
          Common: ['Offensive', 'Defensive', 'Utility'],
          Active: ['Offensive', 'Defensive'],
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
        { type: ['Offensive', 'Defensive', 'Utility'] },
      ],
    },
    {
      name: 'Escorter Combat Harness',
      brand: 'Sokolov Concern',
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
        Defensive: 1,
        Utility: 0,
      },
      attribute: [
        { type: ['Offensive'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
      ],
    },
    {
      name: '"Tatami" Cuirass / Pelle\'s "Tatami" Cuirass',
      brand: 'Murakami Industries',
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
        Defensive: 0,
        Utility: 1,
      },
      attribute: [
        { type: ['Defensive'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
        { type: ['Offensive', 'Defensive', 'Utility'] },
      ],
    },
  ],
};

export default chest;
