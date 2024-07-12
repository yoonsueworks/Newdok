import { Fragment } from "react";
import { useRouter } from "next/router";

import CloseIcon from "icons/ver1.0/close_off.svg";
import { Dialog, Transition } from "@headlessui/react";

const MessageModal = ({
  isOpen,
  controlModal,
  title,
  titleSize,
  info,
  components,
  children,
  button,
  pathTo,
}) => {
  const router = useRouter();
  const closeModal = () => {
    controlModal(false);
    router.push(pathTo);
  };
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => controlModal(false)}
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
                <Dialog.Title
                  as="h3"
                  className={`${
                    titleSize === "m" ? "title-m" : "title-s"
                  } text-neutralgray-900 mb-2 flex justify-between`}
                >
                  <div>{title}</div>
                  {title !== "중복 계정 안내" && (
                    <button type="button" onClick={() => controlModal(false)}>
                      <CloseIcon width="24" height="24" />
                    </button>
                  )}
                </Dialog.Title>
                <div className="mt-2">
                  <div
                    className={`${
                      titleSize === "m" ? "body-m" : "body-s"
                    } text-neutralgray-700`}
                  >
                    {info.map((sentence, id) => {
                      return <div key={id}>{sentence}</div>;
                    })}
                  </div>
                </div>
                {button}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default MessageModal;
