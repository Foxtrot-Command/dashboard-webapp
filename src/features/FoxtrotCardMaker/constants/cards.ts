export const WRAPPER_ID = "image_final";

export const enum CardRarity {
  COMMON = "common",
  UNCOMMON = "uncommon",
  RARE = "rare",
  EPIC = "epic",
  LEGENDARY = "legendary",
}

export const enum CardType {
  UNIT = "unit",
  VEHICLE = "vehicle",
  STRUCTURE = "structure",
  TACTIC = "tactic",
  SOLDIER = "soldier",
  EQUIPMENT = "equipment",
}

export const CARD_TYPE_VALUES = {
  [CardType.UNIT]: "unit",
  [CardType.VEHICLE]: "vehicle",
  [CardType.STRUCTURE]: "structure",
  [CardType.TACTIC]: "tactic",
  [CardType.SOLDIER]: "soldier",
  [CardType.EQUIPMENT]: "equipment",
};

export const enum CardFaction {
  GLOBAL = "global",
  BUSHIDO = "bushido",
  GANNICUS = "gannicus",
  THE_FORGOTTENS = "forgotten",
  GREEN_FAITH = "green faith",
  RESISTENCE = "resistence",
}

export const RARITY_COLORS = {
  [CardRarity.COMMON]: "#FFFFFF",
  [CardRarity.UNCOMMON]: "#75D24B",
  [CardRarity.RARE]: "#0755FF",
  [CardRarity.EPIC]: "#F840FF",
  [CardRarity.LEGENDARY]: "#FFB908",
};

type TIterable = {
  [key: string]: any;
}
export const RARITY_RGBA_COLORS: TIterable = {
  [CardRarity.COMMON]: [255, 255, 255],
  [CardRarity.UNCOMMON]: [117, 210, 75],
  [CardRarity.RARE]: [7,85,255],
  [CardRarity.EPIC]: [248,64,255],
  [CardRarity.LEGENDARY]: [255,185,8],
};

export const FACTION_COLORS = {
  [CardFaction.BUSHIDO]: "#502828",
  [CardFaction.GANNICUS]: "#000",
  [CardFaction.THE_FORGOTTENS]: "#4d3818",
  [CardFaction.GREEN_FAITH]: "#000",
  [CardFaction.RESISTENCE]: "#bd7800",
};

export const rarityCheckbox = [
  {
    name: CardRarity.COMMON,
    color: RARITY_COLORS[CardRarity.COMMON],
    isDisabled: false,
  },
  {
    name: CardRarity.UNCOMMON,
    color: RARITY_COLORS[CardRarity.UNCOMMON],
    isDisabled: false,
  },
  {
    name: CardRarity.RARE,
    color: RARITY_COLORS[CardRarity.RARE],
    isDisabled: false,
  },
  {
    name: CardRarity.EPIC,
    color: RARITY_COLORS[CardRarity.EPIC],
    isDisabled: false,
  },
  {
    name: CardRarity.LEGENDARY,
    color: RARITY_COLORS[CardRarity.LEGENDARY],
    isDisabled: false,
  },
];

export const factionCheckbox = [
  { name: CardFaction.GLOBAL, isDisabled: false },
  { name: CardFaction.BUSHIDO, isDisabled: false },
  { name: CardFaction.GANNICUS, isDisabled: true },
  { name: CardFaction.THE_FORGOTTENS, isDisabled: false },
  { name: CardFaction.GREEN_FAITH, isDisabled: true },
  { name: CardFaction.RESISTENCE, isDisabled: false },
];
