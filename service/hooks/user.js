import { useMutation, useQuery, useQueryClient } from "react-query";
import LocalStorage from "../../public/utils/LocalStorage";
import {
  userSignUp,
  userLogin,
  userCheckLoginId,
  userCheckPhoneNumber,
  userAuthSms,
  userResetPswd,
  userPreInvestigate,
} from "service/api/user";

export const useAuthSms = () => {
  return useMutation({
    mutationKey: ["authorization-sms"],
    mutationFn: async (params) => {
      const data = await userAuthSms(params);
      return data;
    },
    onError: (error) => {
      alert(error);
    },
  });
};

export const useCheckPhoneNumber = () => {
  const queryClient = useQueryClient();
  return (phoneNumber) => {
    return queryClient.fetchQuery(
      ["checkPhoneNumber", phoneNumber],
      async () => {
        return userCheckPhoneNumber(phoneNumber);
      },
      {
        enabled: false,
        retry: 0,
        onSuccess: () => {
          return queryClient.invalidateQueries();
        },
        onError: (error) => {
          throw error;
        },
      }
    );
  };
};

export const useSignUp = () => {
  return useMutation({
    mutationFn: async (params) => {
      const response = await userSignUp(params);
      return response;
    },
    enabled: false,
    retry: 0,
    throwOnError: true,
    onSuccess: (data) => {
      LocalStorage.setItem("NDtoken", data.accessToken);
      LocalStorage.setItem("NDuserName", data.user.nickname);
      console.log(data, "onsuccess");
    },
    onError: (error) => {
      return { error };
    },
  });
};

export const useCheckLoginId = (params) => {
  return useQuery({
    queryKey: ["checkLoginId"],
    queryFn: async () => {
      await userCheckLoginId(params);
    },
    enabled: false,
    retry: 0,
    throwOnError: true,
    onSuccess: (data) => {
      return data;
    },
    onError: (error) => {
      console.log = function () {};
    },
  });
};
