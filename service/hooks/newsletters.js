import { useQuery } from "react-query";
import { newsletterRecommend } from "../api/neswletter";

export const useNewslettersRecommended = () => {
  return useQuery("newsletterRecommend", newsletterRecommend, {
    retry: 0,
    refetchInterval: 30 * 60 * 1000,
    staleTime: 30 * 60 * 1000,
  });
};
