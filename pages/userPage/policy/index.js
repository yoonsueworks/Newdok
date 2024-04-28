import { useRouter } from "next/router";

import AppBar from "shared/AppBar";
import Background from "shared/Background";
import ArrowRight from "icons/ver1.0/arrow_right_off.svg";

import { policy_menus } from "constants/userPage";

const Policy = () => {
  const router = useRouter();
  return (
    <div className="xl:w-full md:w-full md:flex md:flex-col">
      <div className="relative w-full">
        <div className="absolute w-full">
          <AppBar
            iconl={true}
            shadow={true}
            textl="약관 및 정책"
            iconr={false}
            func={() => history.back()}
          />
        </div>
      </div>
      <Background>
        <div className="pt-24 flex flex-col gap-y-2.5">
          {policy_menus.map((menu) => {
            return (
              <div
                className="contentbox-border p-5 single-18-b flex justify-between items-center gap-y-4 cursor-pointer"
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
    </div>
  );
};

export default Policy;
