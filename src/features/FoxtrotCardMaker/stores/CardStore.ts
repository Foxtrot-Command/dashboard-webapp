import { EditorState } from "draft-js";
import create from "zustand";
import WritableDraft from "immer";
import { devtools, persist } from "zustand/middleware";
import { create as mutativeCreate } from 'mutative';

import { CardFaction, CardRarity } from "../constants/cards";
import { TCardFaction, TCardRarity, TCardType } from "../types/cards";

interface CardState {
  name?: string;
  faction: TCardFaction;
  rarity: TCardRarity;
  stats: {
    mana: number;
    attack: number;
    health: number;
  };
  isFirstEdition?: boolean;
  type?: TCardType;
  downloadQuality: number;
  selectedImage?: string | undefined;
}

interface LoadingState {
  cardContent?: boolean;
  qualityValue?: boolean;
}

export interface CardStore {
  cardState: CardState;
  loadingState: LoadingState;
  editorState: any;
  imageSize: any;
  resetState: () => void;
  updateCardStateKey: (key: any, value: any) => void;
  setEditorState: (editor: EditorState) => void;
  setImageSize: (size: string) => void;
  setName: (name: string) => void;
  setStats: (stat: any) => void;
  setType: (type: TCardType) => void;
  setRarity: (rarity: TCardRarity) => void;
  setFaction: (faction: TCardFaction) => void;
  setImage: (image: string | ArrayBuffer | null | undefined) => void;
  setCardState: (cardState: CardState) => void;
  setDownloadQuality: (quality: number) => void;
  setLoading: (loading: LoadingState) => void;
  setFirstEdition: (value: boolean) => void;
}

export const initialCardState: CardState = {
  name: "",
  faction: CardFaction.BUSHIDO,
  rarity: CardRarity.COMMON,
  stats: {
    mana: 1,
    attack: 1,
    health: 1,
  },
  isFirstEdition: false,
  type: undefined,
  downloadQuality: 1,
  selectedImage: undefined,
};

const initialLoadingStatus: LoadingState = {
  cardContent: false,
  qualityValue: false,
};

const defaultImageSize = "0 MB";

export const mutative = (config) => (set, get) =>
  config((fn) => set(mutativeCreate(fn)), get);

type StoreSet = (fn: (draft: typeof WritableDraft<CardStore>) => void) => void;

const store = (set: StoreSet) => ({
  cardState: initialCardState,
  loadingState: initialLoadingStatus,
  editorState: EditorState.createEmpty(),
  imageSize: defaultImageSize,
  resetState: () => {
    set((state) => {
      state.cardState = initialCardState;
      state.editorState = EditorState.createEmpty();
      state.imageSize = defaultImageSize;
    });
  },
  setEditorState: (editorContentState: EditorState) => {
    set((state) => {
      state.editorState = editorContentState;
    });
  },
  updateCardStateKey: (key: keyof CardState, value: never) => {
    set((state) => {
      state.cardState[key] = value
    });
  },
  setCardState: (content: CardState) => {
    set((state) => {
      state.cardState.name = content.name;
      state.cardState.type = content.type;
      state.cardState.rarity = content.rarity;
      state.cardState.faction = content.faction;
      state.cardState = content;
    });
  },
  setName: (name: typeof initialCardState.name) => {
    set((state) => {
      state.cardState.name = name;
    });
  },
  setType: (type: keyof typeof initialCardState.type) => {
    set((state) => {
      state.cardState.type = type;
    });
  },
  setStats: (stats: typeof initialCardState.stats) => {
    set((state) => {
      state.cardState.stats = { ...state.cardState.stats, ...stats };
    });
  },
  setRarity: (rarity: typeof initialCardState.rarity) => {
    set((state) => {
      state.cardState.rarity = rarity;
    });
  },
  setFaction: (faction: typeof initialCardState.faction) => {
    set((state) => {
      state.cardState.faction = faction;
    });
  },
  setImage: (image: typeof initialCardState.selectedImage) => {
    set((state) => {
      state.cardState.selectedImage = image;
    });
  },
  setDownloadQuality: (
    downloadQuality: typeof initialCardState.downloadQuality
  ) => {
    set((state) => {
      state.cardState.downloadQuality = downloadQuality;
    });
  },
  setLoading: (loading: LoadingState) => {
    set((state) => {
      state.loadingState = { ...state.loadingState, ...loading };
    });
  },
  setImageSize: (size: boolean) => {
    set((state) => {
      state.imageSize = size;
    });
  },
  setFirstEdition: (value: boolean) => {
    set((state) => {
      state.cardState.isFirstEdition = value;
    });
  },
});
export const useCardStore = create<CardStore>()(mutative(store));
