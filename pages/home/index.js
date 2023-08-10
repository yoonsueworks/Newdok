import { useEffect, useState, useContext } from "react";
import { CalendarContext } from "context/CalendarContext";

import Articles from "components/pages/home/Articles";
import ReactCalendar from "components/pages/home/Calendar";
import ToolBar from "components/pages/home/ToolBar";

const Home = () => {
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [dateLocaleKr, setDateLocaleKr] = useState("");
  const [activeDate, setActiveDate] = useState("");
  const [fullActiveDate, setFullActiveDate] = useState("");

  const calendarContextValues = {
    setCalendarOpen: setCalendarOpen,
    calendarOpen: calendarOpen,
    dateLocaleKr: dateLocaleKr,
    setDateLocaleKr: setDateLocaleKr,
    activeDate: activeDate,
    setActiveDate: setActiveDate,
    fullActiveDate: fullActiveDate,
    setFullActiveDate: setFullActiveDate,

    monthlyArticles: [
      {
        id: 1,
        articles: [
          {
            id: 1,
            name: "머니레터",
            image_src: "",
            title: "A-Z, 시민단체 보조금 논란 ",
            html: HTML.replace(/"/g, '"').replace(/\n/g, "\n"),
            read: true,
          },
          // 읽음 안읽음 상태, 아티클 클릭 시 읽음 post요청 보내기
        ],
      },
      {
        id: 5,
        articles: [
          {
            id: 1,
            name: "머니레터",
            image_src: "",
            title: "A-Z, 시민단체 보조금 논란 ",
            html: HTML.replace(/"/g, '"').replace(/\n/g, "\n"),
            read: true,
          },
          {
            id: 1,
            name: "머니레터",
            image_src: "",
            title: "A-Z, 시민단체 보조금 논란 ",
            html: HTML.replace(/"/g, '"').replace(/\n/g, "\n"),
            read: true,
          },
          {
            id: 1,
            name: "머니레터",
            image_src: "",
            title: "A-Z, 시민단체 보조금 논란 ",
            html: HTML.replace(/"/g, '"').replace(/\n/g, "\n"),
            read: true,
          },
          {
            id: 1,
            name: "머니레터",
            image_src: "",
            title: "A-Z, 시민단체 보조금 논란 ",
            html: HTML.replace(/"/g, '"').replace(/\n/g, "\n"),
            read: true,
          },
          {
            id: 1,
            name: "머니레터",
            image_src: "",
            title: "A-Z, 시민단체 보조금 논란 ",
            html: HTML.replace(/"/g, '"').replace(/\n/g, "\n"),
            read: true,
          },
          {
            id: 1,
            name: "머니레터",
            image_src: "",
            title: "A-Z, 시민단체 보조금 논란 ",
            html: HTML.replace(/"/g, '"').replace(/\n/g, "\n"),
            read: true,
          },
          {
            id: 1,
            name: "머니레터",
            image_src: "",
            title: "A-Z, 시민단체 보조금 논란 ",
            html: HTML.replace(/"/g, '"').replace(/\n/g, "\n"),
            read: true,
          },
          {
            id: 1,
            name: "머니레터",
            image_src: "",
            title: "A-Z, 시민단체 보조금 논란 ",
            html: HTML.replace(/"/g, '"').replace(/\n/g, "\n"),
            read: true,
          },
          {
            id: 1,
            name: "머니레터",
            image_src: "",
            title: "A-Z, 시민단체 보조금 논란 ",
            html: HTML.replace(/"/g, '"').replace(/\n/g, "\n"),
            read: true,
          },
          // 읽음 안읽음 상태, 아티클 클릭 시 읽음 post요청 보내기
        ],
      },
      { id: 2, articles: ["hello1", "hello1"] },
    ],
  };

  useEffect(() => {
    const currentDate = new Date().toLocaleDateString(undefined, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setDateLocaleKr(currentDate);
    setActiveDate(new Date().getDate());
  }, []);

  //TODO: getServerSiceProps 로 monthlyArticles 받아오기

  return (
    <>
      <CalendarContext.Provider value={calendarContextValues}>
        <div className="h-full w-full flex flex-col overflow-auto">
          <ToolBar />
          <div className="relative">{calendarOpen && <ReactCalendar />}</div>
          <Articles />
        </div>
      </CalendarContext.Provider>
    </>
  );
};

export default Home;

const HTML = `<!DOCTYPE html>
<html>
  <img
    src="https://event.stibee.com/v2/open/NDczNDMvMjEzMjQyLzk2MDE3Lw"
    width="0"
    height="0"
    style="
      height: 0px;
      max-height: 0px;
      border-width: 0px;
      border-color: initial;
      line-height: 0px;
      font-size: 0px;
      overflow: hidden;
    "
  /><head>
    <meta
      content="width=device-width, initial-scale=1, maximum-scale=1"
      name="viewport"
    />
    <meta charset="UTF-8" />
    <style>
      @media only screen and (max-width: 640px) {
        .stb-container {
        }
        .stb-left-cell,
        .stb-right-cell {
          max-width: 100% !important;
          width: 100% !important;
          box-sizing: border-box;
        }
        .stb-image-box td {
          text-align: center;
        }
        .stb-image-box td img {
          width: 100%;
        }
        .stb-block {
          width: 100% !important;
        }
        table.stb-cell {
          width: 100% !important;
        }
        .stb-cell td,
        .stb-left-cell td,
        .stb-right-cell td {
          width: 100% !important;
        }
        img.stb-justify {
          width: 100% !important;
        }
      }
      .stb-left-cell p,
      .stb-right-cell p {
        margin: 0 !important;
      }
      .stb-container table.munged {
        width: 100% !important;
        table-layout: auto !important;
      }
      .stb-container td.munged {
        width: 100% !important;
        white-space: normal !important;
      }
    </style>
  </head>
  <body style="width: 100%; background-color: #ffffff; margin: 0px">
    <div
      class="stb-container-full"
      style="
        width: 100%;
        padding: 40px 0;
        background-color: #ffffff;
        margin: 0 auto;
        display: block;
      "
    >
      <table
        class="stb-container stb-option-normal"
        cellpadding="0"
        cellspacing="0"
        border="0"
        bordercolor=""
        align="center"
        style="
          margin: 0px auto;
          width: 94%;
          max-width: 630px;
          background: #ffffff;
          border-width: 0;
          border: 0;
          border-style: solid;
          box-sizing: border-box;
        "
      >
        <tbody>
          <tr style="margin: 0; padding: 0">
            <td
              style="
                width: 100%;
                max-width: 630px;
                margin: 0 auto;
                position: relative;
                border-spacing: 0;
                border: 0;
                clear: both;
                border-collapse: separate;
                padding: 0;
                overflow: hidden;
                _width: 630px;
                background: #ffffff;
              "
            >
              <div
                style="
                  height: 0px;
                  max-height: 0px;
                  border-width: 0px;
                  border: 0px;
                  border-color: initial;
                  border-image: initial;
                  visibility: hidden;
                  line-height: 0px;
                  font-size: 0px;
                  overflow: hidden;
                  display: none;
                "
              ></div>
              <div class="stb-block-outer">
                <table
                  class="stb-block stb-cols-1"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  style="
                    overflow: hidden;
                    margin: 0px auto;
                    padding: 0px;
                    width: 100%;
                    max-width: 630px;
                    clear: both;
                    line-height: 1.7;
                    border-width: 0px;
                    border: 0px;
                    font-size: 14px;
                    border: 0;
                    box-sizing: border-box;
                  "
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          class="stb-cell-wrap"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                        >
                          <tbody>
                            <tr>
                              <td style="text-align: center; font-size: 0">
                                <div
                                  class="stb-left-cell"
                                  style="
                                    max-width: 630px;
                                    width: 100% !important;
                                    margin: 0;
                                    vertical-align: top;
                                    border-collapse: collapse;
                                    box-sizing: border-box;
                                    font-size: unset;
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    -ms-text-size-adjust: 100%;
                                    -webkit-text-size-adjust: 100%;
                                    display: inline-block;
                                  "
                                >
                                  <div
                                    class="stb-image-box"
                                    style="
                                      text-align: justify;
                                      margin: 0px;
                                      width: 100%;
                                      box-sizing: border-box;
                                      clear: both;
                                    "
                                  >
                                    <table
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      style="width: 100%"
                                      aling="center"
                                    >
                                      <tbody>
                                        <tr>
                                          <td
                                            style="
                                              padding: 25px 0 25px 0;
                                              text-align: justify;
                                              font-size: 0;
                                              border: 0;
                                              line-height: 0;
                                              width: 100%;
                                              box-sizing: border-box;
                                            "
                                          >
                                            <img
                                              src="https://img.stibee.com/20221_1608387771.jpg"
                                              style="
                                                width: 100%;
                                                display: inline;
                                                vertical-align: middle;
                                                text-align: justify;
                                                max-width: 100%;
                                                height: auto;
                                                border: 0;
                                              "
                                              width="630"
                                              class="stb-justify"
                                            />
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="stb-block-outer">
                <table
                  class="stb-block stb-cols-1"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  style="
                    overflow: hidden;
                    margin: 0px auto;
                    padding: 0px;
                    width: 100%;
                    max-width: 630px;
                    clear: both;
                    line-height: 1.7;
                    border-width: 0px;
                    border: 0px;
                    font-size: 14px;
                    border: 0;
                    box-sizing: border-box;
                  "
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          class="stb-cell-wrap"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                        >
                          <tbody>
                            <tr>
                              <td style="text-align: center; font-size: 0">
                                <div
                                  class="stb-left-cell"
                                  style="
                                    max-width: 630px;
                                    width: 100% !important;
                                    margin: 0;
                                    vertical-align: top;
                                    border-collapse: collapse;
                                    box-sizing: border-box;
                                    font-size: unset;
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    -ms-text-size-adjust: 100%;
                                    -webkit-text-size-adjust: 100%;
                                    display: inline-block;
                                  "
                                >
                                  <div
                                    class="stb-image-box"
                                    style="
                                      text-align: justify;
                                      margin: 0px;
                                      width: 100%;
                                      box-sizing: border-box;
                                      clear: both;
                                    "
                                  >
                                    <table
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      style="width: 100%"
                                      aling="center"
                                    >
                                      <tbody>
                                        <tr>
                                          <td
                                            style="
                                              padding: 25px 0 0px 0;
                                              text-align: justify;
                                              font-size: 0;
                                              border: 0;
                                              line-height: 0;
                                              width: 100%;
                                              box-sizing: border-box;
                                            "
                                          >
                                            <img
                                              src="https://img.stibee.com/20221_1608387783.jpg"
                                              style="
                                                width: 100%;
                                                display: inline;
                                                vertical-align: middle;
                                                text-align: justify;
                                                max-width: 100%;
                                                height: auto;
                                                border: 0;
                                              "
                                              width="630"
                                              class="stb-justify"
                                            />
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="stb-block-outer">
                <table
                  class="stb-block stb-cols-1"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  style="
                    overflow: hidden;
                    margin: 0px auto;
                    padding: 0px;
                    width: 100%;
                    max-width: 630px;
                    clear: both;
                    line-height: 1.7;
                    border-width: 0px;
                    border: 0px;
                    font-size: 14px;
                    border: 0;
                    box-sizing: border-box;
                  "
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          class="stb-cell-wrap"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                        >
                          <tbody>
                            <tr>
                              <td style="text-align: center; font-size: 0">
                                <div
                                  class="stb-left-cell"
                                  style="
                                    max-width: 630px;
                                    width: 100% !important;
                                    margin: 0;
                                    vertical-align: top;
                                    border-collapse: collapse;
                                    box-sizing: border-box;
                                    font-size: unset;
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    -ms-text-size-adjust: 100%;
                                    -webkit-text-size-adjust: 100%;
                                    display: inline-block;
                                  "
                                >
                                  <div
                                    class="stb-text-box"
                                    style="
                                      text-align: left;
                                      margin: 0px;
                                      line-height: 1.7;
                                      word-break: break-word;
                                      font-size: 14px;
                                      font-family: AppleSDGothic,
                                        apple sd gothic neo, noto sans korean,
                                        noto sans korean regular,
                                        noto sans cjk kr, noto sans cjk,
                                        nanum gothic, malgun gothic, dotum,
                                        arial, helvetica, MS Gothic, sans-serif !important;
                                      -ms-text-size-adjust: 100%;
                                      -webkit-text-size-adjust: 100%;
                                      color: #333333;
                                      clear: both;
                                      border: 0;
                                      mso-line-height-rule-rule: exactly;
                                    "
                                  >
                                    <table
                                      class="stb-text-box-inner"
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      style="width: 100%"
                                    >
                                      <tbody>
                                        <tr>
                                          <td
                                            style="
                                              padding: 15px 0 15px 0;
                                              font-size: 14px;
                                              line-height: 1.7;
                                              word-break: break-word;
                                              color: #333333;
                                              border: 0;
                                              font-family: AppleSDGothic,
                                                apple sd gothic neo,
                                                noto sans korean,
                                                noto sans korean regular,
                                                noto sans cjk kr, noto sans cjk,
                                                nanum gothic, malgun gothic,
                                                dotum, arial, helvetica,
                                                MS Gothic, sans-serif !important;
                                              -ms-text-size-adjust: 100%;
                                              -webkit-text-size-adjust: 100%;
                                              width: 100%;
                                            "
                                          >
                                            <div>
                                              <span
                                                style="
                                                  font-size: 14px;
                                                  color: #000000;
                                                "
                                                >안녕하세요<span lang="EN-US"
                                                  >, 김재영</span
                                                >님<span lang="EN-US"
                                                  >.&nbsp;</span
                                                ></span
                                              >
                                            </div>
                                            <div>
                                              <span
                                                style="
                                                  font-size: 14px;
                                                  color: #000000;
                                                "
                                                >부딩 뉴스레터를 만드는
                                                이영균입니다<span lang="EN-US"
                                                  >.&nbsp;</span
                                                >부딩은 어려운 용어 때문에<span
                                                  lang="EN-US"
                                                  >&nbsp;</span
                                                >부동산 기사와는<span
                                                  lang="EN-US"
                                                  >&nbsp;</span
                                                >담쌓고 지낸 이들<span
                                                  lang="EN-US"
                                                  >,&nbsp;</span
                                                >당장의 세입자와 실수요자를 위해
                                                탄생했습니다<span lang="EN-US"
                                                  >. 2020년</span
                                                ></span
                                              ><span style="color: #000000">
                                                2월 100여 명에게 부동산 뉴스를
                                                보내기 시작한 부딩은 2023년 1월
                                                기준 매주 7만여 명의 구독자에게
                                                부동산 소식을 전하는 서비스가
                                                되었습니다.&nbsp;</span
                                              >
                                            </div>
                                            <div><br /></div>
                                            <div>
                                              <span
                                                style="
                                                  font-size: 14px;
                                                  color: #000000;
                                                "
                                                >최근 전통 매체부터 블로그<span
                                                  lang="EN-US"
                                                  >,&nbsp;</span
                                                >카페<span lang="EN-US"
                                                  >,&nbsp;</span
                                                >유튜브 등을 통해 하루에도 수백
                                                개의 부동산 콘텐츠가 쏟아지는
                                                것을 목격합니다<span
                                                  lang="EN-US"
                                                  >.&nbsp;</span
                                                >하지만 그 안에서도 사회
                                                초년생이나 결혼을 앞둔 이<span
                                                  lang="EN-US"
                                                  >,&nbsp;</span
                                                >첫아이를 낳고 내 집 마련을
                                                계획하는 밀레니얼이 활용할 수
                                                있는 부동산 정보는 한정되어
                                                있음을 느낍니다<span
                                                  lang="EN-US"
                                                  >.&nbsp;</span
                                                ></span
                                              >
                                            </div>
                                            <div><br /></div>
                                            <div>
                                              <span style="color: #000000"
                                                ><span style="font-size: 14px"
                                                  >우리는 부동산에서 태어나
                                                  부동산에서 살고 부동산에서
                                                  죽습니다. 하지만&nbsp;</span
                                                >우리가 아는 부동산 정보는
                                                우리가 잘 모르는 것에 비하면
                                                빙산의 일각에 불과합니다<span
                                                  lang="EN-US"
                                                  >.&nbsp;</span
                                                >하물며 우리가 모르면서 모르는
                                                줄도 모르는 부동산 정보는 얼마나
                                                많을까요?</span
                                              >
                                            </div>
                                            <div><br /></div>
                                            <div>
                                              <span
                                                style="
                                                  font-size: 14px;
                                                  color: #000000;
                                                "
                                                >경제학자 앨런 그린스펀은<span
                                                  lang="EN-US"
                                                  >&nbsp;“</span
                                                >문맹은 생활을 불편하게
                                                하지만<span lang="EN-US"
                                                  >,&nbsp;</span
                                                >금융 문맹은 생존을 불가능하게
                                                한다<span lang="EN-US">”</span
                                                >고 말했습니다<span lang="EN-US"
                                                  >.&nbsp;</span
                                                >이는 우리가 꼭 습득해야 하는
                                                글자보다 돈에 관한 지식을 쌓는
                                                게 더 중요하다고 알려줍니다<span
                                                  lang="EN-US"
                                                  >.&nbsp;</span
                                                >부동산은 움직이지 않는
                                                자산입니다<span lang="EN-US"
                                                  >.&nbsp;</span
                                                >동시에 우리 삶의
                                                생필품입니다<span lang="EN-US"
                                                  >.&nbsp;</span
                                                >그래서 반드시 알아야
                                                합니다<span lang="EN-US"
                                                  >.&nbsp;</span
                                                >평생 관심 가져야 합니다<span
                                                  lang="EN-US"
                                                  >.&nbsp;</span
                                                >왜냐고요<span lang="EN-US"
                                                  >?&nbsp;</span
                                                >누구나<span lang="EN-US"
                                                  >&nbsp;‘</span
                                                >집<span lang="EN-US">’</span>에
                                                살아야 하니까요<span
                                                  lang="EN-US"
                                                  >.</span
                                                ></span
                                              >
                                            </div>
                                            <div><br /></div>
                                            <div>
                                              <span
                                                style="
                                                  font-size: 14px;
                                                  font-family: AppleSDGothic,
                                                    'apple sd gothic neo',
                                                    'noto sans korean',
                                                    'noto sans korean regular',
                                                    'noto sans cjk kr',
                                                    'noto sans cjk',
                                                    'nanum gothic',
                                                    'malgun gothic', dotum,
                                                    arial, helvetica, MS Gothic,
                                                    sans-serif;
                                                  color: #000000;
                                                  font-weight: 400;
                                                  font-style: normal;
                                                  text-decoration: none;
                                                "
                                                >부딩은 앞으로 밀레니얼이 알아야
                                                하는 부동산 정보를 정확히 캐치해
                                                발신하려고 합니다<span
                                                  lang="EN-US"
                                                  >. </span
                                                >꼭 필요한 콘텐츠를 매주 화<span
                                                  style="
                                                    font-family: AppleSDGothic,
                                                      'apple sd gothic neo',
                                                      'noto sans korean',
                                                      'noto sans korean regular',
                                                      'noto sans cjk kr',
                                                      'noto sans cjk',
                                                      'nanum gothic',
                                                      'malgun gothic', dotum,
                                                      arial, helvetica,
                                                      MS Gothic, sans-serif;
                                                    font-style: normal;
                                                  "
                                                  >·금</span
                                                ><span
                                                  style="
                                                    font-family: AppleSDGothic,
                                                      'apple sd gothic neo',
                                                      'noto sans korean',
                                                      'noto sans korean regular',
                                                      'noto sans cjk kr',
                                                      'noto sans cjk',
                                                      'nanum gothic',
                                                      'malgun gothic', dotum,
                                                      arial, helvetica,
                                                      MS Gothic, sans-serif;
                                                    font-style: normal;
                                                  "
                                                  >요일 아침에&nbsp;</span
                                                >지루하지 않게
                                                소개하겠습니다<span lang="EN-US"
                                                  >.&nbsp;</span
                                                >그러니 앞으로 부딩 뉴스레터
                                                기대해주세요<span lang="EN-US"
                                                  >.</span
                                                ></span
                                              >
                                            </div>
                                            <div><br /></div>
                                            <div style="font-size: 14px">
                                              <span style="color: #000000"
                                                >덧붙여 부딩은 기존 뉴스레터에
                                                전문가 상담 칼럼 등을 추가한 </span
                                              >‘<span style="color: #000000"
                                                >부딩 플러스</span
                                              >’<span style="color: #000000"
                                                >를 운영하고 있습니다. </span
                                              ><span style="color: #000000"
                                                ><span
                                                  style="
                                                    font-size: 14px;
                                                    font-family: AppleSDGothic,
                                                      'apple sd gothic neo',
                                                      'noto sans korean',
                                                      'noto sans korean regular',
                                                      'noto sans cjk kr',
                                                      'noto sans cjk',
                                                      'nanum gothic',
                                                      'malgun gothic', dotum,
                                                      arial, helvetica,
                                                      MS Gothic, sans-serif;
                                                    color: #000000;
                                                    font-weight: 400;
                                                    font-style: normal;
                                                    text-decoration: none;
                                                  "
                                                  >부딩 플러스엔 </span
                                                >넉넉지 않은 내 자금 사정을
                                                고려해 최적의 집을 콕 집어주는
                                                컨설팅 칼럼과 시장의 주요 화두에
                                                대해 쓰는 전문가 칼럼, 1인주거
                                                에세이 등 밀레니얼과 실수요자의
                                                눈높이에 맞춘 부동산 정보가
                                                가득합니다. </span
                                              ><span style="color: #000000"
                                                >이 또한 </span
                                              ><span style="color: #000000"
                                                >많은 관심 바랍니다.</span
                                              >
                                            </div>
                                            <div style="font-size: 14px">
                                              <div style="font-size: 14px">
                                                <br />
                                              </div>
                                            </div>
                                            <div><br /></div>
                                            <div>
                                              <span
                                                style="color: #000000"
                                                class="stb-fore-colored"
                                                >감사합니다.</span
                                              >
                                            </div>
                                            <div><br /></div>
                                            <div>
                                              <span
                                                style="color: #000000"
                                                class="stb-fore-colored"
                                                >부딩&nbsp;이영균 드림<br
                                              /></span>
                                            </div>
                                            <div><br /></div>
                                            <div>--</div>
                                            <div><br /></div>
                                            <div>
                                              <span
                                                style="
                                                  font-size: 14px;
                                                  color: #000000;
                                                "
                                                ><a
                                                  href="https://event.stibee.com/v2/click/NDczNDMvMjEzMjQyLzk2MDE3Lw/aHR0cDovL2Jvb2RpbmcuY28v"
                                                  target="_blank"
                                                  style="
                                                    text-decoration: underline;
                                                    color: rgb(0, 0, 0);
                                                    font-weight: normal;
                                                  "
                                                  class="link-edited stb-underline"
                                                  rel="noopener"
                                                  >bood</a
                                                ><a
                                                  href="https://event.stibee.com/v2/click/NDczNDMvMjEzMjQyLzk2MDE3Lw/aHR0cDovL2Jvb2RpbmcuY28v"
                                                  target="_blank"
                                                  style="
                                                    color: rgb(0, 0, 0);
                                                    font-weight: normal;
                                                    text-decoration: none;
                                                  "
                                                  class="link-edited"
                                                  rel="noopener"
                                                  >ing.co</a
                                                >&nbsp;<a
                                                  href="https://event.stibee.com/v2/click/NDczNDMvMjEzMjQyLzk2MDE3Lw/aHR0cHM6Ly93d3cuYm9vZGluZy5jby8"
                                                  style="
                                                    font-style: normal;
                                                    text-decoration: none;
                                                    color: rgb(0, 0, 0);
                                                    font-weight: normal;
                                                  "
                                                  class="link-edited"
                                                  target="_blank"
                                                  >홈페이지(클릭)</a
                                                ><br
                                              /></span>
                                            </div>
                                            <div><br /></div>
                                            <div>
                                              <span style="color: #000000"
                                                >@booding.co
                                                <a
                                                  href="https://event.stibee.com/v2/click/NDczNDMvMjEzMjQyLzk2MDE3Lw/aHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9ib29kaW5nLmNvLw"
                                                  class="link-edited"
                                                  style="
                                                    text-decoration: none;
                                                    color: rgb(0, 0, 0);
                                                    font-weight: normal;
                                                  "
                                                  target="_blank"
                                                  >인스타그램(클릭)</a
                                                ><br
                                              /></span>
                                            </div>
                                            <div><br /></div>
                                            <div>
                                              <span style="color: #000000"
                                                >www.booding.co/blog&nbsp;</span
                                              ><a
                                                href="https://event.stibee.com/v2/click/NDczNDMvMjEzMjQyLzk2MDE3Lw/aHR0cHM6Ly93d3cuYm9vZGluZy5jby9ibG9n"
                                                style="
                                                  font-style: normal;
                                                  text-decoration: none;
                                                  color: rgb(0, 0, 0);
                                                  font-weight: normal;
                                                "
                                                class="link-edited"
                                                target="_blank"
                                                >이전 레터 보기(클릭)</a
                                              ><span style="color: #000000"
                                                >&nbsp;</span
                                              >
                                            </div>
                                            <div><br /></div>
                                            <div>
                                              <span style="color: #000000"
                                                >https://contents.premium.naver.com/booding/home </span
                                              ><span
                                                style="
                                                  font-weight: normal;
                                                  font-style: normal;
                                                  text-decoration: none;
                                                  color: #0000ff;
                                                "
                                                ><a
                                                  href="https://event.stibee.com/v2/click/NDczNDMvMjEzMjQyLzk2MDE3Lw/aHR0cHM6Ly9jb250ZW50cy5wcmVtaXVtLm5hdmVyLmNvbS9ib29kaW5nL2hvbWU"
                                                  style="
                                                    font-style: normal;
                                                    text-decoration: none;
                                                    color: rgb(0, 0, 0);
                                                    font-weight: normal;
                                                  "
                                                  class="link-edited"
                                                  target="_blank"
                                                  >부딩 플러스(클릭)</a
                                                ></span
                                              ><span style="font-size: 12px"
                                                >&nbsp;</span
                                              >
                                            </div>
                                            <div><br /></div>
                                            <div><br /></div>
                                            <div><br /></div>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </body>
</html>
`;
