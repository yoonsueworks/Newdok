import { useContext, useState, useEffect, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { SignUpContext } from "context/SignUpContext";
import { Listbox } from "@headlessui/react";

import InputLabel from "shared/InputLabel";
import ArrowIcon from "icons/ver1.0/arrow_down_off.svg";
import { nicknameErrorMessage } from "constants/join";

const InfoForm = () => {
  const { setUserInfo, userInfo, setStep } = useContext(SignUpContext);
  const { register, handleSubmit, control, watch, setValue } = useForm({});
  const gender = watch("gender");

  const [nickname, setNickname] = useState("");
  const [birthYear, setBirthYear] = useState(null);
  const [isGenderSelected, setIsGenderSelected] = useState(false);
  const [clickArea, setClickArea] = useState(false);
  const birthYearRef = useRef(null);

  const onSubmit = (data) => {
    const birthYearAsString = data.birthYear.toString();
    setUserInfo({ ...userInfo, ...data, birthYear: birthYearAsString });
    setStep((prev) => prev + 1);
  };

  const conditionControl = {
    specials: /^[a-zA-Z0-9가-힣ㄱ-ㅎㅏ-ㅣ]*$/,
    btnDisabled: !nickname || birthYear === "선택",
  };

  const nicknameTested = conditionControl.specials.test(nickname);

  const getErrorMessage = () => {
    if (nickname && !conditionControl.specials.test(nickname))
      return nicknameErrorMessage.error_nickname;
  };

  const genderOptions = [
    { value: "남성", direction: "ltr" },
    { value: "여성", direction: "rtl" },
  ];

  useEffect(() => {
    setValue("gender", genderOptions[0].value);
    setIsGenderSelected(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // 출생연도 리스트박스 영역 밖에서 클릭 시 발생하는 이벤트
    function handleFocus(e) {
      if (
        birthYearRef.current.id === "listbox" &&
        !birthYearRef.current.contains(e.target)
      ) {
        setClickArea(false);
      }
    }

    // 마우스 없으면 이벤트리스너 삭제
    document.addEventListener("mouseup", handleFocus);
    return () => {
      document.removeEventListener("mouseup", handleFocus);
    };
  }, [birthYearRef]);

  return (
    <form
      className="h-fit w-full flex flex-col justify-between"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-y-8">
        {/* 아래부터 닉네임 */}
        <div className="flex flex-col ">
          <InputLabel htmlFor="nickname" text="닉네임" />
          <input
            {...register("nickname", {
              required: true,
              pattern: /^[\da-zA-Z가-힣ㄱ-ㅎㅏ-ㅣ]{1,12}$/,
            })}
            maxLength="12"
            placeholder="12자 이내, 특수문자 사용 불가"
            className={`rounded-xl p-4 input-01 input-border focus:inputFocused-border mt-2 
            ${
              !nickname || (nickname && nicknameTested)
                ? "input-border"
                : "inputError-border"
            }`}
            onChange={(e) => setNickname(e.target.value)}
            id="nickname"
          />

          {!nicknameTested && (
            <p className={`text-error label-s mt-2`}>{getErrorMessage()}</p>
          )}
        </div>

        {/* 아래부터 출생연도 */}
        <div className="flex flex-col gap-y-2">
          <InputLabel htmlFor="birthYear" text="출생연도" />
          <Controller
            name="birthYear"
            control={control}
            defaultValue={"선택"}
            rules={{
              required: "출생연도를 입력해주세요.",
            }}
            render={({ field }) => (
              <Listbox
                ref={birthYearRef}
                value={field.value}
                onChange={(value) => {
                  field.onChange(value);
                  setClickArea(false);
                }}
              >
                <div
                  className={`relative focus:inputFocused-border  ${
                    clickArea
                      ? "rounded-t-xl inputFocused-border"
                      : "rounded-xl input-border "
                  } `}
                  id="listbox"
                >
                  <Listbox.Button
                    className={`text-gray-900 w-full text-left focus:inputFocused-border p-4 flex justify-between items-center ${
                      clickArea ? "rounded-t-xl" : "rounded-xl"
                    }`}
                    onClick={() => setClickArea((prev) => !prev)}
                  >
                    <span className="block truncate input-01 ">
                      {field.value ? field.value : "선택"}
                    </span>
                    <span className="items-center pointer-events-none">
                      <ArrowIcon
                        className={`${
                          clickArea ? "rotate-180" : ""
                        } transition-transform duration-500`}
                      />
                    </span>
                  </Listbox.Button>
                  <Listbox.Options
                    as="ul"
                    className="absolute w-full bg-white max-h-60 rounded-b-xl py-1 text-base overflow-auto border-r-2 border-b-2 border-l-2 border-purple-200 sm:text-sm"
                  >
                    {Array.from({ length: 66 }, (_, index) => (
                      <Listbox.Option
                        key={index}
                        value={2010 - index}
                        className={({ active }) =>
                          `${
                            active
                              ? "text-purple-900 bg-purple-50"
                              : "text-neutralgray-900"
                          } cursor-default select-none relative p-4 input-01 `
                        }
                      >
                        {({ active, selected }) => (
                          <>
                            <span
                              className={`${
                                selected ? "font-medium" : "font-normal"
                              } block truncate`}
                            >
                              {2010 - index}
                            </span>
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </div>
              </Listbox>
            )}
          />
          <p className="text-neutralgray-500 label-s">
            {nicknameErrorMessage.default_birthYear}
          </p>
        </div>

        {/* 아래부터 성별 */}
        <div className="flex flex-col gap-y-2">
          <InputLabel htmlFor="gender" text="성별" />
          <Controller
            name="gender"
            control={control}
            rules={{ required: "Please select a gender" }}
            render={({ field }) => (
              <>
                <div className="flex w-full gap-x-2">
                  {genderOptions.map(({ value, direction }) => (
                    <div key={value} className="w-full" dir={direction}>
                      <button
                        type="button"
                        onClick={() => {
                          setValue("gender", value);
                          setIsGenderSelected(true);
                        }}
                        className={`w-full h-fit p-4 rounded-xl border input-01 transition-colors duration-300 ${
                          gender === value
                            ? "border-blue-600 text-blue-600"
                            : "border-neutralgray-300 text-neutralgray-600"
                        }`}
                      >
                        {value}
                      </button>
                    </div>
                  ))}
                </div>
                <input
                  type="hidden"
                  {...register("gender", {
                    required: "Please select a gender",
                  })}
                />
              </>
            )}
          />
          <p className="text-neutralgray-500 label-s">
            {nicknameErrorMessage.default_gender}
          </p>
        </div>
      </div>
    </form>
  );
};

export default InfoForm;
