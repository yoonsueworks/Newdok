import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../_app";
import Lists from "../../../components/Lists";
import API from "../../../config";

export default function Industry() {
  const [selectedIndustry, setSelectedIndustry] = useState(1);
  const [list, setList] = useState(INITIAL_DATA);
  const [fetchedList, setFetchedList] = useState([]);
  const value = useContext(GlobalContext);
  const { industry } = value;

  const sharedCSS =
    "w-max h-full flex inline-block text-center self-center items-center px-4 rounded-[10px] title";

  const clickedCSS = `bg-purple-700 text-white break-keep`;
  const unClickedCSS =
    "bg-white text-purple-700 border border-1 border-solid border-purple-700 overscroll-auto";

  const preventRequest = (id, arr) => {
    fetchLists && setFetchedList((prevList) => ({ ...prevList, [id]: arr }));
  };

  const checkFetchedList = (id) => {
    return Object.keys(fetchedList).includes(String(id));
  };

  const setExistingList = (id) => {
    if (checkFetchedList(id)) {
      const list = fetchedList[id];
      setList(list);
    }
  };

  const fetchLists = (id) => {
    setSelectedIndustry(id);
    if (!checkFetchedList(id)) {
      fetch(`${API.industry}${id}`)
        .then((res) => res.json())
        .then((res) => {
          setList(res);
          preventRequest(id, res);
        });
    } else {
      setExistingList(id);
    }
  };

  useEffect(() => {
    fetchLists(1);
  }, []);

  return (
    <div className="h-full bg-beige-100 grid gap-y-5">
      <ul className="pl-5 h-[44px] flex gap-x-2 overflow-auto">
        <li
          id="1"
          className={`${sharedCSS} ${
            selectedIndustry === 1 ? clickedCSS : unClickedCSS
          }`}
          onClick={() => fetchLists("1")}
        >
          <div className="w-max overflow-wrap-break-word">모든 산업</div>
        </li>
        {industry.map((ind) => {
          return (
            <li
              id={ind.id}
              key={ind.id}
              className={`${sharedCSS} ${
                selectedIndustry === ind.id ? clickedCSS : unClickedCSS
              }`}
              onClick={() => fetchLists(ind.id)}
            >
              <div className="w-max overflow-wrap-break-word">{ind.name}</div>
            </li>
          );
        })}
      </ul>
      <Lists datas={list} />
    </div>
  );
}

const INITIAL_DATA = [
  {
    id: 1,
    name: "NEWNEEK",
    first_description: "핵심만 꾹꾹 눌러 담은  세상 돌아가는 이야기",
    second_description: "세상 돌아가는 소식, 뉴닉으로!",
    detail_description:
      "세상 돌아가는 소식은 궁금한데, 시간이 없다고요? <뉴닉>은 신문 볼 새 없이 바쁘지만, 세상과의 연결고리는 튼튼하게 유지하고 싶은 여러분들을 위해 세상 돌아가는 소식을 모두 담아 간단하게 정리해드려요.",
    publication_cycle: "매주 평일 아침",
    subscribe_url: "https://newneek.co/",
    preview_url:
      "https://stibee.com/api/v1.0/emails/share/suUTgJDMeeHmTsd35csnstQ23SYohM8=",
    image_url:
      "https://pincock.shop/public/2ec56c2a-1153-45fd-81e3-28aaa19e8638.png",
    createdAt: "2023-05-25T00:46:04.072Z",
    updatedAt: "2023-05-26T00:34:36.573Z",
    industries: [
      { id: 1, name: "모든 산업" },
      { id: 16, name: "기타" },
    ],
    interests: [
      { id: 1, name: "경제・시사・상식" },
      { id: 2, name: "비즈니스" },
      { id: 8, name: "취미・자기계발" },
      { id: 4, name: "트렌드" },
    ],
  },
  {
    id: 2,
    name: "Daily Byte",
    first_description:
      "꼭 알아야 할 비즈니스・경제 이슈, 데일리바이트에서 핵심만 쉽게",
    second_description: "가장 쉽고 똑똑한 비즈니스 뉴스 읽기",
    detail_description:
      "어려운 용어 때문에 뉴스 읽기가 어려웠다구요? <데일리바이트>는 핵심적인 개념을 해설하여, 꼭 알아야 할 비즈니스 뉴스를 큐레이션해요! 매일 10분, 테크, 스타트업, 인기 컨텐츠 등 가장 최신 비즈니스 트렌드로 인사이트를 채워봐요!",
    publication_cycle: "매주 평일 오전 6시",
    subscribe_url: "https://page.stibee.com/subscriptions/81111",
    preview_url:
      "https://stibee.com/api/v1.0/emails/share/CCU1y-6y_MxNfBlCyI8GkbcmHiHpb0E=",
    image_url:
      "https://pincock.shop/public/2ec56c2a-1153-45fd-81e3-28aaa19e8638.png",
    createdAt: "2023-05-25T00:46:04.072Z",
    updatedAt: "2023-05-26T00:34:36.573Z",
    industries: [
      { id: 1, name: "모든 산업" },
      { id: 16, name: "기타" },
    ],
    interests: [
      { id: 1, name: "경제・시사・상식" },
      { id: 2, name: "비즈니스" },
      { id: 8, name: "취미・자기계발" },
      { id: 4, name: "트렌드" },
    ],
  },
  {
    id: 20,
    name: "비잉10",
    first_description: "멘탈 스타일리스트가 챙겨주는  일잘러를 위한 마음가짐",
    second_description: "일잘러를 위한 마음 챙김 뉴스레터",
    detail_description:
      "<비잉10>은 출근길이 불안한 모두를 위해 무엇을 하는 것이 아닌 그냥 있는 10분을 함께 합니다. 일하는 마음에 다양한 색을 칠해보는 오늘의 컬러 명상, 마음 챙김 콘텐츠와 일 트렌드 아티클을 큐레이션 합니다.",
    publication_cycle: "격주 목요일 아침",
    subscribe_url: "https://being10.stibee.com/subscribe/",
    preview_url: "https://being10.stibee.com/p/54/",
    image_url:
      "https://pincock.shop/public/2ec56c2a-1153-45fd-81e3-28aaa19e8638.png",
    createdAt: "2023-05-25T01:21:14.128Z",
    updatedAt: "2023-05-26T00:34:36.573Z",
    industries: [
      { id: 1, name: "모든 산업" },
      { id: 16, name: "기타" },
    ],
    interests: [
      { id: 9, name: "건강・의학" },
      { id: 7, name: "라이프스타일" },
      { id: 10, name: "멘탈케어" },
      { id: 8, name: "취미・자기계발" },
    ],
  },
];
