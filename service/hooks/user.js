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
  userSubscriptionList,
  getUserResearch,
  modifyNickname,
  modifyIndustry,
  modifyPhoneNumber,
  modifyInterests,
} from "service/api/user";

const token = LocalStorage.getItem("NDtoken");

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
      LocalStorage.setItem("NDnickname", data.user.nickname);
      LocalStorage.setItem("NDuserDatas", data.user);
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

export const useGetUserResearch = (params) => {
  return useQuery({
    queryKey: ["getUserResearch", params],
    queryFn: async () => await getUserResearch(params),
    retry: 0,
    enabled: false,
    refetchInterval: 60 * 5 * 1000,
    staleTime: 60 * 5 * 1000,
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
    queryFn: () => token && userSubscriptionList(),
    onSuccess: (data) => {
      return data;
    },
    retry: 3,
  });
};

export const useModifyNickname = (params) => {
  return useMutation({
    mutationKey: ["modifyNickname", params],
    mutationFn: (params) => modifyNickname(params),
    onSuccess: (data) => {
      return data;
    },
    enabled: false,
  });
};

export const useModifyIndustry = (params) => {
  return useMutation({
    mutationKey: ["modifyIndustry", params],
    mutationFn: (params) => modifyIndustry(params),
    onSuccess: (data) => {
      return data;
    },
    enabled: false,
  });
};

export const useModifyInterests = () => {
  return useMutation({
    mutationKey: ["modifyInterests"],
    mutationFn: async (params) => await modifyInterests(params),
    onSuccess: (data) => {
      return data;
    },
    onError: (error) => {
      return error;
    },
    enabled: false,
    retry: 0,
  });
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
