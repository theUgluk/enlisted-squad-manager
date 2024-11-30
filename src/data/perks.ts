/*
 * 0: Speed
 * 1: Vitality
 * 2: Weapon Handling
 */
import {IPerk} from "../app/models/perk.model";

export const perks: IPerk[] = [
  //Vitality
  {
    // Exclude tanker
    id: 0,
    type: 1,
    cost: 16,
    maxLevel: 1,
    text: "+35% vitality",
    include: false,
    class: [15]
  },
  {
    // Pilot only
    id: 1,
    type: 1,
    cost: 16,
    maxLevel: 1,
    text: "+30% value of endured maximum negative overloads, +15% value of endured maximum positive overloads",
    include: true,
    class: [5, 16]
  },
  {
    // Exclude tanker, pilot
    id: 2,
    type: 1,
    cost: 2,
    maxLevel: 4,
    text: "-80% aim stability with firearms after receiving damage",
    include: false,
    class: [15, 5, 16]
  },
];
