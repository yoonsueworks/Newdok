import ArrowIcon from "icons/ver1.0/arrow_down_off.svg";
import { Disclosure } from "@headlessui/react";

const QuestionsDisclosure = ({
  category,
  setOpenDisclosureId,
  openDisclosureId,
}) => {
  const handleOpenBtnClick = (id) => {
    const isOpened = openDisclosureId === id;
    if (isOpened) {
      setOpenDisclosureId(null);
    }
    if (!isOpened) {
      setOpenDisclosureId(id);
    }
  };

  return (
    <>
      {category.map((question) => {
        return (
          <Disclosure key={question.id}>
            {({ open }) => (
              <li
                className={`p-4 contentbox-border list-none ${
                  openDisclosureId === question.id &&
                  "shadow-[0_4px_8px_0_rgba(25,25,25,0.1)] border border-blue-100"
                }`}
              >
                <div className="label-l text-blue-600 mb-[3px]">
                  {question.category}
                </div>
                {/* 질문 영역 */}
                <Disclosure.Button
                  className="w-full text-neutralgray-900 multiple-16-sb flex justify-between gap-x-4 text-left"
                  onClick={() => handleOpenBtnClick(question.id)}
                >
                  <span className="w-fit title-s text-neutralgray-800">
                    {question.question}
                  </span>
                  <ArrowIcon
                    className={
                      openDisclosureId === question.id
                        ? "rotate-180 transform"
                        : ""
                    }
                  />
                </Disclosure.Button>

                {/* 답변 영역 : ArrowIcon 클릭 시 펼쳐짐 */}
                <Disclosure.Panel>
                  <div className="grid gap-y-2.5 mt-3">
                    {openDisclosureId === question.id &&
                      question.answer.map((paragraph, id) => {
                        return (
                          <p
                            key={id}
                            className="text-sm font-normal text-neutralgray-700 leading-normal"
                          >
                            {paragraph}
                          </p>
                        );
                      })}
                  </div>
                </Disclosure.Panel>
              </li>
            )}
          </Disclosure>
        );
      })}
    </>
  );
};

export default QuestionsDisclosure;
