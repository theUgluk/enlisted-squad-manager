import {soldierType} from "../app/models/class.model";
import {perkPointsPerSoldierType} from "../app/models/perk-points-per-soldiertype.model";

export const soldierTypes: soldierType[] = [
  {
    id: 1,
    name: "APC Driver",
    minLevel: 2,
    maxLevel: 2,
    perkPoints: new Map<number, perkPointsPerSoldierType>([
      [
        2,
        {
          vitality: 8,
          mobility: 4,
          handling: 6,
        }
      ]
    ]),
    icon: "apc.svg",
  },
  {
    id: 2,
    name: "Assaulter",
    minLevel: 1,
    maxLevel: 5,
    icon: "",
    perkPoints: new Map<number, perkPointsPerSoldierType>([
      [
        1,
        {
          vitality: 6,
          mobility: 4,
          handling: 5,
        }
      ],
      [
        2,
        {
          vitality: 7,
          mobility: 5,
          handling: 6,
        }
      ],
      [
        3,
        {
          vitality: 8,
          mobility: 6,
          handling: 7,
        }
      ],
      [
        4,
        {
          vitality: 9,
          mobility: 7,
          handling: 8,
        }
      ],
    ]),
  },
  {
    id: 3,
    name: "AT Gunner",
    minLevel: 1,
    maxLevel: 2,
    icon: "",
    perkPoints: new Map<number, perkPointsPerSoldierType>([
      [
        1,
        {
          vitality: 2,
          mobility: 6,
          handling: 7,
        }
      ],
      [
        2,
        {
          vitality: 2,
          mobility: 8,
          handling: 8,
        }
      ],
    ]),

  },
  {
    id: 4,
    name: "Engineer",
    minLevel: 1,
    maxLevel: 2,
    icon: "engineer.svg",
    perkPoints: new Map<number, perkPointsPerSoldierType>([
      [
        1,
        {
          vitality: 5,
          mobility: 6,
          handling: 4,
        }
      ],
      [
        2,
        {
          vitality: 6,
          mobility: 8,
          handling: 4,
        }
      ],
    ]),

  },
  {
    id: 5,
    name: "Fighter Pilot",
    minLevel: 1,
    maxLevel: 3,
    icon: "pilot_fighter.svg",
    perkPoints: new Map<number, perkPointsPerSoldierType>([
      [
        1,
        {
          vitality: 4,
          mobility: 6,
          handling: 5,
        }
      ],
      [
        2,
        {
          vitality: 5,
          mobility: 7,
          handling: 6,
        }
      ],
      [
        3,
        {
          vitality: 5,
          mobility: 9,
          handling: 7,
        }
      ],
    ]),

  },
  {
    id: 6,
    name: "Flametrooper",
    minLevel: 1,
    maxLevel: 2,
    icon: "flametrooper.svg",
    perkPoints: new Map<number, perkPointsPerSoldierType>([
      [
        1,
        {
          vitality: 6,
          mobility: 9,
          handling: 3,
        }
      ],
      [
        2,
        {
          vitality: 6,
          mobility: 11,
          handling: 4,
        }
      ],
    ]),
  },
  {
    id: 7,
    name: "Guerilla",
    minLevel: 2,
    maxLevel: 2,
    icon: "guerilla.svg",
    perkPoints: new Map<number, perkPointsPerSoldierType>([
      [
        2,
        {
          vitality: 9,
          mobility: 4,
          handling: 7,
        }
      ]
    ]),
  },
  {
    id: 8,
    name: "Machine Gunner",
    minLevel: 1,
    maxLevel: 3,
    icon: "machine_gun.svg",
    perkPoints: new Map<number, perkPointsPerSoldierType>([
      [
        1,
        {
          vitality: 4,
          mobility: 4,
          handling: 7,
        }
      ],
      [
        2,
        {
          vitality: 4,
          mobility: 4,
          handling: 10,
        }
      ],
      [
        3,
        {
          vitality: 5,
          mobility: 6,
          handling: 10,
        }
      ],
    ]),
  },
  {
    id: 9,
    name: "Medic",
    minLevel: 1,
    maxLevel: 1,
    icon: "medic.svg",
    perkPoints: new Map<number, perkPointsPerSoldierType>([
      [
        1,
        {
          vitality: 5,
          mobility: 6,
          handling: 4,
        }
      ]
    ]),
  },
  {
    id: 10,
    name: "Mortarman",
    minLevel: 1,
    maxLevel: 1,
    icon: "mortarman.svg",
    perkPoints: new Map<number, perkPointsPerSoldierType>([
      [
        1,
        {
          vitality: 3,
          mobility: 6,
          handling: 6,
        }
      ]
    ]),
  },
  {
    id: 11,
    name: "Radio Operator",
    minLevel: 1,
    maxLevel: 2,
    icon: "radioman.svg",
    perkPoints: new Map<number, perkPointsPerSoldierType>([
      [
        1,
        {
          vitality: 9,
          mobility: 4,
          handling: 2,
        }
      ],
      [
        2,
        {
          vitality: 10,
          mobility: 6,
          handling: 2,
        }
      ],
    ]),
  },
  {
    id: 12,
    name: "Rider",
    minLevel: 1,
    maxLevel: 1,
    icon: "",
    perkPoints: new Map<number, perkPointsPerSoldierType>([
      [
        1,
        {
          vitality: 6,
          mobility: 4,
          handling: 8,
        }
      ]
    ]),
  },
  {
    id: 13,
    name: "Rifleman",
    minLevel: 1,
    maxLevel: 3,
    icon: "",
    perkPoints: new Map<number, perkPointsPerSoldierType>([
      [
        1,
        {
          vitality: 5,
          mobility: 5,
          handling: 5,
        }
      ],
      [
        2,
        {
          vitality: 6,
          mobility: 6,
          handling: 6,
        }
      ],
      [
        3,
        {
          vitality: 7,
          mobility: 7,
          handling: 7,
        }
      ],
    ]),
  },
  {
    id: 14,
    name: "Sniper",
    minLevel: 1,
    maxLevel: 3,
    icon: "",
    perkPoints: new Map<number, perkPointsPerSoldierType>([
      [
        1,
        {
          vitality: 6,
          mobility: 2,
          handling: 7,
        }
      ],
      [
        2,
        {
          vitality: 6,
          mobility: 2,
          handling: 8,
        }
      ],
      [
        3,
        {
          vitality: 6,
          mobility: 2,
          handling: 10,
        }
      ],
    ]),
  },
  {
    id: 15,
    name: "Tanker",
    minLevel: 1,
    maxLevel: 3,
    icon: "driver_tank.svg",
    perkPoints: new Map<number, perkPointsPerSoldierType>([
      [
        1,
        {
          vitality: 7,
          mobility: 2,
          handling: 6,
        }
      ],
      [
        2,
        {
          vitality: 9,
          mobility: 2,
          handling: 7,
        }
      ],
      [
        3,
        {
          vitality: 11,
          mobility: 2,
          handling: 8,
        }
      ],
    ]),

  },
  {
    id: 16,
    name: "Attacker Pilot",
    minLevel: 1,
    maxLevel: 3,
    icon: "pilot_assaulter.svg",
    perkPoints: new Map<number, perkPointsPerSoldierType>([
      [
        1,
        {
          vitality: 4,
          mobility: 5,
          handling: 6,
        }
      ],
      [
        2,
        {
          vitality: 5,
          mobility: 6,
          handling: 7,
        }
      ],
      [
        3,
        {
          vitality: 5,
          mobility: 7,
          handling: 9,
        }
      ],
    ]),
  }
]
