import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const accessTokenAtom = atom({
  key: "accessTokenAtom",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const userDatasAtom = atom({
  key: "userDatasAtom",
  default: {},
  effects_UNSTABLE: [persistAtom],
});

export const browseAllPageAtom = atom({
  key: "browseAllPageAtom",
  default: 1,
});

export const monthlyArticlesAtom = atom({
  key: "monthlyArticlesAtom",
  default: [],
});

export const monthValueAtom = atom({
  key: "monthValueAtom",
  default: new Date(),
});

export const dateValueAtom = atom({
  key: "dateValueAtom",
  default: new Date(),
});

export const browseOptionsAtom = atom({
  key: "browseOptionsAtom",
  default: {
    industries: [],
    days: [],
    sortOption: "인기순",
  },
});

export const infoChangeSuccessAtom = atom({
  key: "infoChangeSuccessAtom",
  default: "",
});

export const userResearchAtom = atom({
  key: "userResearchAtom",
  default: { industryId: null, interests: [] },
  effects_UNSTABLE: [persistAtom],
});

export const userCurrentPlaceAtom = atom({
  key: "userCurrentPlaceAtom",
  default: "",
});
