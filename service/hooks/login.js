import { useMutation } from "react-query";
import { userLogin, handleLoginErrors } from "service/api/user";
import LocalStorage from "../../public/utils/LocalStorage";
import API from "../../config";

const token = LocalStorage.getItem("NDtoken");
const headers = {
  Authorization: `Bearer ${token}`,
  "Content-Type": "application/json",
};

export const usePostLogin = (params) => {
  return useMutation({
    mutationKey: ["login", params],
    mutationFn: async (params) => {
      const data = await userLogin(params);
      return data;
    },
  });
};

export const fetchlogin = async (params) => {
  const body = JSON.stringify(params);

  try {
    const response = await fetch(`${API.login}`, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: body,
    });

    const data = await response.json();

    if (response.ok && data.accessToken) {
      LocalStorage.setItem("NDtoken", data?.accessToken);
      LocalStorage.setItem("NDnickname", data?.user.nickname);
      LocalStorage.setItem("NDUserDatas", JSON.stringify(data?.user));
      return true; // Login successful
    } else {
      return false; // Login failed
    }
  } catch (error) {
    console.error("Error occurred:", error);
    return false; // Login failed due to an error
  }
};
