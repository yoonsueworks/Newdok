import { useQuery } from "react-query";
import LocalStorage from "public/utils/LocalStorage";
import { getBookmarkInterest, getBookmarkList } from "../api/article";

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
