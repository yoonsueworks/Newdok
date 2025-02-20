import { Fragment } from "react";
import { useRouter } from "next/router";

import CloseIcon from "icons/ver1.0/close_off.svg";
import CheckIcon from "icons/ver3.0/Line Check.svg";
import { Dialog, Transition } from "@headlessui/react";

const SortModal = ({
  isModalOpen,
  setIsModalOpen,
  sortMode,
  setSortMode,
  sortModes,
}) => {
  const clickSortButton = (id) => {
    setSortMode(sortModes[id - 1]);
    setIsModalOpen(false);
  };

  return (
    <Transition appear show={isModalOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setIsModalOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-8 text-left align-middle shadow-xl transition-all">
                <Dialog.Title as="h3" className="flex justify-between">
                  <div className="button-01">정렬</div>
                  <button type="button" onClick={() => setIsModalOpen(false)}>
                    <CloseIcon width="24" height="24" />
                  </button>
                </Dialog.Title>
                <div className="mt-2">
                  <ul className="input-01 text-neutralgray-700">
                    {sortModes.map(({ id, name }) => {
                      return (
                        <li
                          key={id}
                          className="w-full h-12 flex justify-between m-auto items-center border-b cursor-pointer"
                          onClick={() => clickSortButton(id)}
                        >
                          <div>{name}</div>
                          {sortMode.id === id && <CheckIcon />}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default SortModal;
