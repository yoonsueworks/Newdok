import { selector } from "recoil";
import { browseOptionsAtom } from "service/atoms/atoms";

export const browseOptionsQuerySelector = selector({
  key: "browseOptionsQuery",
  get: ({ get }) => {
    const browseOptions = get(browseOptionsAtom);
    const orderQuery =
      browseOptions.sortOption && "orderOpt=" + browseOptions.sortOption;
    const industryQuery =
      browseOptions.industries.length > 0
        ? "&industry=" + browseOptions.industries.join("&industry=")
        : "";
    const dayQuery =
      browseOptions.days.length > 0
        ? "&day=" + browseOptions.days.join("&day=")
        : "";
    return orderQuery + industryQuery + dayQuery;
  },
});
