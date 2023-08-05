import { useContext, useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { SignUpContext } from "context/SignUpContext";
import { Listbox } from "@headlessui/react";

import { nicknameErrorMessage } from "constants/signup";

const PersonalInfoForm = () => {
  const { setUserInfo, userInfo, setStep } = useContext(SignUpContext);
  const { register, handleSubmit, control, watch, setValue } = useForm({});
  const gender = watch("gender");

  const [nickname, setNickname] = useState("");
  const [birthYear, setBirthYear] = useState(null);
  const [isGenderSelected, setIsGenderSelected] = useState(false);

  const onSubmit = (data) => {
    setUserInfo({ ...userInfo, ...data });
    setStep((prev) => prev + 1);
  };

  const conditionControl = {
    specials: /^[a-zA-Z0-9가-힣ㄱ-ㅎㅏ-ㅣ]*$/,
    btnDisabled: !nickname || birthYear === "선택",
  };

  const getErrorMessage = () => {
    if (!nickname) return nicknameErrorMessage.default_nickname;
    if (nickname && conditionControl.specials.test(nickname))
      return nicknameErrorMessage.default_nickname;
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
  }, []);

  return (
    <form
      className="h-full overflow-scroll w-full flex flex-col justify-between"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-y-8">
        <div className="flex flex-col gap-y-2">
          <label htmlFor="nickname" className="single-14-m text-purple-700">
            닉네임
          </label>

          <input
            {...register("nickname", {
              required: true,
              pattern: /^[\da-zA-Z가-힣ㄱ-ㅎㅏ-ㅣ]{1,12}$/,
            })}
            maxLength="12"
            placeholder="12자 이내, 특수문자 사용 불가"
            className={`rounded-lg p-4 single-16-m input-border focus:inputFocused-border 
            ${
              !nickname ||
              (nickname && conditionControl.specials.test(nickname))
                ? "input-border"
                : "inputError-border"
            }`}
            onChange={(e) => setNickname(e.target.value)}
            id="nickname"
          />

          {!nickname ||
          (nickname && conditionControl.specials.test(nickname)) ? (
            <p className={`text-neutralgray-500 single-12-m`}>
              {getErrorMessage()}
            </p>
          ) : (
            <p className={`text-error single-12-m`}>{getErrorMessage()}</p>
          )}
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="nickname" className="single-14-m text-purple-700">
            출생연도
          </label>
          <Controller
            name="birthYear"
            control={control}
            defaultValue={"선택"}
            rules={{
              required: "Please select your birth year",
            }}
            render={({ field }) => (
              <Listbox
                value={field.value}
                onChange={(value) => {
                  field.onChange(value);
                  setBirthYear(value);
                }}
              >
                <div className="relative input-border rounded-lg focus:inputFocused-border">
                  <Listbox.Button className="text-gray-900 w-full text-left shadow-sm focus:inputFocused-border rounded-lg">
                    <span className="block truncate single-16-m p-4">
                      {field.value ? field.value : "선택"}
                    </span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </Listbox.Button>
                  <Listbox.Options
                    as="ul"
                    className="absolute w-full bg-white max-h-60 rounded-b-lg py-1 text-base overflow-auto border-2 border-purple-200 sm:text-sm"
                  >
                    {Array.from({ length: 128 }, (_, index) => (
                      <Listbox.Option
                        key={index}
                        value={2023 - index}
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
                              {2023 - index}
                            </span>
                            {selected && (
                              <span
                                className={`${
                                  active ? "text-blue-600" : "text-blue-600"
                                }
                            absolute inset-y-0 left-0 flex items-center pl-3`}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  aria-hidden="true"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </span>
                            )}
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
        <div className="flex flex-col gap-y-2">
          <label htmlFor="nickname" className="single-14-m text-purple-700">
            성별
          </label>
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
        </div>
      </div>
      <button
        type="submit"
        className="mt-16 p-5 text-white bg-purple-700 rounded-[14px] focus:outline-none disabled:bg-neutralgray-500 single-24-b transition-colors duration-300 hover:bg-purple-500 active:bg-purple-800"
        disabled={conditionControl.btnDisabled}
      >
        다음
      </button>
    </form>
  );
};

export default PersonalInfoForm;
