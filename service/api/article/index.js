import axios from "axios";

/* 월별 아티클 조회 */
export const articles = async (params) => {
  await axios.get(
    `/articles?year=${params.year}&publicationMonth=${params.month}`
  );
};
// TODO: token 추가

/* 아티클 읽기 */
export const articleIdRead = async (params) => {
  await axios.get(`/articles/${params}`);
};
