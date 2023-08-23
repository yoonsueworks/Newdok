import ArrowIcon from "icons/arrow_down_off.svg";
import { Disclosure } from "@headlessui/react";

const QuestionsDisclosure = ({
  category,
  setOpenDisclosureId,
  openDisclosureId,
}) => {
  const questionBoxCss = "p-4 contentbox-border";
  const questionCSS =
    "w-full text-neutralgray-900 multiple-16-sb flex justify-between gap-x-4 text-left";

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
      {category.questions.map((question) => {
        return (
          <Disclosure key={question.id}>
            {({ open }) => (
              <li className={questionBoxCss}>
                {/* 질문 영역 */}
                <Disclosure.Button
                  className={questionCSS}
                  onClick={() => handleOpenBtnClick(question.id)}
                >
                  <span className="w-fit">{question.question}</span>
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
                  <div className="grid gap-y-2.5 mt-4">
                    {openDisclosureId === question.id &&
                      question.answer.map((paragraph, id) => {
                        return (
                          <p key={id} className="multiple-14-m text-purple-700">
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
