import ButtonText from "shared/ButtonText";
import { useRouter } from "next/router";

const BottomTextButtons = () => {
  const router = useRouter();
  const route = (segment) => router.push(segment);

  const TEXT_BUTTONS = [
    { id: 1, text: "회원가입", func: () => route("/join") },
    { id: 2, text: "ID/PW 찾기", func: () => route("/findAccount") },
  ];

  return (
    <div className="flex gap-x-5 justify-center">
      {TEXT_BUTTONS.map(({ id, text, func }, i) => {
        return (
          <div key={id} className="flex gap-x-4">
            <ButtonText key={id} text={text} func={func} />
            {i + 1 < TEXT_BUTTONS.length && (
              <div className="border-l border-neutralgray-300 h-[14px]"></div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default BottomTextButtons;
