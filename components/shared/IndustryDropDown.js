import { useState, Fragment, useEffect, useRef, useContext } from "react";
import { useRouter } from "next/router";
import { GlobalContext } from "pages/_app";

import { useRecoilState } from "recoil";
import { userDatasAtom, userResearchAtom } from "service/atoms/atoms";

import { Listbox, Transition } from "@headlessui/react";
import { industries } from "constants/industries";
import ArrowIcon from "icons/ver1.0/arrow_down_off.svg";

export default function IndustryDropDown() {
  const [selected, setSelected] = useState(false);
  const [clickArea, setClickArea] = useState(false);
  const wrapperRef = useRef(null);
  const [userDatas, setUserDatas] = useRecoilState(userDatasAtom);
  const [userResearch, setUserResearch] = useRecoilState(userResearchAtom);
  const globalContextValue = useContext(GlobalContext);

  const router = useRouter();
  const selectedCSS = "text-neutralgray-900 bg-white";
  const labelCSS = "text-neutralgray-900";
  const borderCSS = clickArea
    ? "inputFocused-border"
    : !clickArea && !selected
    ? "shadow-[inset_0_0px_0px_1px_#E5E0DF]"
    : "input-border";
  const height = " h-64 sm:h-80 md:h-80 lg:h-80 xl:h-80";

  const addUserResearch = () => {
    selected && globalContextValue.setIsActivated(true);
    globalContextValue.setUserInfos({ industry: selected.id });
  };

  //   TODO: path에 따라 다르게 함수 작동시키기
  useEffect(() => {
    if (router.asPath.includes("userResearch")) {
      addUserResearch();
    } else {
      setUserResearch({ ...userResearch, industryId: selected.id });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  return (
    <div ref={wrapperRef} className="relative">
      <Listbox value={selected} onChange={setSelected}>
        <div className="grid">
          <Listbox.Button
            className={`z-10 text-left p-4 w-full text-base font-medium 
            ${clickArea ? "rounded-t-lg" : "rounded-lg"} 
            ${selectedCSS} 
            ${borderCSS}`}
            onClick={() => setClickArea((prev) => !prev)}
          >
            <Listbox.Label
              className={`flex justify-between items-center cursor-pointer 
              ${selected === false ? labelCSS : selectedCSS} `}
            >
              {userDatas.industryId && !selected
                ? industries[userDatas.industryId - 1].name
                : selected
                ? selected.name
                : "산업군 선택"}
              <ArrowIcon
                className={`${
                  clickArea ? "rotate-180" : ""
                } transition-transform duration-500`}
              />
            </Listbox.Label>
          </Listbox.Button>
          <Transition
            as={Listbox.Options}
            show={clickArea}
            enter="transition ease-out duration-200"
            enterFrom="transform -translate-y-10 opacity-0"
            enterTo="transform translate-y-0 opacity-100"
            leave="transition ease-in duration-200"
            leaveFrom="transform translate-y-0 opacity-100"
            leaveTo="transform -translate-y-10 opacity-0"
          >
            {clickArea && (
              <Listbox.Options
                id="onboardIndustryBox"
                className={`z-0 overflow-scroll cursor-pointer rounded-b-lg ${height} border-x-2 border-b-2 border-purple-200`}
              >
                {industries?.map((ind) => (
                  <Listbox.Option key={ind.id} value={ind} as={Fragment}>
                    {({ active }) => (
                      <li
                        className={`${
                          active
                            ? "text-neutralgray-900"
                            : "bg-white text-neutralgray-900"
                        } flex justify-between p-4 single-16-m font-medium transition-colors duration-120 hover:bg-purple-50 active:bg-purple-50`}
                        onClick={() => setClickArea(false)}
                      >
                        {ind.name}
                      </li>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            )}
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
