import axios from "../../axios";
import { headers } from "../../headers";
import LocalStorage from "public/utils/LocalStorage";

export const handleLoginErrors = async (error) => {
  const statusCode = error.response.status;
  const message = error.response.data.message;
  if (statusCode === 400) {
    return message;
  }
};

/* 회원가입 */
export const postSignUp = async (params) => {
  const { data } = await axios.post("/users/signup", params);
  return data;
};

/* 로그인 */
export const postLogin = async (params) => {
  const { data } = await axios.post("/users/login", params);
  return data;
};

/* 전화번호 중복 확인 */
export const getCheckPhoneNumber = async (params) => {
  const { data } = await axios.get(
    `/users/check/phoneNumber?phoneNumber=${params}`
  );
  return data;
};

/* SMS 인증번호 전송 */
export const postAuthSms = async (params) => {
  const { data } = await axios.post("/auth/SMS", params);
  return data;
};

/* 비밀번호 찾기, 아이디 중복 확인 */
export const getCheckLoginId = async (params) => {
  const { data } = await axios.get(`/users/check/loginId?loginId=${params}`);
  return data;
};

/* 비밀번호 변경 */
export const patchResetPassword = async (params) => {
  const { data } = await axios.patch("/users/mypage/password", params);
  return data;
};

/* 사전조사 */
export const getUserResearch = async (params) => {
  const { data } = await axios.get(`/users/preInvestigate?${params}`, {
    headers: {
      Authorization: `Bearer ${LocalStorage.getItem("NDtoken")}`,
      "Content-Type": "application/json",
    },
  });
  return data;
};

/* 구독 닉네임 변경 */
export const modifyNickname = async (params) => {
  const { data } = await axios.patch(
    `/users/mypage/nickname`,
    JSON.stringify(params),
    {
      headers: headers,
    }
  );
  return data;
};

/* 산업군 변경 */
export const modifyIndustry = async (params) => {
  const { data } = await axios.patch(
    `/users/mypage/industry`,
    JSON.stringify(params),
    {
      headers: headers,
    }
  );
  console.log(headers);
  return data;
};

/* 휴대폰 번호 변경 */
export const modifyPhoneNumber = async (params) => {
  const { data } = await axios.patch(
    `/users/mypage/phoneNumber`,
    JSON.stringify(params),
    {
      headers: headers,
    }
  );
  return data;
};

/* 관심사 변경 */
export const modifyInterests = async (params) => {
  const { data } = await axios.patch(
    "/users/mypage/interest",
    JSON.stringify(params),
    {
      headers: headers,
    }
  );
  return data;
};
