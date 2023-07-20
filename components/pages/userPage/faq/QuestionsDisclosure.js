import ArrowIcon from "icons/arrow_down_off.svg";
import { Disclosure } from "@headlessui/react";

const QuestionsDisclosure = ({ category }) => {
  const questionBoxCss = "p-4 contentbox-border";
  const questionCSS =
    "w-full text-neutralgray-900 multiple-16-sb flex justify-between gap-x-4 text-left";

  return (
    <>
      {category.questions.map((question) => {
        return (
          <Disclosure key={question.id}>
            {({ open }) => (
              // open state로 disclosure 제어
              <li className={questionBoxCss}>
                {/* 질문 영역 */}
                <Disclosure.Button className={questionCSS}>
                  <span className="w-fit">{question.question}</span>
                  <ArrowIcon className={open ? "rotate-180 transform" : ""} />
                </Disclosure.Button>
                {/* 답변 영역 : ArrowIcon 클릭 시 펼쳐짐 */}
                <Disclosure.Panel className="border-t border-neutralgray-100 mt-2.5">
                  {question.answer.map((paragraph, id) => {
                    return (
                      <p key={id} className="pt-2.5 text-neutralgray-600">
                        {id < 1 ? "A. " + paragraph : paragraph}
                      </p>
                    );
                  })}
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
