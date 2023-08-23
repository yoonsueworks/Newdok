import { useState } from "react";
import { useRouter } from "next/router";

import Password from "components/pages/findAccount/pswd";
import Id from "components/pages/findAccount/id";
import AppBar from "shared/AppBar";

const FindAccount = () => {
  const [clickedTab, setClickedTab] = useState(1);
  const router = useRouter();
  return (
    <div className="h-screen">
      <AppBar
        iconl={true}
        shadow={true}
        textl="ID/FW 찾기"
        iconr={false}
        func={() => router.push("/login")}
      />
      <div className="w-full h-fit flex justify-between">
        {Buttons.map(({ id, name }) => {
          return (
            <button
              key={id}
              type="button"
              className={`px-3.5 py-5 w-full h-fit ${
                clickedTab === id
                  ? "border-b-2 border-purple-700 text-purple-700 single-20-b"
                  : "text-neutralgray-900 single-20-m"
              }`}
              onClick={() => setClickedTab(id)}
            >
              {name}
            </button>
          );
        })}
      </div>
      <div className="h-full py-14 px-5 flex flex-col bg-beige-100">
        {Components[clickedTab - 1].comp}
      </div>
    </div>
  );
};

export default FindAccount;

const Buttons = [
  { id: 1, name: "아이디 찾기" },
  { id: 2, name: "비밀번호 찾기" },
];
const Components = [
  { id: 1, comp: <Id /> },
  { id: 2, comp: <Password /> },
];
