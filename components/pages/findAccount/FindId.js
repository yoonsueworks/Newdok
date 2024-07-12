import { useEffect, useState } from "react";
import { useCheckPhoneNumber } from "service/hooks/user";

import MessageModal from "shared/MessageModal";
import InputLabel from "shared/InputLabel";
import Found from "./FindId/FoundId";

import { useForm } from "react-hook-form";

const FindId = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [accounts, setAccounts] = useState(null);
  const { register, handleSubmit, watch } = useForm({});
  const phoneNumber = watch("phoneNumber");

  const { data, refetch, isLoading, isError } =
    useCheckPhoneNumber(phoneNumber);

  const onSubmit = () => {
    refetch();
  };

  useEffect(() => {
    if (isError) {
      setIsModalOpen(true);
    }
  }, [isError]);

  useEffect(() => {
    if (!isLoading && !isError) {
      setAccounts(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <>
      {accounts ? (
        <Found accounts={accounts} />
      ) : (
        <>
          <form
            className="h-full flex flex-col justify-between"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="grid gap-y-7">
              <div className="multiple-24-b">
                회원가입 당시 입력한 <br />
                휴대폰 번호를 입력해 주세요.
              </div>
              <div className="grid gap-y-2">
                <InputLabel htmlFor="phoneNumber" text="휴대폰 번호" />
                <input
                  {...register("phoneNumber", {
                    required: {
                      value: true,
                      message: "11자 휴대폰 번호를 입력하세요",
                    },
                    pattern: /^[0-9]{11}$/,
                  })}
                  maxLength="11"
                  placeholder="'-'없이 입력"
                  type="number"
                  className="rounded-lg p-4 single-16-m focus:inputFocused-border input-border"
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={!phoneNumber}
              className={`w-full h-fit p-5 rounded-[14px] text-white single-24-b bg-purple-700 active:bg-purple-800 hover:bg-purple-400 disabled:bg-neutralgray-500 transition-colors duration-300`}
            >
              다음
            </button>
          </form>
        </>
      )}
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};

export default FindId;

const Modal = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <MessageModal
      isOpen={isModalOpen}
      controlModal={setIsModalOpen}
      title="휴대폰 번호 확인"
      titleSize="s"
      info={[
        "가입되지 않은 휴대폰 번호입니다.",
        <div
          key={3}
          className="bg-neutralgray-50 rounded-lg w-full h-fit multiple-16-m text-neutralgray-900 p-4 mt-4"
        >
          회원가입 이후 계정관리에서 휴대폰 번호를 재등록했다면 변경한 휴대폰
          번호를 입력해주세요.
        </div>,
      ]}
      button={
        <div className="flex gap-x-2 mt-5" key={1}>
          <button
            type="submit"
            className="w-full p-4 rounded-xl text-white bg-purple-700 single-20-b transition-colors duration-300 hover:bg-purple-500 active:bg-purple-800"
            onClick={() => setIsModalOpen(false)}
          >
            확인
          </button>
        </div>
      }
    />
  );
};
