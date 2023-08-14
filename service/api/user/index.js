import axios from "../../axios";
import LocalStorage from "public/utils/LocalStorage";

const token = LocalStorage.getItem("NDtoken");

const headers = {
  Authorization: `Bearer ${token}`,
  "Content-Type": "application/json",
};

export const handleLoginErrors = async (error) => {
  const statusCode = error.response.status;
  const message = error.response.data.message;
  if (statusCode === 400) {
    return message;
  }
};

/* 회원가입 */
export const userSignUp = async (params) => {
  const { data } = await axios.post("/users/signup", params);
  return data;
};

/* 로그인 */
export const userLogin = async (params) => {
  const { data } = await axios.post("/users/login", params);
  return data;
};

/* 전화번호 중복 확인 */
export const userCheckPhoneNumber = async (params) => {
  const { data } = await axios.get(
    `/users/check/phoneNumber?phoneNumber=${params}`
  );
  return data;
};

/* SMS 인증번호 전송 */
export const userAuthSms = async (params) => {
  const { data } = await axios.post("/users/auth/SMS", params);
  return data;
};

/* 아이디 중복 확인 */
export const userCheckLoginId = async (params) => {
  const response = await axios.get(`/users/check/loginId?loginId=${params}`);
  return response;
};

export const userResetPswd = async (params) => {
  await axios.patch("/users/reset/password", params);
};

/* 사전조사 */
export const userPreInvestigate = async () => {
  await axios.get(`/users/preInvestigate/${params}`, {
    headers: { Authorization: token },
  });
};

/* 구독 리스트 보기 */
export const userSubscriptionList = async () => {
  const { data } = await axios.get(`/users/mypage/subscription`, {
    headers: headers,
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
  return data;
};
