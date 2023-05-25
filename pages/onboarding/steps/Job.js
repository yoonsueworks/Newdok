import { useState, Fragment, useEffect, useRef } from "react";
import { Listbox } from "@headlessui/react";

const people = [
  { id: 1, name: "Durward Reynolds", unavailable: false },
  { id: 2, name: "Kenton Towne", unavailable: false },
  { id: 3, name: "Therese Wunsch", unavailable: false },
  { id: 4, name: "Benedict Kessler", unavailable: true },
  { id: 5, name: "Katelyn Rohan", unavailable: false },
];

export default function Job() {
  const [selectedPerson, setSelectedPerson] = useState(false);
  const [clickArea, setClickArea] = useState(false);
  const wrapperRef = useRef(null);

  const selectedCSS = "text-purple-30";
  const labelCSS = "text-warmgray-60";

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
      <Listbox value={selectedPerson} onChange={setSelectedPerson}>
        <div className="grid">
          <Listbox.Button
            className={`z-10 text-left bg-warmgray-10 p-6 w-full headline_s ${
              clickArea ? "rounded-t-2xl" : "rounded-2xl "
            } ${selectedPerson ? "border border-1 border-purple-30 " : ""}`}
            onClick={() => setClickArea((prev) => !prev)}
          >
            <Listbox.Label
              className={`${
                selectedPerson === false ? labelCSS : selectedCSS
              } flex justify-between items-center`}
            >
              {selectedPerson === false ? (
                <div>"산업군을 선택하세요"</div>
              ) : (
                <div>{selectedPerson.name}</div>
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
              className={`z-0 h-[300px] overflow-scroll ${
                clickArea
                  ? "border-warmgray-20 border rounded-b-2xl"
                  : "border-warmgray-20 rounded-b-2xl"
              }`}
            >
              <Listbox.Options className="border-warmgray-20">
                {people.map((person) => (
                  <Listbox.Option key={person.id} value={person} as={Fragment}>
                    {({ active, selected }) => (
                      <li
                        className={`${
                          active
                            ? "bg-warmgray-10 text-warmgray-100"
                            : "bg-white text-warmgray-100"
                        } flex justify-between p-6 headline_s `}
                        onClick={() => setClickArea(false)}
                      >
                        {selected && <div>ddd</div>}
                        {person.name}
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
