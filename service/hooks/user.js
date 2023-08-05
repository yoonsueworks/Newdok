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
    mutationKey: ["postSignUp"],
    mutationFn: () => {
      return {
        user: {
          id: 12,
          loginId: "mrokr0327",
          password:
            "$2b$10$oiKbW/ixdkmfAJwTx.Yv2eaQg8sVyl/QOH6/m07Q85si8y/Dp8o1e",
          phoneNumber: "01041478220",
          subscribeEmail: "test@newdok.site",
          subscribePassword:
            "$2b$10$XeCrejK16PEa9WermMDjBudGAi1TVEZujD0/1U2PROdVzmoOmXHQq",
          nickname: "테스트",
          birthYear: "1996",
          gender: "여자",
          industryId: null,
        },
        accessToken:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsImlhdCI6MTY5MTIyNjc4NSwiZXhwIjoxNjkxMzEzMTg1fQ.BSEbe2rrxscSrZHJkk_1VvlAMo0emQj9KsqG1JeHK-0",
      };
    },

    // mutationFn: async (params) => {
    //   const response = await userSignUp(params);
    // return response;
    // },
    enabled: false,
    retry: 0,
    throwOnError: true,
    onSuccess: (data) => {
      return data;
      LocalStorage.setItem("NDtoken", data.accessToken);
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
      return { error };
    },
  });
};
