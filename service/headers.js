import LocalStorage from "public/utils/LocalStorage";

export const token = LocalStorage.getItem("NDtoken");

export const headers = {
  Authorization: `Bearer ${token}`,
  "Content-Type": "application/json",
};
