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
} from "service/api/user";

export const useAuthSms = () => {
  return useMutation({
    mutationKey: ["authorization-sms"],
    mutationFn: async (params) => {
      await userAuthSms(params);
    },
    enabled: false,
    onSuccess: (data) => {
      return data;
    },
    onError: (error) => {
      return error;
    },
  });
};

//비밀번호 찾기에서 사용 중, params로 받는 차이
export const useAuthSms_2 = (params) => {
  return useMutation({
    mutationKey: ["authorization-sms", params],
    mutationFn: async (params) => {
      await userAuthSms(params);
    },
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
    queryFn: () => userCheckPhoneNumber_2(params),
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
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: ["checkLoginId", params],
    queryFn: async () => {
      userCheckLoginId(params);
      return data;
    },
    enabled: false,
    retry: 0,
    throwOnError: true,
    onSuccess: (data) => {
      return data;
    },
  });
};

export const useUserSubscriptionList = () => {
  return useQuery(
    {
      queryKey: "getSubscriptionList",
      queryFn: () => userSubscriptionList(),
    },
    {
      onSuccess: (data) => {
        return data;
      },
    }
  );
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
