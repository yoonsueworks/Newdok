import { atom } from "recoil";
import { persistAtom } from "pages/_app.js";

export const accessTokenAtom = atom({
  key: "accessTokenAtom",
  default: "",
});

export const userDatasAtom = atom({
  key: "userDatasAtom",
  default: {},
});

export const browseOptionsAtom = atom({
  key: "browseOptionsAtom",
  default: {
    industries: [],
    days: [],
    sortOption: "인기순",
  },
});
