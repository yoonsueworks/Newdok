import { useMutation, useQuery } from "react-query";
import LocalStorage from "public/utils/LocalStorage";
import {
  getBookmarkInterest,
  getBookmarkList,
  postBookmark,
} from "../api/article";

const token = LocalStorage.getItem("NDtoken");

export const useGetBookmarkInterest = () => {
  return useQuery({
    queryKey: "getBookmarkInterest",
    queryFn: () => token && getBookmarkInterest(),
    onSuccess: (data) => {
      return data;
    },
    retry: 3,
  });
};

export const useGetBookmarkList = (params) => {
  return useQuery({
    queryKey: ["getBookmarkList", params],
    queryFn: () => token && getBookmarkList(params),
    onSuccess: (data) => {
      return data;
    },
    retry: 3,
  });
};

export const usePostBookmark = (params) => {
  return useMutation({
    mutationKey: ["postBookmark", params],
    mutationFn: () => token && postBookmark(params),
    onError: (error) => {
      console.error("Error posting bookmark:", error);
    },
  });
};
