import { useState } from "react";

const UserHistoryButton = ({ setProcess }) => {
  const [service, setService] = useState(false);

  return (
    <>
      <div className="flex justify-between gap-x-8 py-3.5 text-neutralgray-900 items-center">
        <span className="block">
          탈퇴 후 등록된 정보는 모두 삭제되어 복구할 수 없음에 동의합니다.
        </span>
        <input
          type="checkbox"
          checked={service}
          id="check3"
          onChange={() => setService((prev) => !prev)}
        />
        <label id="check3" htmlFor="check3"></label>
      </div>
      <button
        type="submit"
        className="w-full h-fit p-5 rounded-2xl bg-purple-700 single-24-b text-white active:bg-purple-800 hover:bg-purple-500 transition-colors duration-300 disabled:bg-neutralgray-500"
        disabled={!service}
        onClick={() => setProcess((prev) => prev + 1)}
      >
        다음
      </button>
    </>
  );
};

export default UserHistoryButton;
