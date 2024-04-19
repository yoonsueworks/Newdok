import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import AppBar from "shared/AppBar";

import { NotionRenderer } from "react-notion";

export async function getServerSideProps() {
  const data = await fetch(
    "https://notion-api.splitbee.io/v1/page/18aacf9713bc427a850ae8da92b69087?pvs=4"
  ).then((res) => res.json());

  return {
    props: {
      blockMap: data,
    },
  };
}

const Term = ({ blockMap }) => (
  <div className="xl:w-full md:w-full md:flex md:flex-col">
    <div className="relative w-full">
      <div className="absolute w-full">
        <AppBar
          iconl={true}
          shadow={true}
          textl="서비스 이용 약관"
          iconr={false}
          func={() => history.back()}
        />
      </div>
    </div>
    <div className="w-full h-full overflow-scroll p-5 pt-24">
      <NotionRenderer blockMap={blockMap} />
    </div>
  </div>
);

export default Term;
