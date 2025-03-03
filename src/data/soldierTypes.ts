/*eslint unused-imports/no-unused-vars: 0*/
/*eslint @typescript-eslint/no-unused-vars: 0*/
import {soldierType} from "../app/models/class.model";
import { IPerk } from "../app/models/perk.model";
import {PerkPointsPerSoldierType} from "../app/models/perk-points-per-soldiertype.model";

export const soldierTypes: soldierType[] = [
  {
    id: 1,
    name: "APC Driver",
    minLevel: 2,
    maxLevel: 2,
    perkPoints: new Map<number, PerkPointsPerSoldierType>([
      [
        2,
        {
          mobility: 8,
          vitality: 4,
          handling: 6,
          defaultPerk: {
            id: 0,
            type: 0,
            cost: 0,
            maxLevel: 1,
            text: (amount: number ) => "+35% Speed of gear shift (Driver Perk)",
            step: 35,
            include: true,
            class: [],
            icon: "perk_speed.svg",
            level: 1,
            default: true,
            order: 0,
          } as IPerk
        }
      ]
    ]),
    icon: "apc.svg",
  }, {
    id: 2,
    name: "Assaulter",
    minLevel: 1,
    maxLevel: 4,
    icon: "assaulter.svg",
    perkPoints: new Map<number, PerkPointsPerSoldierType>([
      [
        1,
        {
          mobility: 6,
          vitality: 4,
          handling: 5,
          defaultPerk: {
            id: 0,
            type: 0,
            cost: 0,
            maxLevel: 1,
            text: (amount: number ) => "+35% Climbing speed",
            step: 35,
            include: true,
            class: [],
            icon: "perk_speed.svg",
            level: 1,
            default: true,
            order: 0,
          } as IPerk
        },
      ],
      [
        2,
        {
          mobility: 7,
          vitality: 5,
          handling: 6,
          defaultPerk: {
            id: 0,
            type: 0,
            cost: 0,
            maxLevel: 1,
            text: (amount: number ) => "+35% Stamina",
            step: 35,
            include: true,
            class: [],
            icon: "perk_vitality.svg",
            level: 1,
            default: true,
            order: 0,
          } as IPerk
        }
      ],
      [
        3,
        {
          mobility: 8,
          vitality: 6,
          handling: 7,
          defaultPerk: {
            id: 0,
            type: 1,
            cost: 0,
            maxLevel: 1,
            text: (amount: number ) => "+100% health restored by medpack ",
            step: 100,
            include: true,
            class: [],
            icon: "perk_vitality.svg",
            level: 1,
            default: true,
            order: 0,
          } as IPerk
        }
      ],
      [
        4,
        {
          mobility: 9,
          vitality: 7,
          handling: 8,
          defaultPerk: {
            id: 0,
            type: 2,
            cost: 0,
            maxLevel: 1,
            text: (amount: number ) => "+12% Firearm reload speed",
            step: 35,
            include: true,
            class: [],
            icon: "perk_battleskill.svg",
            level: 1,
            default: true,
            order: 0,
          } as IPerk
        }
      ],
    ]),
  },
  {
    id: 3,
    name: "AT Gunner",
    minLevel: 1,
    maxLevel: 2,
    icon: "launcher.svg",
    perkPoints: new Map<number, PerkPointsPerSoldierType>([
      [
        1,
        {
          mobility: 2,
          vitality: 6,
          handling: 7,
          defaultPerk: {
            id: 0,
            type: 0,
            cost: 0,
            maxLevel: 1,
            text: (amount: number ) => "+17.5% Speed of changing pose",
            step: 17.5,
            include: true,
            class: [],
            icon: "perk_speed.svg",
            level: 1,
            default: true,
            order: 0,
          } as IPerk
        }
      ],
      [
        2,
        {
          mobility: 2,
          vitality: 8,
          handling: 8,
          defaultPerk: {
            id: 0,
            type: 2,
            cost: 0,
            maxLevel: 1,
            text: (amount: number ) => "+17.5% Throwing ranges of grenades",
            step: 17.5,
            include: true,
            class: [],
            icon: "perk_battleskill.svg",
            level: 1,
            default: true,
            order: 0,
          } as IPerk
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
    perkPoints: new Map<number, PerkPointsPerSoldierType>([
      [
        1,
        {
          mobility: 5,
          vitality: 6,
          handling: 4,
          defaultPerk: {
            id: 0,
            type: 0,
            cost: 0,
            maxLevel: 1,
            text: (amount: number ) => "+21% Movement speed while crawling or crouching",
            step: 21,
            include: true,
            class: [],
            icon: "perk_speed.svg",
            level: 1,
            default: true,
            order: 0,
          } as IPerk
        }
      ],
      [
        2,
        {
          vitality: 8,
          mobility: 6,
          handling: 4,
          defaultPerk: {
            id: 0,
            type: 1,
            cost: 0,
            maxLevel: 1,
            text: (amount: number ) => "+35% Stamina regeneration speed",
            step: 35,
            include: true,
            class: [],
            icon: "perk_vitality.svg",
            level: 1,
            default: true,
            order: 0,
          } as IPerk
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
    perkPoints: new Map<number, PerkPointsPerSoldierType>([
      [
        1,
        {
          mobility: 4,
          vitality: 6,
          handling: 5,
          defaultPerk: {
            id: 0,
            type: 1,
            cost: 0,
            maxLevel: 1,
            text: (amount: number ) => "+5% flight stamina regeneration speed",
            step: 5,
            include: true,
            class: [],
            icon: "perk_vitality.svg",
            level: 1,
            default: true,
            order: 0,
          } as IPerk
        }
      ],
      [
        2,
        {
          mobility: 5,
          vitality: 7,
          handling: 6,
          defaultPerk: {
            id: 0,
            type: 1,
            cost: 0,
            maxLevel: 1,
            text: (amount: number ) => "+5.3% Flight stamina",
            step: 5.3,
            include: true,
            class: [],
            icon: "perk_vitality.svg",
            level: 1,
            default: true,
            order: 0,
          } as IPerk
        }
      ],
      [
        3,
        {
          mobility: 5,
          vitality: 9,
          handling: 7,
          defaultPerk: {
            id: 0,
            type: 1,
            cost: 0,
            maxLevel: 1,
            text: (amount: number ) => "-10% Power of control loss after the blackout",
            step: 10,
            include: true,
            class: [],
            icon: "perk_vitality.svg",
            level: 1,
            default: true,
            order: 0,
          } as IPerk
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
    perkPoints: new Map<number, PerkPointsPerSoldierType>([
      [
        1,
        {
          mobility: 6,
          vitality: 9,
          handling: 3,
          defaultPerk: {
            id: 0,
            type: 1,
            cost: 0,
            maxLevel: 1,
            text: (amount: number ) => "+28% Aim stability with firearms after receiving damage",
            step: 28,
            include: true,
            class: [],
            icon: "perk_vitality.svg",
            level: 1,
            default: true,
            order: 0,
          } as IPerk
        }
      ],
      [
        2,
        {
          mobility: 6,
          vitality: 11,
          handling: 4,
          defaultPerk: {
            id: 0,
            type: 0,
            cost: 0,
            maxLevel: 1,
            text: (amount: number ) => "+12.3% vitality",
            step: 12.3,
            include: true,
            class: [],
            icon: "perk_vitality.svg",
            level: 1,
            default: true,
            order: 0,
          } as IPerk
        }
      ],
    ]),
  },
  {
    id: 7,
    name: "Guerilla",
    minLevel: 2,
    maxLevel: 2,
    icon: "partisan.svg",
    perkPoints: new Map<number, PerkPointsPerSoldierType>([
      [
        2,
        {
          mobility: 9,
          vitality: 4,
          handling: 7,
          defaultPerk: {
            id: 0,
            type: 1,
            cost: 0,
            maxLevel: 1,
            text: (amount: number ) => "+5.3% Sprint speed",
            step: 5.3,
            include: true,
            class: [],
            icon: "perk_speed.svg",
            level: 1,
            default: true,
            order: 0,
          } as IPerk
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
    perkPoints: new Map<number, PerkPointsPerSoldierType>([
      [
        1,
        {
          mobility: 4,
          vitality: 4,
          handling: 7,
          defaultPerk: {
            id: 0,
            type: 0,
            cost: 0,
            maxLevel: 1,
            text: (amount: number ) => "+3.5% Run speed",
            step: 3.5,
            include: true,
            class: [],
            icon: "perk_speed.svg",
            level: 1,
            default: true,
            order: 0,
          } as IPerk
        }
      ],
      [
        2,
        {
          mobility: 4,
          vitality: 4,
          handling: 10,
          defaultPerk: {
            id: 0,
            type: 0,
            cost: 0,
            maxLevel: 1,
            text: (amount: number ) => "+7% Weapon aim speed",
            step: 7,
            include: true,
            class: [],
            icon: "perk_speed.svg",
            level: 1,
            default: true,
            order: 0,
          } as IPerk
        }
      ],
      [
        3,
        {
          mobility: 5,
          vitality: 6,
          handling: 10,
          defaultPerk: {
            id: 0,
            type: 1,
            cost: 0,
            maxLevel: 1,
            text: (amount: number ) => "+100% Health restored by medpack",
            step: 35,
            include: true,
            class: [],
            icon: "perk_vitality.svg",
            level: 1,
            default: true,
            order: 0,
          } as IPerk
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
    perkPoints: new Map<number, PerkPointsPerSoldierType>([
      [
        1,
        {
          mobility: 5,
          vitality: 6,
          handling: 4,
          defaultPerk: {
            id: 0,
            type: 0,
            cost: 0,
            maxLevel: 1,
            text: (amount: number ) => "+3.5% Run speed",
            step: 3.5,
            include: true,
            class: [],
            icon: "perk_speed.svg",
            level: 1,
            default: true,
            order: 0,
          } as IPerk
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
    perkPoints: new Map<number, PerkPointsPerSoldierType>([
      [
        1,
        {
          mobility: 3,
          vitality: 6,
          handling: 6,
          defaultPerk: {
            id: 0,
            type: 1,
            cost: 0,
            maxLevel: 1,
            text: (amount: number) => `-17.5% Effect of head-shaking caused by
            nearby explosions, -8.8% duration of concussion`,
            step: 8.75,
            include: true,
            class: [],
            icon: "perk_vitality.svg",
            level: 1,
            default: true,
            order: 0,
          } as IPerk
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
    perkPoints: new Map<number, PerkPointsPerSoldierType>([
      [
        1,
        {
          mobility: 9,
          vitality: 4,
          handling: 2,
          defaultPerk: {
            id: 0,
            type: 2,
            cost: 0,
            maxLevel: 1,
            text: (amount: number ) => "+17.5% Weapon changing speed",
            step: 17.5,
            include: true,
            class: [],
            icon: "perk_battleskill.svg",
            level: 1,
            default: true,
            order: 0,
          } as IPerk
        }
      ],
      [
        2,
        {
          mobility: 10,
          vitality: 6,
          handling: 2,
          defaultPerk: {
            id: 0,
            type: 1,
            cost: 0,
            maxLevel: 1,
            text: (amount: number ) => "+70% Health restored by medpack ",
            step: 70,
            include: true,
            class: [],
            icon: "perk_vitality.svg",
            level: 1,
            default: true,
            order: 0,
          } as IPerk
        }
      ],
    ]),
  },
  {
    id: 12,
    name: "Rider",
    minLevel: 1,
    maxLevel: 1,
    icon: "biker.svg",
    perkPoints: new Map<number, PerkPointsPerSoldierType>([
      [
        1,
        {
          mobility: 6,
          vitality: 4,
          handling: 8,
          defaultPerk: {
            id: 0,
            type: 0,
            cost: 0,
            maxLevel: 1,
            text: (amount: number ) => "+10.5% Speed of vehicle repair",
            step: 10.5,
            include: true,
            class: [],
            icon: "perk_speed.svg",
            level: 1,
            default: true,
            order: 0,
          } as IPerk
        }
      ]
    ]),
  },
  {
    id: 13,
    name: "Rifleman",
    minLevel: 1,
    maxLevel: 3,
    icon: "rifle.svg",
    perkPoints: new Map<number, PerkPointsPerSoldierType>([
      [
        1,
        {
          mobility: 5,
          vitality: 5,
          handling: 5,
          defaultPerk: {
            id: 0,
            type: 2,
            cost: 0,
            maxLevel: 1,
            text: (amount: number ) => "+10.5% Speed of decreasing of the shot spread after quick turning",
            step: 10.5,
            include: true,
            class: [],
            icon: "perk_battleskill.svg",
            level: 1,
            default: true,
            order: 0,
          } as IPerk
        }
      ],
      [
        2,
        {
          mobility: 6,
          vitality: 6,
          handling: 6,
          defaultPerk: {
            id: 0,
            type: 0,
            cost: 0,
            maxLevel: 1,
            text: (amount: number ) => "+5.3% Sprint speed",
            step: 5.3,
            include: true,
            class: [],
            icon: "perk_speed.svg",
            level: 1,
            default: true,
            order: 0,
          } as IPerk
        }
      ],
      [
        3,
        {
          mobility: 7,
          vitality: 7,
          handling: 7,
          defaultPerk: {
            id: 0,
            type: 0,
            cost: 0,
            maxLevel: 1,
            text: (amount: number ) => "+15% Medpack usage speed",
            step: 15,
            include: true,
            class: [],
            icon: "perk_speed.svg",
            level: 1,
            default: true,
            order: 0,
          } as IPerk
        }
      ],
    ]),
  },
  {
    id: 14,
    name: "Sniper",
    minLevel: 1,
    maxLevel: 3,
    icon: "sniper.svg",
    perkPoints: new Map<number, PerkPointsPerSoldierType>([
      [
        1,
        {
          mobility: 6,
          vitality: 2,
          handling: 7,
          defaultPerk: {
            id: 0,
            type: 0,
            cost: 0,
            maxLevel: 1,
            text: (amount: number ) => "+14% Maximum jump height",
            step: 14,
            include: true,
            class: [],
            icon: "perk_speed.svg",
            level: 1,
            default: true,
            order: 0,
          } as IPerk
        }
      ],
      [
        2,
        {
          mobility: 6,
          vitality: 2,
          handling: 8,
          defaultPerk: {
            id: 0,
            type: 1,
            cost: 0,
            maxLevel: 1,
            text: (amount: number ) => "+35% Breath holding time while aiming",
            step: 35,
            include: true,
            class: [],
            icon: "perk_vitality.svg",
            level: 1,
            default: true,
            order: 0,
          } as IPerk
        }
      ],
      [
        3,
        {
          mobility: 6,
          vitality: 2,
          handling: 10,
          defaultPerk: {
            id: 0,
            type: 2,
            cost: 0,
            maxLevel: 1,
            text: (amount: number ) => "+4.8% Firearm reload speed",
            step: 4.8,
            include: true,
            class: [],
            icon: "perk_battleskill.svg",
            level: 1,
            default: true,
            order: 0,
          } as IPerk
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
    perkPoints: new Map<number, PerkPointsPerSoldierType>([
      [
        1,
        {
          mobility: 7,
          vitality: 2,
          handling: 6,
          defaultPerk: {
            id: 0,
            type: 0,
            cost: 0,
            maxLevel: 1,
            text: (amount: number ) => "+10% Speed of boarding, leaving, and switching seats in the vehicle",
            step: 10,
            include: true,
            class: [],
            icon: "perk_speed.svg",
            level: 1,
            default: true,
            order: 0,
          } as IPerk
        }
      ],
      [
        2,
        {
          mobility: 9,
          vitality: 2,
          handling: 7,
          defaultPerk: {
            id: 0,
            type: 0,
            cost: 0,
            maxLevel: 1,
            text: (amount: number ) => "+7.5% Speed of vehicle repair",
            step: 7.5,
            include: true,
            class: [],
            icon: "perk_speed.svg",
            level: 1,
            default: true,
            order: 0,
          } as IPerk
        }
      ],
      [
        3,
        {
          mobility: 11,
          vitality: 2,
          handling: 8,
          defaultPerk: {
            id: 0,
            type: 0,
            cost: 0,
            maxLevel: 1,
            text: (amount: number ) => "+45% Speed of gear shift (Driver Perk)",
            step: 45,
            include: true,
            class: [],
            icon: "perk_speed.svg",
            level: 1,
            default: true,
            order: 0,
          } as IPerk
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
    perkPoints: new Map<number, PerkPointsPerSoldierType>([
      [
        1,
        {
          mobility: 4,
          vitality: 5,
          handling: 6,
          defaultPerk: {
            id: 0,
            type: 1,
            cost: 0,
            maxLevel: 1,
            text: (amount: number ) => "-5% Power of control loss after the blackout",
            step: 5,
            include: true,
            class: [],
            icon: "perk_vitality.svg",
            level: 1,
            default: true,
            order: 0,
          } as IPerk
        }
      ],
      [
        2,
        {
          mobility: 5,
          vitality: 6,
          handling: 7,
          defaultPerk: {
            id: 0,
            type: 2,
            cost: 0,
            maxLevel: 1,
            text: (amount: number ) => "+10% Angle of focused and peripheral vision",
            step: 10,
            include: true,
            class: [],
            icon: "perk_battleskill.svg",
            level: 1,
            default: true,
            order: 0,
          } as IPerk
        }
      ],
      [
        3,
        {
          mobility: 5,
          vitality: 7,
          handling: 9,
          defaultPerk: {
            id: 0,
            type: 1,
            cost: 0,
            maxLevel: 1,
            text: (amount: number ) => "+21% Flight stamina",
            step: 21,
            include: true,
            class: [],
            icon: "perk_vitality.svg",
            level: 1,
            default: true,
            order: 0,
          } as IPerk
        }
      ],
    ]),
  }
]
