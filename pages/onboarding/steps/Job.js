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

  const selectedCSS = "text-purple-30 border-1 border-purple-30";
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
        <Listbox.Button
          className="text-left bg-warmgray-10 p-6 w-full rounded-2xl headline_s "
          onClick={() => setClickArea((prev) => !prev)}
        >
          <Listbox.Label
            className={selectedPerson === false ? labelCSS : selectedCSS}
          >
            {selectedPerson === false
              ? "산업군을 선택하세요"
              : selectedPerson.name}
          </Listbox.Label>
        </Listbox.Button>
        <div
          className={`h-[300px] overflow-scroll ${
            clickArea
              ? "outline-warmgray-20 outline outline-1 "
              : "outline-warmgray-20"
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
      </Listbox>
    </div>
  );
}
