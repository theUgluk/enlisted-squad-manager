/*eslint unused-imports/no-unused-vars: 0*/
/*
 * 0: Mobility (150/255/150)
 * 1: Vitality (255/150/150)
 * 2: Weapon Handling (255/255/150)
 *
  {
    id: 0,
    type: 0,
    cost: 1,
    maxLevel: 1,
    text: (amount: number) => ``,
    step: 20,
    include: true,
    class: [9],
    icon: "",
    level: 1,
  },
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
    order: 390,
    step: 50,
    include: false,
    class: [],
    icon: "faster_change_pose_speed_icon.svg",
    level: 1,
  },
  {
    id: 4,
    type: 0,
    cost: 1,
    maxLevel: 1,
    text: (amount: number) => `+${amount * 100}% Speed of extinguishing fire on a soldier`,
    order: 50,
    step: 100,
    include: false,
    class: [],
    icon: "faster_self_fire_putout_icon.svg",
    level: 1,
  },
  {
    id: 5,
    type: 0,
    cost: 1,
    maxLevel: 3,
    text: (amount: number) => `+${amount * 20}% Movement speed while crawling or crouching`,
    order: 40,
    step: 20,
    include: false,
    class: [1, 5, 12, 15, 16],
    icon: "crawl_crouch_speed_icon.svg",
    level: 1,
  },
  {
    // Medic only
    id: 9,
    type: 0,
    cost: 2,
    maxLevel: 2,
    text: (amount: number) => `+${amount * 25}% Healing speed of allies`,
    order: 70,
    step: 25,
    include: true,
    class: [9],
    icon: "heal_speed_target_icon.svg",
    level: 1,
  },
  {
    id: 10,
    type: 0,
    cost: 2,
    maxLevel: 2,
    text: (amount: number) => `+${amount * 20}% Maximum jump height`,
    order: 30,
    step: 20,
    include: false,
    class: [15],
    icon: "jump_height_icon.svg",
    level: 1,
  },
  {
    id: 11,
    type: 0,
    cost: 3,
    maxLevel: 2,
    text: (amount: number) => `+${amount * 5}% Run speed`,
    order: 140,
    step: 5,
    include: false,
    class: [15],
    icon: "run_speed_icon.svg",
    level: 2,
  },
  {
    // @todo para's
    id: 12,
    type: 0,
    cost: 2,
    maxLevel: 3,
    text: (amount: number) => `-${amount * 20}% Damage when hard landing with a parachute` ,
    order: 80,
    step: 20,
    include: true,
    class: [5, 16],
    icon: "less_fall_dmg_icon.svg",
    level: 1,
  },
  {
    id: 13,
    type: 0,
    cost: 2,
    maxLevel: 4,
    text: (amount: number) => `+${amount * 25}% Climbing speed`,
    order: 110,
    step: 25,
    include: false,
    class: [],
    icon: "climb_speed_icon.svg",
    level: 2,
  },
  {
    id: 14,
    type: 0,
    cost: 3,
    maxLevel: 3,
    text: (amount: number) => `+${amount * 25}% Medpack usage speed`,
    order: 100,
    step: 25,
    include: false,
    class: [],
    icon: "heal_speed_icon.svg",
    level: 2,
  },
  {
    id: 15,
    type: 0,
    cost: 5,
    maxLevel: 2,
    text: (amount: number) => `+${amount * 10}% Weapon aim speed`,
    order: 130,
    step: 10,
    include: false,
    class: [5, 15, 16],
    icon: "faster_aim_speed_icon.svg",
    level: 2,
  },
  {
    id: 16,
    type: 0,
    cost: 3,
    maxLevel: 4,
    text: (amount: number) => `+${amount * 12.5}% Building speed`,
    order: 200,
    step: 12.5,
    include: true,
    class: [4],
    icon: "faster_building_speed_icon.svg",
    level: 3,
  },
  {
    // apc, tankers, pilots, rider
    id: 34,
    type: 0,
    cost: 1,
    maxLevel: 2,
    text: (amount: number) => `+${15 * amount}% Speed of boarding, leaving and switching seats in vehicle`,
    order: 10,
    step: 15,
    include: true,
    class: [1, 5, 12, 15, 16],
    icon: "seat_change_speed_icon.svg",
    level: 1,
  },
  {
    // apc, tankers, rider
    id: 35,
    type: 0,
    cost: 1,
    maxLevel: 3,
    text: (amount: number) => `-${Math.ceil(33.33 * amount)}% Speed loss after gear shift (Driver Perk)`,
    order: 20,
    step: 33.33,
    include: true,
    class: [1, 12, 15],
    icon: "driving_speed_stability_icon.svg",
    level: 1,
  },
  {
    // apc, tankers, rider
    id: 40,
    type: 0,
    cost: 2,
    maxLevel: 2,
    text: (amount: number) => `-${25 * amount}% Speed of using brake (Driver Perk)`,
    order: 90,
    step: 25,
    include: true,
    class: [1, 12, 15],
    icon: "driving_breaking_icon.svg",
    level: 1,
  },
  {
    // tankers, rider
    id: 36,
    type: 0,
    cost: 1,
    maxLevel: 5,
    text: (amount: number) => `+${6 * amount}% Speed of extinguishing the vehicle`,
    order: 120,
    step: 6,
    include: true,
    class: [12, 15],
    icon: "extinguish_time_icon.svg",
    level: 2,
  },
  {
    // apc, tankers, rider
    id: 37,
    type: 0,
    cost: 4,
    maxLevel: 2,
    text: (amount: number) => `+${45 * amount}% Speed of gear shift (Driver Perk)`,
    order: 160,
    step: 45,
    include: true,
    class: [1, 12, 15],
    icon: "driving_quality_icon.svg",
    level: 2,
  },
  {
    // apc, tankers, rider
    id: 38,
    type: 0,
    cost: 3,
    maxLevel: 3,
    text: (amount: number) => `+${10 * amount}% Speed of vehicle repair`,
    order: 170,
    step: 10,
    include: true,
    class: [1, 12, 15],
    icon: "repair_speed_icon.svg",
    level: 2,
  },
  {
    // tankers
    id: 39,
    type: 0,
    cost: 16,
    maxLevel: 1,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    text: (amount: number) => "Change the type of ammo without losing reload progress (Loader Perk)",
    order: 210,
    step: 0,
    include: true,
    class: [15],
    icon: "reload_reaction_icon.svg",
    level: 3,
  },
  {
    // pilots
    id: 45,
    type: 0,
    cost: 14,
    maxLevel: 1,
    text: (amount: number) => `-${100 * amount}% Effect of head-swinging during sharp maneuvers`,
    order: 220,
    step: 100,
    include: true,
    class: [5, 16],
    icon: "pilot_head_stabilisation_icon.svg",
    level: 3,
  },
  //Vitality
  {
    // Exclude tanker
    id: 53,
    type: 1,
    cost: 16,
    maxLevel: 1,
    text: (amount: number) => `+${amount * 35}% vitality`,
    order: 360,
    step: 30,
    include: false,
    class: [],
    icon: "hp_boost_icon.svg",
    level: 3,
  },
  {
    // Pilot only
    id: 1,
    type: 1,
    cost: 16,
    maxLevel: 1,
    text: (amount: number) => `+${amount * 30}% value of endured maximum negative overloads,
     +${amount * 15}% value of endured maximum positive overloads`,
    order: 370,
    step: 30,
    include: true,
    class: [5, 16],
    icon: "pilot_g_tolerance_icon.svg",
    level: 3,
  },
  {
    // Exclude tanker, pilot
    id: 2,
    type: 1,
    cost: 2,
    maxLevel: 4,
    text: (amount: number) => `+${amount * 20}% aim stability with firearms after receiving damage`,
    order: 300,
    step: 20,
    include: false,
    class: [5, 15, 16],
    icon: "more_stability_when_hit_icon.svg",
    level: 2,
  },
  {
    id: 17,
    type: 1,
    cost: 1,
    maxLevel: 3,
    text: (amount: number) => `+${Math.ceil(33.33 * amount)}% Breath holding time while aiming`,
    order: 250,
    step: 33.33,
    include: false,
    class: [],
    icon: "longer_hold_breath_cd_icon.svg",
    level: 1,
  },
  {
    id: 18,
    type: 1,
    cost: 2,
    maxLevel: 2,
    text: (amount: number) => `${25 * amount}% Effect of head-shaking caused by
     nearby explosions, -${12.5 * amount}% duration of concussion`,
    order: 240,
    step: 12.5,
    include: false,
    class: [],
    icon: "less_camera_shake_on_explosions_icon.svg",
    level: 1,
  },
  {
    id: 19,
    type: 1,
    cost: 1,
    maxLevel: 5,
    text: (amount: number) => `+${20 * amount}% Health regeneration out of combat,
     +${10 * amount}% Health regeneration speed out of combat`,
    order: 230,
    step: 10,
    include: false,
    class: [],
    icon: "hp_regeneration_icon.svg",
    level: 1,
  },
  {
    // medic only
    id: 20,
    type: 1,
    cost: 1,
    maxLevel: 5,
    text: (amount: number) => `+${20 * amount}% Uses of medical bag`,
    order: 280,
    step: 20,
    include: true,
    class: [9],
    icon: "medic_more_medpacks_icon.svg",
    level: 1,
  },
  {
    id: 21,
    type: 1,
    cost: 2,
    maxLevel: 3,
    text: (amount: number) => `+${Math.ceil(33.33 * amount)}% Stamina`,
    order: 330,
    step: 33.33,
    include: false,
    class: [],
    icon: "stamina_boost_icon.svg",
    level: 2,
  },
  {
    id: 22,
    type: 1,
    cost: 4,
    maxLevel: 2,
    text: (amount: number) => `+${100 * amount}% Health restored by medpack`,
    order: 310,
    step: 100,
    include: false,
    class: [],
    icon: "heal_effectivity_icon.svg",
    level: 2,
  },
  {
    id: 23,
    type: 1,
    cost: 2,
    maxLevel: 4,
    text: (amount: number) => `+${10 * amount}% Resources available for buildings`,
    order: 350,
    step: 10,
    include: true,
    class: [4],
    icon: "more_building_materials_icon.svg",
    level: 2,
  },
  {
    id: 24,
    type: 1,
    cost: 3,
    maxLevel: 3,
    text: (amount: number) => `+${Math.ceil(66.66 * amount)}% Health restored when healing allies`,
    order: 340,
    step: 66.66,
    include: true,
    class: [9],
    icon: "heal_effectivity_target_icon.svg",
    level: 2,
  },
  // pilot
  {
    id: 46,
    type: 1,
    cost: 1,
    maxLevel: 1,
    text: (amount: number) => `+${20 * amount}% Flight stamina regeneration speed`,
    order: 270,
    step: 20,
    include: true,
    class: [5, 16],
    icon: "pilot_stamina_regeneration_icon.svg",
    level: 1,
  },
  // pilot
  {
    id: 47,
    type: 1,
    cost: 3,
    maxLevel: 2,
    text: (amount: number) => `+${10 * amount}% Power of control loss after the blackout`,
    order: 290,
    step: 10,
    include: true,
    class: [5, 16],
    icon: "pilot_willpower_icon.svg",
    level: 2,
  },
  // pilots
  {
    id: 48,
    type: 1,
    cost: 3,
    maxLevel: 2,
    text: (amount: number) => `+${7 * amount}% Flight stamina`,
    order: 320,
    step: 7,
    include: true,
    class: [5, 16],
    icon: "pilot_stamina_boost_icon.svg",
    level: 2,
  },
  // Weapon Handling
  {
    id: 6,
    type: 2,
    cost: 1,
    maxLevel: 1,
    text: (amount: number) => `+${amount * 50}% Weapon changing speed`,
    order: 60,
    step: 50,
    include: false,
    class: [],
    icon: "faster_change_weapon_icon.svg",
    level: 1,
  },
  {
    id: 7,
    type: 2,
    cost: 1,
    maxLevel: 2,
    text: (amount: number) => `+${amount * 7.5}% Speed of decreasing of the shot spread after quick turning,
     -${amount * 12.5}% Shot spread after quick turning`,
    order: 380,
    step: 12.5,
    include: false,
    class: [],
    icon: "less_shot_spread_after_turn_icon.svg",
    level: 1,
  },
  {
    id: 8,
    type: 2,
    cost: 1,
    maxLevel: 4,
    text: (amount: number) => `+${amount * 25}% Melee damage, +${amount * 5}% Melee attack speed`,
    order: 400,
    step: 25,
    include: false,
    class: [],
    icon: "melee_damage_icon.svg",
    level: 1,
  },
  {
    id: 26,
    type: 2,
    cost: 3,
    maxLevel: 2,
    text: (amount: number) => `+${25 * amount}% Throwing range of grenades`,
    order: 400,
    step: 25,
    include: false,
    class: [15],
    icon: "longer_grenade_throw_icon.svg",
    level: 1,
  },
  {
    id: 27,
    type: 2,
    cost: 2,
    maxLevel: 3,
    text: (amount: number) => `+${15 * amount}% Medkits available in medkits box`,
    order: 420,
    step: 15,
    include: true,
    class: [9],
    icon: "medic_more_medbox_packs_icon.svg",
    level: 1,
  },
  {
    id: 54,
    type: 2,
    cost: 4,
    maxLevel: 2,
    text: (amount: number) => `+${10 * amount}% Mortar ammunition `,
    order: 500,
    step: 10,
    include: true,
    class: [10],
    icon: "more_ammo_secondary_icon.svg",
    level: 2,
  },
  {
    id: 28,
    type: 2,
    cost: 4,
    maxLevel: 2,
    text: (amount: number) => `+${6 * amount}% Firearm reload speed`,
    order: 490,
    step: 6,
    include: false,
    class: [5, 15, 16],
    icon: "faster_reload_icon.svg",
    level: 2,
  },
  {
    id: 29,
    type: 2,
    cost: 5,
    maxLevel: 2,
    text: (amount: number) => `+${12.5 * amount}% Flamethrower fuel`,
    order: 510,
    step: 12.5,
    include: true,
    class: [6],
    icon: "more_flamethrower_fuel_icon.svg",
    level: 2,
  },
  {
    id: 30,
    type: 2,
    cost: 2,
    maxLevel: 5,
    text: (amount: number) => `Greater chance to get in downed state upon taking
     fatal damage, +${10 * amount}% downed state time before death`,
    order: 480,
    step: 10,
    include: false,
    class: [],
    icon: "downed_boost_icon.svg",
    level: 2,
  },
  {
    id: 31,
    type: 2,
    cost: 4,
    maxLevel: 3,
    text: (amount: number) => `+${4 * amount}% Firing rate while using bolt action rifles`,
    order: 470,
    step: 4,
    include: false,
    class: [5, 15, 16],
    icon: "faster_bolt_action_icon.svg",
    level: 2,
  },
  {
    id: 32,
    type: 2,
    cost: 3,
    maxLevel: 4,
    text: (amount: number) => `-${10 * amount}% Firearm vertical recoil `,
    order: 460,
    step: 10,
    include: false,
    class: [5, 15, 16],
    icon: "less_recoil_icon.svg",
    level: 2,
  },
  {
    id: 33,
    type: 2,
    cost: 16,
    maxLevel: 1,
    text: (amount: number) => `-${30 * amount}% Firearm horizontal recoil  `,
    order: 520,
    step: 30,
    include: false,
    class: [5, 15, 16],
    icon: "more_predictable_recoil_icon.svg",
    level: 3,
  },
  // Tanker
  {
    id: 41,
    type: 2,
    cost: 3,
    maxLevel: 2,
    text: (amount: number) => `+${50 * amount}% To the number of uses of the repair kit`,
    order: 430,
    step: 50,
    include: true,
    class: [1, 15],
    icon: "repairkit_economy_usage_icon.svg",
    level: 1,
  },
  // Tanker
  {
    id: 42,
    type: 2,
    cost: 5,
    maxLevel: 2,
    text: (amount: number) => `+${10 * amount} Modules durability restored after repair`,
    order: 450,
    step: 10,
    include: true,
    class: [1, 15],
    icon: "repair_quality_icon.svg",
    level: 2,
  },
  // Tanker
  {
    id: 43,
    type: 2,
    cost: 16,
    maxLevel: 1,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    text: (amount: number) => "Improved targeting skills of a tank gun (Gunner Perk)",
    order: 530,
    step: 1,
    include: true,
    class: [15],
    icon: "accurate_guidance_icon.svg",
    level: 3,
  },
  // Tanker
  {
    id: 44,
    type: 2,
    cost: 16,
    maxLevel: 1,
    text: (amount: number) => `+${20 * amount}% Tank gun reload speed (Loader Perk, value doesn't stack)`,
    order: 540,
    step: 20,
    include: true,
    class: [15],
    icon: "faster_reload_tankgun_icon.svg",
    level: 3,
  },
  {
    id: 49,
    type: 2,
    cost: 2,
    maxLevel: 4,
    text: (amount: number) => `+${7.5 * amount}% Angle of focused and peripheral vision`,
    order: 440,
    step: 7.5,
    include: true,
    class: [5, 16],
    icon: "pilot_awareness_icon.svg",
    level: 1,
  },
  {
    id: 50,
    type: 2,
    cost: 15,
    maxLevel: 1,
    text: (amount: number) => `+${50 * amount}% Enemy aircraft detection range`,
    order: 550,
    step: 50,
    include: true,
    class: [5, 16],
    icon: "pilot_keen_vision_icon.svg",
    level: 3,
  },
  {
    id: 51,
    type: 0,
    cost: 16,
    maxLevel: 1,
    text: (amount: number) => `+${15 * amount}% Sprint speed`,
    order: 190,
    step: 15,
    include: false,
    class: [],
    icon: "sprint_speed_icon.svg",
    level: 3,
  },
  {
    id: 52,
    type: 1,
    cost: 1,
    maxLevel: 1,
    text: (amount: number) => `+${15 * amount}% Stamina regeneration speed`,
    order: 260,
    step: 15,
    include: false,
    class: [],
    icon: "stamina_regeneration_icon.svg",
    level: 1,
  }
];
