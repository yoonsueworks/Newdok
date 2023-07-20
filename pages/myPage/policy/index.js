import { useRouter } from "next/router";
import Background from "shared/Background";
import ArrowRight from "icons/arrow_right_off.svg";
import { policy_menus } from "constants/mypage";

const Policy = () => {
  const router = useRouter();
  return (
    <Background>
      <div className="pt-8 flex flex-col gap-y-2.5">
        {policy_menus.map((menu) => {
          return (
            <div
              className="contentbox-border p-5 single-18-b flex justify-between items-center gap-y-4"
              key={menu.id}
              onClick={() => router.push(menu.path)}
            >
              <div>{menu.name}</div>
              <ArrowRight width="24" height="24" />
            </div>
          );
        })}
      </div>
    </Background>
  );
};

export default Policy;
