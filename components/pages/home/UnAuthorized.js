import Find from "./Unauthorized/Find";
import CurrentInViral from "./Unauthorized/CurrentInViral";
import Image1 from "./Unauthorized/Image1";
import Image2 from "./Unauthorized/Image2";
import Image3 from "./Unauthorized/Image3";
import Meet from "./Unauthorized/Meet";
import New from "./Unauthorized/New";
import Subscribe from "./Unauthorized/Subscribe";
import Footer from "./Unauthorized/Footer";



const UnAuthorized = () => {
  return (
    <div className="w-full h-full justify-between bg-neutralgray-50 overflow-auto">
      {/* 1 */}
      <Find />
      {/* 2 */}
      <CurrentInViral />
      {/* 3 */}
      <Image1 />
      {/* 4 */}
      <Image2 />
      {/* 5 */}
      <Image3 />
      {/* 6 */}
      <Meet />
      {/* 7 */}
      <New />
      {/* 8 */}
      <Subscribe />
      {/* 9 */}
      <Footer />
    </div>
  );
};

export default UnAuthorized;
