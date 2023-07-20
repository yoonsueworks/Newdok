import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

import { NotionRenderer } from "react-notion";

export async function getStaticProps() {
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
  <div className="w-full h-full overflow-scroll p-5">
    <NotionRenderer blockMap={blockMap} />
  </div>
);

export default Privacy;
