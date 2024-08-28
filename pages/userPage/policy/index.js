import { useRouter } from "next/router";

import AppBar from "shared/AppBar";
import Background from "shared/Background";
import ArrowRight from "icons/ver1.0/arrow_right_off.svg";

import { policy_menus } from "constants/userPage";

const Policy = () => {
  const router = useRouter();
  return (
    <div className="xl:w-full md:w-full md:flex md:flex-col h-full">
      <div className="relative w-full">
        <div className="absolute w-full">
          <AppBar
            iconl={true}
            shadow={false}
            textl="약관 및 정책"
            iconr={false}
            func={() => history.back()}
          />
        </div>
      </div>
      <Background>
        <div className="pt-24 flex flex-col">
          {policy_menus.map((menu) => {
            return (
              <div
                className="p-4 input-02 flex justify-between items-center cursor-pointer"
                key={menu.id}
                onClick={() => router.push(menu.path)}
              >
                <div>{menu.name}</div>
                <ArrowRight width="20" height="20" color="#333333"/>
              </div>
            );
          })}
        </div>
      </Background>
    </div>
  );
};

export default Policy;
