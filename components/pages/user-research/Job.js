import { useState, Fragment, useEffect, useRef, useContext } from "react";
import { GlobalContext } from "pages/_app";
import { Listbox } from "@headlessui/react";
import { industries } from "constants/industries";

export default function Job() {
  const [selected, setSelected] = useState(false);
  const [clickArea, setClickArea] = useState(false);
  const wrapperRef = useRef(null);

  const { handleProgressWithOption, setUserInfos, setIsActivated } =
    useContext(GlobalContext);

  const selectedCSS = "text-purple-700";
  const labelCSS = "text-warmgray-900";
  const borderCSS = clickArea
    ? "shadow-[inset_0_0px_0px_1px_#BF9ECE]"
    : !clickArea && !selected
    ? "shadow-[inset_0_0px_0px_1px_#E5E0DF]"
    : "shadow-[inset_0_0px_0px_1px_#674188]";
  const height = " h-64 sm:h-80 md:h-80 lg:h-80 xl:h-80";

  useEffect(() => {
    selected && handleProgressWithOption(2);
    selected && setIsActivated(true);
    setUserInfos({ industry: selected.id });
  }, [selected]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setClickArea(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={wrapperRef}>
      <Listbox value={selected} onChange={setSelected}>
        <div className="grid">
          <Listbox.Button
            className={`z-10 text-left p-4 w-full text-base font-medium 
            ${clickArea ? "rounded-t-lg" : "rounded-lg"} 
            ${selected ? "bg-beige-50" : "bg-white"} 
            ${borderCSS}`}
            onClick={() => setClickArea((prev) => !prev)}
          >
            <Listbox.Label
              className={`flex justify-between items-center 
              ${selected === false ? labelCSS : selectedCSS} `}
            >
              {!selected ? "산업군 선택" : selected.name}
              <Arrow clickArea={clickArea} />
            </Listbox.Label>
          </Listbox.Button>

          {clickArea && (
            <Listbox.Options
              id="onboardIndustryBox"
              className={
                `z-0 overflow-scroll cursor-pointer border-b border-x border-purple-200 rounded-b-lg` +
                height
              }
            >
              {industries?.map((ind) => (
                <Listbox.Option key={ind.id} value={ind} as={Fragment}>
                  {({ active }) => (
                    <li
                      className={`${
                        active
                          ? "bg-purple-50 text-warmgray-900"
                          : "bg-white text-warmgray-100"
                      } flex justify-between p-4 text-base font-medium`}
                      onClick={() => setClickArea(false)}
                    >
                      {ind.name}
                    </li>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          )}
        </div>
      </Listbox>
    </div>
  );
}

const Arrow = ({ clickArea }) => {
  return (
    <div
      className={`w-[20px] h-[10px] transition-transform duration-500 ${
        clickArea ? "rotate-180" : ""
      }`}
    >
      <div
        className="object-cover bg-cover bg-center w-[20px] h-[10px]"
        style={{
          backgroundImage: `url("/images/icons/arrow.png")`,
        }}
      />
    </div>
  );
};
