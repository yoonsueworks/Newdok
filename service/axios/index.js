import axios from "axios";

const config = {
  baseURL:
    process.env.NODE_ENV === "development"
      ? " http://3.38.79.19"
      : "https://newdok.store",
};

const instance = axios.create(config);

export default instance;
