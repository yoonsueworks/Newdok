import { useQuery } from "react-query";
import LocalStorage from "public/utils/LocalStorage";
import {
  getRecommend,
  getNewsletterAll,
  getNewsletterAllUnauth,
  getNewsletterBrand,
  getNewsletterBrandUnauth,
  getBrandRead,
  getMonthlyArticles,
} from "../api/neswletter";

const token = LocalStorage.getItem("NDtoken");

export const useNewslettersRecommended = () => {
  return useQuery({
    queryKey: ["getRecommend"],
    queryFn: () => token && getRecommend(),
    onSuccess: (data) => {
      return data;
    },
    onError: (error) => {
      return error;
    },
    retry: 0,
  });
};

export const useBrowseAll = (params) => {
  return useQuery({
    queryKey: ["browseAll", params],
    queryFn: () =>
      token ? getNewsletterAll(params) : getNewsletterAllUnauth(params),
    onSuccess: (data) => {
      return data;
    },
    onError: (error) => {
      return error;
    },
    retry: 0,
  });
};

export const useNewsletterBrand = (params) => {
  return useQuery({
    queryKey: ["useNewsletterBrand", params],
    queryFn: () =>
      token ? getNewsletterBrand(params) : getNewsletterBrandUnauth(params),
    onSuccess: (data) => {
      return data;
    },
    retry: 0,
  });
};

export const useBrandRead = (params) => {
  return useQuery({
    queryKey: ["useBrandRead", params],
    queryFn: () => getBrandRead(params),
    onSuccess: (data) => {
      return data;
    },
    retry: 0,
  });
};

export const useMonthlyArticles = (params) => {
  return useQuery({
    queryKey: ["useMonthlyArticles", params],
    queryFn: () => token && getMonthlyArticles(params),
    onSuccess: (data) => {
      return data;
    },
    retry: 0,
    refetchInterval: 60 * 2 * 1000,
    staleTime: 60 * 2 * 1000,
  });
};

export const useMonthlyArticlesOnClickPrev = (params) => {
  return useQuery({
    queryKey: ["getMonthlyArticlesOnClick", params],
    queryFn: () => token && getMonthlyArticles(params),
    onSuccess: (data) => {
      return data;
    },
    enabled: false,
    retry: 0,
  });
};

export const useMonthlyArticlesOnClickNext = (params) => {
  return useQuery({
    queryKey: ["getMonthlyArticlesOnClick", params],
    queryFn: () => token && getMonthlyArticles(params),
    onSuccess: (data) => {
      return data;
    },
    enabled: false,
    retry: 0,
  });
};
