import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import AppBar from "shared/AppBar";

import { NotionRenderer } from "react-notion";

export async function getServerSideProps() {
  const data = await fetch(
    "https://notion-api.splitbee.io/v1/page/82ef5aea46d84623b7b19bb951b6043c?pvs=4"
  ).then((res) => res.json());

  return {
    props: {
      blockMap: data,
    },
  };
}

const Privacy = ({ blockMap }) => (
  <>
    <div className="xl:w-full md:w-full md:flex md:flex-col">
      <div className="relative w-full">
        <div className="absolute w-full">
          <AppBar
            iconl={true}
            shadow={true}
            textl="개인정보 처리방침"
            iconr={false}
            func={() => history.back()}
          />
        </div>
      </div>
      <div className="w-full h-full overflow-scroll p-5 pt-24">
        <NotionRenderer blockMap={blockMap} />
      </div>
    </div>
  </>
);

export default Privacy;
