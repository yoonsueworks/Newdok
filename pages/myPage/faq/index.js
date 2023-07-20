import Background from "shared/Background";
import QuestionsDisclosure from "components/pages/mypage/faq/QuestionsDisclosure";
import { faqList } from "constants/faqList";

const Faq = () => {
  // const wrapperCSS = "w-full h-full px-5 bg-beige-100 overflow-scroll";
  const containerCSS = "flex flex-col pt-8 gap-y-8";
  const categoryCSS = "text-purple-700 single-18-b";
  const questionWrapperCSS = "grid gap-y-2.5";

  return (
    // <div className={wrapperCSS}>
    <Background>
      <div className={containerCSS}>
        {faqList.map((category) => {
          return (
            <ul key={category.id}>
              <li className="grid gap-y-4">
                <strong className={categoryCSS}>{category.name}</strong>
                <ul className={questionWrapperCSS}>
                  <QuestionsDisclosure category={category} />
                </ul>
              </li>
            </ul>
          );
        })}
      </div>
    </Background>
    //</div>
  );
};

export default Faq;
