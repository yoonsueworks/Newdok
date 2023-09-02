import { useMutation, useQuery, useQueryClient } from "react-query";
import LocalStorage from "../../public/utils/LocalStorage";
import {
  userSignUp,
  userLogin,
  userCheckLoginId_2,
  userCheckLoginId,
  userCheckPhoneNumber_2,
  userCheckPhoneNumber,
  userAuthSms,
  userResetPswd,
  userPreInvestigate,
  userSubscriptionList,
  modifyNickname,
  modifyIndustry,
  modifyPhoneNumber,
} from "service/api/user";

export const useAuthSms = (params) => {
  return useMutation({
    mutationKey: ["authorization-sms-1", params],
    mutationFn: async (params) => await userAuthSms(params),
    enabled: false,
    onSuccess: (data) => {
      return data;
    },
    onError: (error) => {
      return error;
    },
  });
};

/* 리액트 쿼리 수정해서 새로운 요청 작성한 것! */
export const useCheckPhoneNumber_2 = (params) => {
  return useQuery({
    queryKey: ["useCheckPhoneNumber_2", params],
    queryFn: async () => await userCheckPhoneNumber_2(params),
    enabled: false,
    retry: 0,
    onSuccess: (data) => {
      return data;
    },
    onError: (error) => {
      if (error.response.status === 400) return error;
    },
  });
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

export const useCheckLoginId_2 = (params) => {
  return useQuery({
    queryKey: ["checkLoginId", params],
    queryFn: () => userCheckLoginId_2(params),
    enabled: false,
    retry: 0,
    onSuccess: (data) => {
      return data;
    },
    onError: (error) => {
      return error;
    },
  });
};

export const useCheckLoginId = (params) => {
  return useQuery({
    queryKey: ["checkLoginId", params],
    queryFn: async () => userCheckLoginId(params),
    enabled: false,
    retry: 0,
    onSuccess: (data) => {
      return data;
    },
    onError: (error) => {
      return error;
    },
  });
};

export const useUserSubscriptionList = () => {
  return useQuery({
    queryKey: "getSubscriptionList",
    queryFn: () => userSubscriptionList(),
    onSuccess: (data) => {
      return data;
    },
    retry: 3,
  });
};

export const useModifyNickname = (params) => {
  return useMutation(
    {
      mutationKey: ["modifyNickname", params],
      mutationFn: (params) => modifyNickname(params),
    },
    {
      onSuccess: (data) => {
        return data;
      },
      enabled: false,
    }
  );
};

export const useModifyIndustry = (params) => {
  return useMutation(
    {
      mutationKey: ["modifyIndustry", params],
      mutationFn: (params) => modifyIndustry(params),
    },
    {
      onSuccess: (data) => {
        return data;
      },
      enabled: false,
    }
  );
};

export const useResetPswd = (params) => {
  return useMutation({
    mutationKey: ["resetPswd", params],
    mutationFn: (params) => userResetPswd(params),
    enabled: false,
    retry: 0,
    onSuccess: (data) => {
      return data;
    },
    onError: (error) => {
      return error;
    },
  });
};

export const useResetPhoneNumber = (params) => {
  return useMutation({
    mutationKey: ["resetPhoneNumber", params],
    mutationFn: (params) => modifyPhoneNumber(params),
    enabled: false,
    retry: 0,
    onSuccess: (data) => {
      return data;
    },
    onError: (error) => {
      return error;
    },
  });
};
