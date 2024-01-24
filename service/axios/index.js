import axios from "axios";

const config = {
  baseURL:
    process.env.NODE_ENV !== "main"
      ? "http://13.209.189.93"
      : "https://newdok.shop",
};

const instance = axios.create(config);

export default instance;
