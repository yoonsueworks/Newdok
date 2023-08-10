import Background3 from "shared/Background3";
import Background from "shared/Background";
import QuestionsDisclosure from "components/pages/userPage/faq/QuestionsDisclosure";
import { faqList } from "constants/faqList";
import AppBar from "shared/AppBar";

const Faq = () => {
  const containerCSS = "flex flex-col pt-8 gap-y-8 pb-14 scroll-smooth";
  const categoryCSS = "text-purple-700 single-18-b";
  const questionWrapperCSS = "grid gap-y-2.5";

  return (
    <>
      <div className="relative w-full">
        <div className="absolute w-full">
          <AppBar
            iconl={true}
            shadow={true}
            textl="FAQ"
            iconr={false}
            func={() => history.back()}
          />
        </div>
      </div>
      <Background>
        <div className="pt-14 overflow-scroll">
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
        </div>
      </Background>
    </>
  );
};

export default Faq;
