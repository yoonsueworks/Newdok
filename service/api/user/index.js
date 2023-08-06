import axios from "../../axios";

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
  try {
    const { data } = await axios.post("/users/login", params);
    return data;
  } catch (error) {
    handleLoginErrors(error);
  }
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
  const { data } = await axios.get(`/users/check/loginId?loginId=${params}`, {
    validateStatus: false,
  });
  return data;
};

export const userResetPswd = async (params) => {
  await axios.patch("/users/reset/password", params);
};
// {
//     "loginId": "kjyong702",
//     "newPassword": "@def5678"
//   }

export const userPreInvestigate = async () => {
  await axios.get(`/users/preInvestigate/${params}`, {
    headers: { Authorization: token },
  });
};
// params = string
