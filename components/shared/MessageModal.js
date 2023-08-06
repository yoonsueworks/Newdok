import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const MessageModal = ({
  isOpen,
  openModal,
  closeModal,
  title,
  info,
  components,
  children,
}) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  {title}
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Your payment has been successfully submitted. We’ve sent you
                    an email with all of the details of your order.
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    Got it, thanks!
                  </button>
                </div>
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
