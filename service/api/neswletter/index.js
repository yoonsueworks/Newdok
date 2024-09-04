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
  if (!params || !params.year || !params.month) {
    return;
  }
  // TODO: params undefined인 채로 전달되는 이슈 근본적 해결

  const { data } = await axios.get(
    `articles?year=${params.year}&publicationMonth=${params.month}`,
    {
      headers: headers,
    }
  );
  return data;
};

/* 일간 수신 뉴스레터 조회 (회원) */
export const getDailyArticles = async () => {
  const { data } = await axios.get(`/articles/today`, {
    headers: headers,
  });
  return data;
};
