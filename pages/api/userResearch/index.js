import { useContext } from "react";
import { GlobalContext } from "pages/_app";
import API from "../../../config";
import LocalStorage from "public/utils/LocalStorage";

const token = LocalStorage.getItem("NDtoken");
const headers = {
  Authorization: `Bearer ${token}`,
  "Content-Type": "application/json",
};

export const FetchResearchResult = (params, interests) => {
  const token = LocalStorage.getItem("NDtoken");

  !params?.includes("undefined") &&
    interests?.length > 0 &&
    fetch(`${API.recommend}${params}`, {
      headers: headers,
    })
      .then((res) => res.json())
      .then((res) => {
        return res;
      });
};
