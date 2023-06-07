import React, { useEffect, useState } from "react";

const Index = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <button onClick={() => setClicked((prev) => !prev)}>열기</button>
      {clicked && (
        <iframe
          src="https://uppity.co.kr/moneyletter_archive"
          width="100%"
          height="600"
        ></iframe>
      )}
    </div>
  );
};

export default Index;
