import { Fragment } from "react";
import { useRouter } from "next/router";

import CloseIcon from "icons/close_off.svg";
import { Dialog, Transition } from "@headlessui/react";

const MessageModal = ({
  isOpen,
  controlModal,
  title,
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
                  className="single-24-b text-neutralgray-900 mb-5 flex justify-between"
                >
                  <div>{title}</div>
                  <button type="button" onClick={() => controlModal(false)}>
                    <CloseIcon width="24" height="24" />
                  </button>
                </Dialog.Title>
                <div className="mt-2">
                  <div className="multiple-18-sb text-neutralgray-900">
                    {info.map((sentence, id) => {
                      return <div key={id}>{sentence}</div>;
                    })}
                  </div>
                </div>

                {/* {button.length > 0 && (
                  <div className="mt-5">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="w-full h-fit p-4 rounded-xl single-20-b hover:bg-purple-500 active:bg-purple-800 text-white bg-purple-700 transition-colors duration-300"
                    >
                      {button[0]}
                    </button>
                  </div>
                )} */}
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

// const MessageModal = ({title, info, components, children}) => {
//   return (
//     <>
//       <div className="bg-white rounded-2xl flex flex-col gap-y-5 w-full h-fit p-8">
//         <h6 className="single-24-b">{title}</h6>
//         <div className="multiple-18-sb">
//           입력하신 번호로 이미 가입된 계정이 있어요.
//           <br />한 번호로 최대 3개의 계정을 만들 수 있어요.
//         </div>
//         <div className="bg-neutralgray-50 rounded-2xl w-full h-20">
//           {data?.map((el) => {
//             return (
//               <>
//                 <div key={el.id}>{el.loginId.replace(/^..../, "****")}</div>
//                 <br />
//               </>
//             );
//           })}
//         </div>
//         <div className="flex gap-x-2">
//           <button
//             type="submit"
//             className="w-full p-4 rounded-xl shadow-[inset_0_0px_0px_1px_#674188] text-purple-700 bg-white single-20-b transition-colors duration-300 hover:bg-purple-50 active:bg-purple-100"
//           >
//             계속 진행하기
//           </button>
//           <button
//             onClick={() => router.push("/login")}
//             className="w-full p-4 rounded-xl text-white bg-purple-700 single-20-b transition-colors duration-300 hover:bg-purple-500 active:bg-purple-800"
//           >
//             로그인
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default MessageModal;
