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
            shadow={false}
            textl="FAQ"
            iconr={false}
          />
        </div>
      </div>
      <Background>
        <div className="pt-14 overflow-scroll">
          <div className="flex flex-col pt-8 gap-y-3 pb-14 scroll-smooth">
            <QuestionsDisclosure
              category={faqList}
              setOpenDisclosureId={setOpenDisclosureId}
              openDisclosureId={openDisclosureId}
            />
          </div>
        </div>
      </Background>
    </div>
  );
};

export default Faq;
