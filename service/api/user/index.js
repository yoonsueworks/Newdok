import axios from "axios";

/* 회원가입 */
export const userSignUp = async (params) => {
  await axios.post("/users/signup", params);
};
// {
//     "loginId": "newdok",
//     "password": "!abc1234",
//     "phoneNumber": "01012345678",
//     "nickname": "뉴독",
//     "birthYear": "1997",
//     "gender": "남자"
//   }

/* 로그인 */
export const userLogin = async (params) => {
  await axios.post("/users/login", params);
};
// {
//     "loginId": "newdok",
//     "password": "!abc1234"
//   }

/* 아이디 중복 확인 */
export const userCheckLoginId = async (params) => {
  await axios.get(`/users/check/loginId/${params}`);
};
// params =  string

/* 전화번호 중복 확인 */
export const userCheckPhoneNumber = async (params) => {
  await axios.get(`/users/check/phoneNumber/${params}`);
};
// params =  string

/* SMS 인증번호 전송 */
export const userAuthSms = async (params) => {
  await axios.get("/users/auth/SMS", params);
  //   await axios.get("users/auth/SMS", {
  // "phoneNumber": params
  // });
};
// ver.1
// {
//     "phoneNumber": "01055039184"
//   }
// ver.1
// params = string

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
