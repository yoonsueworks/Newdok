import { useState } from "react";

import PasswordChild from "shared/PasswordChild";
import Background from "shared/Background";
import Button from "shared/Button";

import AppBar from "shared/AppBar";

const Pswd = () => {
  const [inputType, setInputType] = useState(false);
  // TODO: 기능구현

  return (
    <>
      <div className="relative w-full">
        <div className="absolute w-full">
          <AppBar
            iconl={true}
            shadow={true}
            textl="비밀번호 변경"
            iconr={false}
            func={() => history.back()}
          />
        </div>
      </div>
      <Background>
        <div className="w-full h-full flex flex-col justify-between pt-24 pb-14">
          <div className="flex flex-col gap-y-8 ">
            {/* 첫번째 input */}
            <div className="grid gap-y-2">
              <div className="single-14-m text-purple-700">현재 비밀번호</div>
              {/* <Input
              key="1"
              placeholder="현재 비밀번호 입력"
              name="passwordNow"
              child={
                <PasswordChild setInputType={setInputType} type={inputType} />
              }
              func={() => console.log("password edit function test")}
              isValid={false}
              type={inputType}
              error="현재 비밀번호가 일치하지 않아요."
            /> */}
            </div>
            {/* 두번째 input */}
            <div className="grid gap-y-2">
              <div className="single-14-m text-purple-700">새 비밀번호</div>
              {/* <Input
              key="1"
              placeholder="8자 이상, 영문/숫자 조합"
              name="passwordNow"
              child={
                <PasswordChild setInputType={setInputType} type={inputType} />
              }
              func={() => console.log("password edit function test")}
              isValid={false}
              type={inputType}
              error="영문/숫자 조합으로 구성해 주세요."
            /> */}
            </div>
            {/* 세번째 input */}
            <div className="grid gap-y-2">
              <div className="single-14-m text-purple-700">
                새 비밀번호 확인
              </div>
              {/* <Input
              key="1"
              placeholder="8자 이상, 영문/숫자 조합"
              name="passwordNow"
              child={
                <PasswordChild setInputType={setInputType} type={inputType} />
              }
              func={() => console.log("password edit function test")}
              isValid={false}
              type={inputType}
              error="비밀번호가 일치하지 않아요."
            /> */}
            </div>
          </div>
          <button
            type="submit"
            className="w-full h-fit p-5 rounded-2xl bg-purple-700 single-24-b text-white active:bg-purple-800 hover:bg-purple-500 transition-colors duration-300 disabled:bg-neutralgray-500"
            disabled=""
          >
            변경 하기
          </button>
        </div>
      </Background>
    </>
  );
};

export default Pswd;
