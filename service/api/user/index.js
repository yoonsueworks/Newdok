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

/* 전화번호 중복 확인2 0824 */
export const userCheckPhoneNumber_2 = async (params) => {
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

/* SMS 인증번호 전송 */
export const userAuthSms_2 = async (params) => {
  const { data } = await axios.post("/users/auth/SMS", params);
  return data;
};

/* 아이디 중복 확인 : 삭제 예정!! */
export const userCheckLoginId = async (params) => {
  const response = await axios.get(`/users/check/loginId?loginId=${params}`);
  return response;
};

/* 비밀번호 찾기, 아이디 중복 확인 */
export const userCheckLoginId_2 = async (params) => {
  const { data } = await axios.get(`/users/check/loginId?loginId=${params}`);
  return data;
};

/* 비밀번호 변경 */
export const userResetPswd = async (params) => {
  const { data } = await axios.patch("/users/mypage/password", params);
  return data;
};

/* 사전조사 */
export const getUserResearch = async (params) => {
  const { data } = await axios.get(`/users/preInvestigate?${params}`, {
    headers: headers,
  });
  return data;
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
