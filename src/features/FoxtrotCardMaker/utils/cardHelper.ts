import { hexToRgb } from "common/utils";

import { RARITY_COLORS } from "../constants/cards";

export const rarityColorByRarityState = (state: string | undefined) => {
  if (!state) return null;

  const color = RARITY_COLORS[state.toLowerCase()];
  return hexToRgb(color).join(", ");
};
