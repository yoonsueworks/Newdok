import { useQuery } from "react-query";
import {
  newsletterRecommend,
  newsletterAll,
  newsletterBrand,
} from "../api/neswletter";

export const useNewslettersRecommended = () => {
  return useQuery("newsletterRecommend", newsletterRecommend, {
    retry: 0,
    refetchInterval: 30 * 60 * 1000,
    staleTime: 30 * 60 * 1000,
  });
};

export const useBrowseAll = (params) => {
  return useQuery(
    {
      queryKey: "browseAll",
      // queryFn: () => newsletterAll(params),
      // TODO: 모든 뉴스레터 조회
    },
    {
      refetchInterval: 60 * 60 * 1000,
      retry: 2,
    }
  );
};

export const useNewsletterBrand = (params) => {
  return useQuery(
    {
      queryKey: "useNewsletterBrand",
      queryFn: () => newsletterBrand(params),
    },
    {
      refetchInterval: 60 * 60 * 1000,
      retry: 0,
    }
  );
};
