import ButtonText from "shared/ButtonText";
import { useRouter } from "next/router";

const BottomTextButtons = () => {
  const router = useRouter();
  const route = (segment) => router.push(segment);

  const TEXT_BUTTONS = [
    { id: 1, text: "ID/PW 찾기", func: () => route("/findAccount") },
    { id: 2, text: "회원가입", func: () => route("/join") },
    { id: 3, text: "비회원으로 이용하기", func: () => route("/home") },
  ];

  return (
    <div className="flex gap-x-5 justify-center">
      {TEXT_BUTTONS.map(({ id, text, func }, i) => {
        return (
          <div key={id} className="flex gap-x-4">
            <ButtonText key={id} text={text} func={func} />
            {i + 1 < TEXT_BUTTONS.length && (
              <div className="border-l border-warmgray-100 h-4"></div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default BottomTextButtons;
