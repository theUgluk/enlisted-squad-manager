/*
 * 0: Mobility
 * 1: Vitality
 * 2: Weapon Handling
 */
import {IPerk} from "../app/models/perk.model";

export const perks: IPerk[] = [
  // Mobility
  {
    id: 3,
    type: 0,
    cost: 1,
    maxLevel: 1,
    text: (amount: number) => `+${amount * 50}% Speed of changing pose`,
    step: 50,
    include: false,
    class: [],
  },
  {
    id: 4,
    type: 0,
    cost: 1,
    maxLevel: 1,
    text: (amount: number) => `+${amount * 100}% Speed of extinguishing fire on a soldier`,
    step: 100,
    include: false,
    class: [],
  },
  {
    id: 5,
    type: 0,
    cost: 1,
    maxLevel: 3,
    text: (amount: number) => `+${amount * 20}% Movement speed while crawling or crouching`,
    step: 20,
    include: false,
    class: [],
  },
  //Vitality
  {
    // Exclude tanker
    id: 0,
    type: 1,
    cost: 16,
    maxLevel: 1,
    text: (amount: number) => `+${amount * 35}% vitality`,
    step: 30,
    include: false,
    class: [15]
  },
  {
    // Pilot only
    id: 1,
    type: 1,
    cost: 16,
    maxLevel: 1,
    text: (amount: number) => `+${amount * 30}% value of endured maximum negative overloads, +${amount * 15}% value of endured maximum positive overloads`,
    step: 30,
    include: true,
    class: [5, 16]
  },
  {
    // Exclude tanker, pilot
    id: 2,
    type: 1,
    cost: 2,
    maxLevel: 4,
    text: (amount: number) => `+${amount * 20}% aim stability with firearms after receiving damage`,
    step: 20,
    include: false,
    class: [15, 5, 16]
  },
  // Weapon Handling
  {
    id: 6,
    type: 2,
    cost: 1,
    maxLevel: 1,
    text: (amount: number) => `+${amount * 50}% Weapon changing speed`,
    step: 50,
    include: false,
    class: [],
  },
  {
    id: 7,
    type: 2,
    cost: 1,
    maxLevel: 2,
    text: (amount: number) => `+${amount * 7.5}% Speed of decreasing of the shot spread after quick turning, -${amount * 12.5}% Shot spread after quick turning`,
    step: 12.5,
    include: false,
    class: [],
  },
  {
    id: 8,
    type: 2,
    cost: 1,
    maxLevel: 4,
    text: (amount: number) => `+${amount * 25}% Melee damage, +${amount * 5}% Melee attack speed`,
    step: 25,
    include: false,
    class: [],
  }
];
