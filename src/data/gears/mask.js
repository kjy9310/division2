const masks = {
  talents: [
    {
      type1: 'Common',
      type2: 'Offensive',
      name: 'Hard Hitting',
    },
  ],
  equipments: [
    {
      name: 'Gila Guard',
      talents: [
        {
          Common: ['Offensive', 'Defensive'],
          active: ['Offensive', 'Defensive'],
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
      name: 'Richter & Kaiser GmbH',
      talents: [
        {
          Common: ['Offensive', 'Utility'],
          active: [],
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
  ],
};

export default masks;
