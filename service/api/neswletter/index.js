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

/* 뉴스레터 브랜드 조회 */
export const newsletterBrand = async (params) => {
  await axios.get(`/newsletters/${params}`, {
    headers: { Authorization: token },
  });
};
// params = newletter brand id ( string )
// TODO: token

/* 모든 뉴스레터 브랜드 조회 : 둘러보기 */
export const newsletterAll = async (params) => {
  await axios.get(`/newsletters/${params}`);
};
// params = newletter brand id ( string )
