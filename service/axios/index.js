import axios from "axios";
// import LocalStorage from "public/utils/Localstorage";

// const accessToken = LocalStorage.getItem("token");

const config = {
  baseURL: "https://newdok.shop",
  //   headers: {
  //     Authorization: `Bearer ${accessToken}`,
  //   },
};

const axiosInstance = axios.create(config);

export default axiosInstance;
