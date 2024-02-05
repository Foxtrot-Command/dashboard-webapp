export const enum RELEASE_STATUS {
  STABLE = "ESTABLE",
  BETA = "BETA",
  WIP = "WIP",
  ALPHA = "ALPHA",
}

export const tagReleaseColor = {
  [RELEASE_STATUS.STABLE]: "blue",
  [RELEASE_STATUS.BETA]: "purple",
  [RELEASE_STATUS.WIP]: "red",
  [RELEASE_STATUS.ALPHA]: "purple",
};
