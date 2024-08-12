import { useRouter } from "next/router";

import ArrowRight from "icons/ver1.0/arrow_right_off.svg";

import {
  userPage_menus_service,
  userPage_menus_customer,
} from "constants/userPage";

const Menus = () => {
  return (
    <div className="w-full h-fit flex flex-col items-center justify-center">
      <div className="w-full grid">
        <div className="bg-white px-5 py-2 mt-3 body-s text-neutralgray-700">
          서비스
        </div>
        {userPage_menus_service.map((menu) => {
          return <Menu menu={menu} />;
        })}
        <div className="bg-white px-5 py-2 mt-3 body-s text-neutralgray-700">
          고객센터
        </div>
        {userPage_menus_customer.map((menu) => {
          return <Menu menu={menu} />;
        })}
        <div className="w-full flex justify-between items-center bg-warmgray-30 p-5 single-18-b">
          버전 <span className="block single-14-m">v3.0.0</span>
        </div>
      </div>
    </div>
  );
};

export default Menus;

const Menu = ({ menu }) => {
  const router = useRouter();
  return (
    <div
      key={menu.id}
      className="w-full h-fit flex justify-between items-center p-5 bg-white input-02 cursor-pointer text-neutralgray-800"
      onClick={() => {
        router.push(menu.path);
      }}
    >
      {menu.name}
      <ArrowRight width="24" height="24" />
    </div>
  );
};
