import axios from "../../axios";
import LocalStorage from "public/utils/LocalStorage";

const token = LocalStorage.getItem("NDtoken");

const headers = {
  Authorization: `Bearer ${token}`,
  "Content-Type": "application/json",
};

/* 개인화 추천 뉴스레터 */
export const getRecommend = async () => {
  const { data } = await axios.get("/newsletters/recommend", {
    headers: headers,
  });
  return data;
};

/* 뉴스레터 브랜드 조회 (회원) */
export const getNewsletterBrand = async (params) => {
  const { data } = await axios.get(`/newsletters/${params}`, {
    headers: headers,
  });
  ``;
  return data;
};

/* 뉴스레터 브랜드 조회 (비회원) */
export const getNewsletterBrandUnauth = async (params) => {
  const { data } = await axios.get(`/newsletters/${params}/non-member`);
  return data;
};

/* 모든 뉴스레터 브랜드 조회 : 둘러보기 */
export const getNewsletterAll = async (params) => {
  const { data } = await axios.get(`/newsletters?${params}`, {
    headers: headers,
  });
  return data;
};

/* 모든 뉴스레터 브랜드 조회 : 둘러보기(비회원) */
export const getNewsletterAllUnauth = async (params) => {
  const { data } = await axios.get(`/newsletters/non-member?${params}`);
  return data;
};

/* 뉴스레터 브랜드 조회 (회원) */
export const getBrandRead = async (params) => {
  const { data } = await axios.get(`/articles/${params}`, {
    headers: headers,
  });
  return data;
};

/* 월간 데이터 조회 (회원) */
export const getMonthlyArticles = async (params) => {
  const { data } = await axios.get(`articles?publicationMonth=${params}`, {
    headers: headers,
  });
  return data;
};

/* 구독 리스트 보기 */
export const getSubscriptionList = async () => {
  const { data } = await axios.get(`/newsletters/subscription/active`, {
    headers: headers,
  });
  return data;
};

/* 구독중지 중인 리스트 보기 */
export const getPausedSubscriptionList = async () => {
  const { data } = await axios.get(`/newsletters/subscription/paused`, {
    headers: headers,
  });
  return data;
};

/* 구독 중지 */
export const pauseSubscription = async () => {
  const { data } = await axios.get(`/newsletters/subscription/pause`, {
    headers: headers,
  });
  return data;
};
/* 구독 재개 */
export const resumeSubscription = async () => {
  const { data } = await axios.get(`/newsletters/subscription/resume`, {
    headers: headers,
  });
  return data;
};
