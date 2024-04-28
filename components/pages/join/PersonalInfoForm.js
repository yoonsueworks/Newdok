import { useContext, useState, useEffect, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { SignUpContext } from "context/SignUpContext";
import { Listbox } from "@headlessui/react";

import InputLabel from "shared/InputLabel";
import ArrowIcon from "icons/ver1.0/arrow_down_off.svg";
import { nicknameErrorMessage } from "constants/join";

const PersonalInfoForm = () => {
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

  const genderVar = {
    female: "여성",
    male: "남성",
  };

  useEffect(() => {
    setValue("gender", genderVar.male);
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
            className={`rounded-lg p-4 single-16-m input-border focus:inputFocused-border mt-2 
            ${
              !nickname || (nickname && nicknameTested)
                ? "input-border"
                : "inputError-border"
            }`}
            onChange={(e) => setNickname(e.target.value)}
            id="nickname"
          />

          {!nicknameTested && (
            <p className={`text-error single-12-m mt-2`}>{getErrorMessage()}</p>
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
                      ? "rounded-t-lg inputFocused-border"
                      : "rounded-lg input-border "
                  } `}
                  id="listbox"
                >
                  <Listbox.Button
                    className={`text-gray-900 w-full text-left focus:inputFocused-border p-4 flex justify-between items-center ${
                      clickArea ? "rounded-t-lg" : "rounded-lg"
                    }`}
                    onClick={() => setClickArea((prev) => !prev)}
                  >
                    <span className="block truncate single-16-m">
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
                    className="absolute w-full bg-white max-h-60 rounded-b-lg py-1 text-base overflow-auto border-r-2 border-b-2 border-l-2 border-purple-200 sm:text-sm"
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
                          } cursor-default select-none relative p-4 single-16-m`
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
          <p className="text-neutralgray-500 single-12-m">
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
                <div className="flex w-full ">
                  <div className="w-full" dir="ltr">
                    <button
                      type="button"
                      onClick={() => {
                        setValue("gender", genderVar.male);
                        setIsGenderSelected(true);
                      }}
                      className={`w-full h-fit p-4 rounded-l-lg border-y single-16-m ${
                        gender === genderVar.male
                          ? "border-x border-purple-700 bg-purple-400 text-white"
                          : "border-s border-neutralgray-200 text-neutralgray-900"
                      }`}
                    >
                      {genderVar.male}
                    </button>
                  </div>
                  <div className="w-full" dir="rtl">
                    <button
                      type="button"
                      onClick={() => {
                        setValue("gender", genderVar.female);
                        setIsGenderSelected(true);
                      }}
                      className={`w-full h-fit p-4 rounded-r-lg border-y single-16-m transition-colors duration-300 ${
                        gender === genderVar.female
                          ? "border-x border-purple-700 bg-purple-400 text-white"
                          : "border-s border-neutralgray-200 text-neutralgray-900"
                      }`}
                    >
                      {genderVar.female}
                    </button>
                  </div>
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
          <p className="text-neutralgray-500 single-12-m">
            {nicknameErrorMessage.default_gender}
          </p>
        </div>
      </div>
    </form>
  );
};

export default PersonalInfoForm;
