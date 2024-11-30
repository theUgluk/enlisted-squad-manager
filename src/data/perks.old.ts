/*  https://enlisted-bizhan.fandom.com/wiki/Soldier%27s_perks_and_points
 * 0: Speed
 * 1: Vitality
 * 2: Weapon Handling
 */
export const perks = [
  //Vitality
  {
    // Exclude tanker
    id: 1,
    type: 1,
    cost: 16,
    text: "+35% vitality",
    include: false,
    class: [15]
  },
  {
    // Pilot only
    id: 2,
    type: 1,
    cost: 16,
    text: "+30% value of endured maximum negative overloads, +15% value of endured maximum positive overloads",
    include: true,
    class: [5, 16]
  },
  {
    // Exclude tanker, pilot
    id: 3,
    type: 1,
    cost: 11,
    text: "-80% aim stability with firearms after receiving damage",
    include: false,
    class: [15, 5, 16]
  },
  {
    // Engineer only
    id: 4,
    type: 1,
    cost: 9,
    text: "+40% resources available for building",
    include: true,
    class: [4]
  },
  {
    // Pilot only
    id: 5,
    type: 1,
    cost: 9,
    text: "Flight stamina +20%",
    include: true,
    class: [5, 16]
  },
  {
    // All
    id: 6,
    type: 1,
    cost: 9,
    text: "+200% health restored by medpacks",
    include: false,
    class: []
  },
  {
    // Exclude pilot
    id: 7,
    type: 1,
    cost: 7,
    text: "+100% stamina",
    include: false,
    class: [5, 16]
  },
  {
    // Pilot only
    id: 8,
    type: 1,
    cost: 7,
    text: "-20% power of control loss after the blackout",
    include: true,
    class: [5, 16]
  },
  {
    // All
    id: 9,
    type: 1,
    cost: 5,
    text: "+100% health regeneration out of combat",
    include: false,
    class: []
  },
  {
    // Exclude pilot
    id: 10,
    type: 1,
    cost: 4,
    text: "-50% effect of head-shaking caused by nearby explosions",
    include: false,
    class: [5, 16]
  },
  {
    //    Exclude pilot, tanker
    id: 11,
    type: 1,
    cost: 3,
    text: "+100% breath holding time while aiming",
    include: false,
    class: [15, 5, 16]
  },
  {
    // Exclude pilot
    id: 12,
    type: 1,
    cost: 0,
    text: "+100% stamina regeneration speed",
    include: false,
    class: [5, 16]
  },
  {
    // Pilot only
    id: 13,
    type: 1,
    cost: 4,
    text: "+20% flight stamina regeneration speed",
    include: true,
    class: [5, 16]
  },

  // Weapon Handling
  {
    // Tanker only
    id: 14,
    type: 2,
    cost: 16,
    text: "Improved targeting skills of a tank gun (gunner perk)",
    include: true,
    class: [15]
  },
  {
    // Exclude Pilot, Tanker
    id: 15,
    type: 2,
    cost: 16,
    text: "-30% firearm horizontal recoil while standing",
    include: false,
    class: [15, 5, 16]
  },
  {
    // Pilot only
    id: 16,
    type: 2,
    cost: 15,
    text: "+50% enemy aircraft detection range",
    include: true,
    class: [5, 16]
  },
  {
    //Exclude Pilot, Tanker
    id: 17,
    type: 2,
    cost: 14,
    text: "-40% firearm vertical recoil while standing",
    include: false,
    class: [15, 5, 16]
  },
  {
    //Exclude Pilot, Tanker
    id: 18,
    type: 2,
    cost: 12,
    text: "+12% firing rate while using bolt action rifles",
    include: false,
    class: [15, 5, 16]
  },
  {
    //Exclude Pilot, Tanker
    id: 19,
    type: 2,
    cost: 12,
    text: "Greater chance to get in downed state on taking fatal damage, +50% downed state time before death",
    include: false,
    class: [15, 5, 16]
  },
  {
    // Tanker only
    id: 20,
    type: 2,
    cost: 10,
    text: "+20% maximum durability values of repaired parts",
    include: true,
    class: [15]
  },
  {
    // Pilot only
    id: 21,
    type: 2,
    cost: 8,
    text: "+30% angle of focused and peripheral vision",
    include: true,
    class: [5, 16]
  },
  {
    // Tanker only
    id: 22,
    type: 2,
    cost: 6,
    text: "+100% to the number of uses of the repair kit",
    include: true,
    class: [15]
  },
  {
    //Exclude pilot, tanker
    id: 23,
    type: 2,
    cost: 8,
    text: "+12% firearm reload speed",
    include: false,
    class: [15, 5, 16]
  },
  {
    // Exclude pilot, tanker
    id: 24,
    type: 2,
    cost: 6,
    text: "+50% throwing range of grenades",
    include: false,
    class: [15, 5, 16]
  },
  {
    // All
    id: 25,
    type: 2,
    cost: 4,
    text: "+100% melee weapon damage",
    include: false,
    class: []
  },
  {
    // All
    id: 26,
    type: 2,
    cost: 2,
    text: "+15% speed of decreasing of the shot spread after quick " +
      "turning of the firearm，-25% shot spread after quick turning of " +
      "the firearm",
    include: false,
    class: []
  },
  {
    // All
    id: 27,
    type: 2,
    cost: 0,
    text: "+50% firearms changing speed",
    include: false,
    class: []
  },
  // Speed
  {
    // Tanker only
    id: 28,
    type: 0,
    cost: 16,
    text: "Change the type of ammo type without losing reload progress (loader perk)",
    include: true,
    class: [15]
  },
  {
    // Exclude tanker
    id: 29,
    type: 0,
    cost: 16,
    text: "+15% sprint speed",
    include: false,
    class: [15]
  },
  {
    // Pilot only
    id: 30,
    type: 0,
    cost: 14,
    text: "-100% effect of head-swing during sharp maneuvers",
    include: true,
    class: [5, 16]
  },
  {
    // Engineer only
    id: 31,
    type: 0,
    cost: 14,
    text: "+50% building speed",
    include: true,
    class: [3]
  },
  {
    // Exclude tanker, pilot
    id: 32,
    type: 0,
    cost: 12,
    text: "+20% weapon aim speed",
    include: false,
    class: [15, 5, 16]
  },
  {
    // Tanker only
    id: 33,
    type: 0,
    cost: 9,
    text: "+20% speed of vehicle repair",
    include: true,
    class: [15]
  },
  {
    // Exclude tanker
    id: 34,
    type: 0,
    cost: 8,
    text: "+75% medpack usage speed",
    include: false,
    class: [15]
  },
  {
    // Tanker only
    id: 35,
    type: 0,
    cost: 8,
    text: "+90% speed of gear shift",
    include: true,
    class: [15],
  },
  {
    // All
    id: 36,
    type: 0,
    cost: 7,
    text: "+100% climbing speed",
    include: false,
    class: []
  },
  {
    // All
    id: 37,
    type: 0,
    cost: 6,
    text: "+10% run speed",
    include: false,
    class: []
  },
  {
    // Tank only
    id: 38,
    type: 0,
    cost: 5,
    text: "+20% speed of extinguishing the vehicle",
    include: true,
    class: [15]
  },
  {
    // Exclude tanker
    id: 39,
    type: 0,
    cost: 5,
    text: "+40% maximum jump height",
    include: false,
    class: [15]
  },
  {
    // Tanker only
    id: 40,
    type: 0,
    cost: 4,
    text: "+50% speed of using brake",
    include: true,
    class: [15]
  },
  {
    // Exclude pilot
    id: 41,
    type: 0,
    cost: 3,
    text: "+60% movement speed while crawling or crouching",
    include: false,
    class: [4, 16]
  },
  {
    // Tanker, pilot
    id: 42,
    type: 0,
    cost: 2,
    text: "+30% speed of changing seat in vehicle",
    include: true,
    class: [15, 5, 16]
  },
  {
    // All
    id: 43,
    type: 0,
    cost: 0,
    text: "+150% speed of changing pose",
    include: false,
    class: []
  }
];
