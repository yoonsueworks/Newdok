// import { useMutation, useQuery } from "react-query";
// import { getUserInfo, handleGetErrors } from "service/api/login";

// export const useGetUserInfo = (params) => {
//   return useQuery({
//     queryFn: () => {
//       return getUserInfo(params);
//     },
//     onError: handleGetErrors,
//     retry: 0,
//   });
// };

// import { useQuery } from "react-query";
// import { LoginAPI } from "../api/login";

// export const useUserLogin = (loginData) => {
//   return useQuery({
//     queryKey: ["userLogin", loginData],
//     queryFn: () => LoginAPI(loginData),
//     onError: console.log("error! hello!"),
//   });
// };
