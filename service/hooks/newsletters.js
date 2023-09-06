import { useQuery } from "react-query";
import LocalStorage from "public/utils/LocalStorage";
import {
  getRecommend,
  newsletterAll,
  newsletterAllUnAuth,
  newsletterBrand,
  newsletterBrandUnAuth,
  articleRead,
  monthlyArticles,
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
    refetchInterval: 60 * 1000,
    staleTime: 60 * 1000,
  });
};

export const useBrowseAll = (params) => {
  return useQuery({
    queryKey: ["browseAll", params],
    queryFn: () =>
      token ? newsletterAll(params) : newsletterAllUnAuth(params),
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
  return useQuery(
    {
      queryKey: ["useNewsletterBrand", params],
      queryFn: () =>
        token ? newsletterBrand(params) : newsletterBrandUnAuth(params),
    },
    {
      onSuccess: (data) => {
        return data;
      },
      retry: 0,
    }
  );
};

export const useArticleRead = (params) => {
  return useQuery(
    {
      queryKey: ["useArticleRead", params],
      queryFn: () => articleRead(params),
    },
    {
      onSuccess: (data) => {
        return data;
      },
      retry: 0,
    }
  );
};

export const useMonthlyArticles = (params) => {
  return useQuery(
    {
      queryKey: ["monthlyArticles", params],
      queryFn: () => token && monthlyArticles(params),
    },
    {
      onSuccess: (data) => {
        return data;
      },
      retry: 0,
    }
  );
};

export const useMonthlyArticlesOnClick = (params) => {
  return useQuery({
    queryKey: ["monthlyArticles", params],
    queryFn: () => token && monthlyArticles(params),
    enabled: false,
    onSuccess: (data) => {
      return data;
    },
    retry: 0,
  });
};
