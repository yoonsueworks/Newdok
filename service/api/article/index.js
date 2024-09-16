import axios from "../../axios";
import LocalStorage from "public/utils/LocalStorage";

const token = LocalStorage.getItem("NDtoken");

const headers = {
  Authorization: `Bearer ${token}`,
  "Content-Type": "application/json",
};

/* 월별 아티클 조회 */
export const articles = async (params) => {
  await axios.get(
    `/articles?year=${params.year}&publicationMonth=${params.month}`
  );
};

/* 아티클 읽기 */
export const articleIdRead = async (params) => {
  await axios.get(`/articles/${params}`);
};

/* 북마크함 관심사 태그 조회 */
export const getBookmarkInterest = async () => {
  const { data } = await axios.get("/articles/bookmark/interest", {
    headers: headers,
  });
  return data;
};

/* 북마크한 뉴스레터 조회 */
export const getBookmarkList = async (params) => {
  const { data } = await axios.get(`/articles/bookmark/${params}`, {
    headers: headers,
  });
  return data;
};
