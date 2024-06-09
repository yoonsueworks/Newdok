import { useState } from "react";

import Background from "shared/Background";
import AppBar from "shared/AppBar";
import QuestionsDisclosure from "components/pages/userPage/faq/QuestionsDisclosure";

import { faqList } from "constants/faqList";

const Faq = () => {
  const [openDisclosureId, setOpenDisclosureId] = useState(null);

  return (
    <div className="xl:w-full md:w-full md:flex md:flex-col">
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
          <div className="flex flex-col pt-8 gap-y-8 pb-14 scroll-smooth">
            {faqList.map((category) => {
              return (
                <ul key={category.id}>
                  <li className="grid gap-y-4">
                    <strong className="text-purple-700 single-18-b">
                      {category.name}
                    </strong>
                    <ul className="grid gap-y-2.5">
                      <QuestionsDisclosure
                        category={category}
                        setOpenDisclosureId={setOpenDisclosureId}
                        openDisclosureId={openDisclosureId}
                      />
                    </ul>
                  </li>
                </ul>
              );
            })}
          </div>
        </div>
      </Background>
    </div>
  );
};

export default Faq;
