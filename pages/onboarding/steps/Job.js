import { useState, Fragment, useEffect, useRef, useContext } from "react";
import { GlobalContext } from "../../_app";
import { Listbox } from "@headlessui/react";

export default function Job() {
  const [selected, setSelected] = useState(false);
  const [clickArea, setClickArea] = useState(false);
  const wrapperRef = useRef(null);

  const { handleProgressWithOption, setUserInfos, industry, setIsActivated } =
    useContext(GlobalContext);

  const selectedCSS = "text-purple-700";
  const labelCSS = "text-warmgray-60";

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
            className={`z-10 text-left bg-warmgray-10 p-6 w-full headline_s ${
              clickArea ? "rounded-t-2xl" : "rounded-2xl "
            } ${
              selected
                ? "border border-1 border-purple-700 "
                : "border border-1 border-warmgray-20"
            }`}
            onClick={() => setClickArea((prev) => !prev)}
          >
            <Listbox.Label
              className={`${
                selected === false ? labelCSS : selectedCSS
              } flex justify-between items-center`}
            >
              {selected === false ? (
                <div>산업군을 선택하세요</div>
              ) : (
                <div>{selected.name}</div>
              )}

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
                ></div>
              </div>
            </Listbox.Label>
          </Listbox.Button>
          {clickArea ? (
            <div
              id="onboardIndustryBox"
              className={`z-0 overflow-scroll cursor-pointer ${
                clickArea
                  ? "border-b border-x border-warmgray-20  rounded-b-2xl"
                  : "border-warmgray-20 rounded-b-2xl"
              }`}
            >
              <Listbox.Options className="border-warmgray-20">
                {industry?.map((ind) => (
                  <Listbox.Option key={ind.id} value={ind} as={Fragment}>
                    {({ active, selected }) => (
                      <li
                        className={`${
                          active
                            ? "bg-warmgray-10 text-warmgray-100"
                            : "bg-white text-warmgray-100"
                        } flex justify-between p-6 headline_s `}
                        onClick={() => setClickArea(false)}
                      >
                        {ind.name}
                      </li>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </div>
          ) : null}
        </div>
      </Listbox>
    </div>
  );
}
