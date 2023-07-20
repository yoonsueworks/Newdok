import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

import { NotionRenderer } from "react-notion";

export async function getStaticProps() {
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
  <div className="w-full h-full overflow-scroll p-5">
    <NotionRenderer blockMap={blockMap} />
  </div>
);

export default Term;
