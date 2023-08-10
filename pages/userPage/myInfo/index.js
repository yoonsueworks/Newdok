import Background from "shared/Background";
import SettingIcon from "icons/setting_off.svg";
import AppBar from "shared/AppBar";

const MyInfo = () => {
  return (
    <>
      <div className="relative w-full">
        <div className="absolute w-full">
          <AppBar
            iconl={true}
            shadow={true}
            textl="프로필 편집"
            iconr={false}
            func={() => history.back()}
          />
        </div>
      </div>
      <Background>
        <div className="w-full h-full pt-24 pb-14 flex flex-col gap-y-8">
          <div className="multiple-24-b">
            등록하신 정보에 맞춰
            <br />
            뉴스레터를 추천해 드려요.
          </div>
          <div className="flex flex-col gap-y-8">
            <div className="flex flex-col gap-y-2">
              <div className="single-14-b text-purple-700">닉네임</div>
              <div className="flex justify-between gap-x-2">
                <input
                  className="w-full contentbox-border p-4 single-16-m text-neutralgray-900"
                  value="도커스"
                ></input>
                <button className="p-4 bg-purple-700 rounded-xl hover:bg-purple-500 active:bg-purple-800 transition-colors duration-300">
                  <SettingIcon width="24" height="24" fill="white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Background>
    </>
  );
};

export default MyInfo;
