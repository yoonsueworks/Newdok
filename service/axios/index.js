import axios from "axios";

const config = {
  baseURL: "https://newdok.shop",
};

const instance = axios.create(config);

export default instance;
