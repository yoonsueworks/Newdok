import axios from "../../axios";
import LocalStorage from "public/utils/LocalStorage";

const token = LocalStorage.getItem("NDtoken");

const headers = {
  Authorization: `Bearer ${token}`,
  "Content-Type": "application/json",
};

/* 개인화 추천 뉴스레터 */
export const newsletterRecommend = async () => {
  const { data } = await axios.get("/newsletters/recommend", {
    headers: headers,
  });
  return data;
};

/* 뉴스레터 브랜드 조회 (회원) */
export const newsletterBrand = async (params) => {
  const { data } = await axios.get(`/newsletters/${params}`, {
    headers: headers,
  });
  ``;
  return data;
};

/* 뉴스레터 브랜드 조회 (비회원) */
export const newsletterBrandUnAuth = async (params) => {
  const { data } = await axios.get(`/newsletters/${params}`);
  return data;
};

/* 모든 뉴스레터 브랜드 조회 : 둘러보기 */
export const newsletterAll = async (params) => {
  const { data } = await axios.get(`/newsletters?${params}`, {
    headers: headers,
  });
  return data;
};

/* 모든 뉴스레터 브랜드 조회 : 둘러보기(비회원) */
export const newsletterAllUnAuth = async (params) => {
  const { data } = await axios.get(`/newsletters?${params}`);
  return data;
};

/* 뉴스레터 브랜드 조회 (회원) */
export const articleRead = async (params) => {
  const { data } = await axios.get(`/articles/${params}`, {
    headers: headers,
  });
  return data;
};
