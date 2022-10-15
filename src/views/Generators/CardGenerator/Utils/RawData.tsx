export const factionArr = [
  { name: "Bushido", isDisabled: false },
  { name: "Gannicus", isDisabled: true },
  { name: "Forgotten", isDisabled: false },
  { name: "Fe Verde", isDisabled: true },
  { name: "Resistence", isDisabled: false },
];

export const rarityArr = [
  { name: "Common", color: "#FFFFFF", isDisabled: false },
  { name: "Uncommon", color: "#75D24B", isDisabled: false },
  { name: "Rare", color: "#0755FF", isDisabled: false },
  { name: "Epic", color: "#F840FF", isDisabled: false },
  { name: "Legendary", color: "#FFB908", isDisabled: false },
];

export const factionColors = [
  { name: "Bushido", color: "#502828" },
  { name: "Gannicus", color: "#000" },
  { name: "Forgotten", color: "#4d3818" },
  { name: "Fe Verde", color: "#000" },
  { name: "Resistence", color: "#bd7800" },
];

export const cardData = [
  {
    name: "Obliterator",
    description:
      "<strong>Rage:</strong> deals <strong>2 damage</strong> to all enemies in your lane.",
    stats: {
      mana: 8,
      attack: 5,
      health: 5,
    },
    faction: "Forgotten",
    rarity: "Legendary",
    image: "/images/obliterator_.jpg",
    type: "vehicle",
  },
  {
    name: "Feast Time",
    description:
      "Summon <strong>2/1 hyenas</strong> with <strong>rush</strong> for each enemy on your lane",
    stats: {
      mana: 2,
      attack: 0,
      health: 0,
    },
    faction: "Forgotten",
    rarity: "Uncommon",
    image: "/images/feast_time.png",
    type: "tactic",
  },
  {
    name: "Plains Rider",
    description: "Pierce. Diversion",
    stats: {
      mana: 3,
      attack: 3,
      health: 2,
    },
    faction: "Forgotten",
    rarity: "Common",
    image: "/images/plains_rider.jpg",
  },
  {
    name: "Dunkan Forger",
    description:
      '<strong>Rage:</strong> grants "+1/+1" to an ally of this lane.',
    stats: {
      mana: 3,
      attack: 2,
      health: 3,
    },
    faction: "Forgotten",
    rarity: "Common",
    image: "/images/dunkan_forger.jpg",
  },
  {
    name: "Energy Boost",
    description: "Gain 2 mana this turn.",
    stats: {
      mana: "0",
      attack: 0,
      health: 0,
    },
    faction: "Resistence",
    rarity: "Rare",
    image: "/images/energy_boost.png",
    type: "tactic",
  },
  {
    name: "Colonel Jackson",
    description:
      "<strong>Challenge.</strong>\nWhen summoned\n<strong>desertion 4.</strong>",
    stats: {
      mana: 8,
      attack: 4,
      health: 7,
    },
    faction: "Resistence",
    rarity: "Epic",
    image: "/images/colonel_jackson.png",
  },
  {
    name: "Din",
    description:
      "<strong>Energy shield.</strong>\nWhen summoned\n<strong>paralize</strong> an enemy unit.\nGrants <strong>inmunity</strong> to your\ncommander while she's\nin the battlefield.",
    stats: {
      mana: 10,
      attack: 6,
      health: 7,
    },
    faction: "Resistence",
    rarity: "Legendary",
    image: "/images/din.jpg",
  },
  {
    name: "Kanazawan Soldier",
    description: "Challenge. Swap.",
    stats: {
      mana: 4,
      attack: 1,
      health: 3,
    },
    faction: "Bushido",
    rarity: "Common",
    image: "/images/kanazawan_soldier.jpg",
    type: "unit",
  },
  {
    name: "Ihaido",
    description:
      "<strong>Quick Attack:</strong> Deals\ndamage before the\nenemy. <strong>Weaken.</strong>",
    stats: {
      mana: 6,
      attack: 5,
      health: 5,
    },
    faction: "Bushido",
    rarity: "Legendary",
    image: "/images/ihaido.jpg",
    type: "unit",
  },
  {
    name: "Kuro Tengu",
    description: "Flight. Mobility.",
    stats: {
      mana: 4,
      attack: 3,
      health: 1,
    },
    faction: "Bushido",
    rarity: "Common",
    image: "/images/kuro_tengu.png",
    type: "vehicle",
  },
  {
    name: "Bloody Roning",
    description:
      "<strong>Camouflage.</strong> When\nsummoned apply\n<strong>Bleeding 2</strong> to a unit.",
    stats: {
      mana: 2,
      attack: 1,
      health: 1,
    },
    faction: "Bushido",
    rarity: "Common",
    image: "/images/bloody_ronin.jpg",
  },
  {
    name: "Rookie Riders",
    description:
      "<strong>Mobility:</strong>\nWhen summoned\n<strong>paralyze</strong> a unit.",
    stats: {
      mana: 4,
      attack: 4,
      health: 3,
    },
    faction: "Forgotten",
    rarity: "Uncommon",
    image: "/images/rookie_riders.png",
    type: "vehicle",
  },
];
