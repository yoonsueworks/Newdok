import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

import { useCheckLoginId_2, useAuthSms_2 } from "service/hooks/user";
import MessageModal from "shared/MessageModal";
import MessageSent from "./FindPassword/MessageSent";
import ResetPswd from "./FindPassword/ResetPswd";

const FindPassword = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [accounts, setAccounts] = useState(null);
  const [code, setCode] = useState(false);
  const [component, setComponent] = useState("findPswd");

  const { register, handleSubmit, watch } = useForm({});
  const loginId = watch("loginId");

  const { data, refetch, isLoading, isError } = useCheckLoginId_2(loginId);
  const authorizeSms = useAuthSms_2();

  /* loginId 제출 */
  const onSubmit = () => {
    refetch();
  };

  /* SMS 코드 요청, 코드 세팅 */
  const authorize = async () => {
    const form = { phoneNumber: data?.phoneNumber };
    const result = await authorizeSms.mutateAsync(form);
    if (!authorizeSms.data) setCode(result?.code);
  };

  const components = {
    findPswd: (
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="h-full flex flex-col justify-between"
      >
        <div className="grid gap-y-7">
          <div className="multiple-24-b">
            가입한 아이디를
            <br />
            입력해 주세요.
          </div>
          <div className="grid gap-y-2">
            <input
              {...register("loginId", {
                required: {
                  value: true,
                  message: "아이디 입력",
                },
                pattern: /^(?=.*[a-z])(?=.*\d)[a-z\d]{6,12}$/,
              })}
              maxLength="12"
              placeholder="아이디 입력"
              className="rounded-lg p-4 single-16-m focus:inputFocused-border input-border"
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={!loginId}
          className={`w-full h-fit p-5 rounded-[14px] text-white single-24-b bg-purple-700 active:bg-purple-800 hover:bg-purple-400 disabled:bg-neutralgray-500 transition-colors duration-300`}
        >
          다음
        </button>
      </form>
    ),
    messageSent: (
      <MessageSent
        code={code}
        setComponent={setComponent}
        authorize={authorize}
      />
    ),
    resetPswd: <ResetPswd loginId={loginId} />,
  };

  /* refetch로 인해 업데이트 지연 해소 */
  useEffect(() => {
    if (isError) {
      setIsModalOpen(true);
    }
  }, [isError]);

  useEffect(() => {
    if (data) {
      setAccounts(data);
      authorize();
      setComponent("messageSent");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <>
      {components[component]}
      {!data && (
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      )}
    </>
  );
};

export default FindPassword;

const Modal = ({ isModalOpen, setIsModalOpen }) => {
  const router = useRouter();
  return (
    <MessageModal
      isOpen={isModalOpen}
      controlModal={setIsModalOpen}
      title="아이디 확인"
      info={[
        "가입되지 않은 아이디입니다.",
        <div
          key={3}
          className="bg-neutralgray-50 rounded-lg w-full h-fit multiple-16-m text-neutralgray-900 p-4 mt-4"
        >
          회원가입을 원하시면 아래 버튼을 눌러주세요.
        </div>,
      ]}
      button={
        <div className="flex gap-x-2 mt-5" key={1}>
          <button
            type="button"
            className="w-full p-4 rounded-xl text-white bg-purple-700 single-20-b transition-colors duration-300 hover:bg-purple-500 active:bg-purple-800"
            onClick={() => router.push("/join")}
          >
            회원가입
          </button>
        </div>
      }
    />
  );
};
