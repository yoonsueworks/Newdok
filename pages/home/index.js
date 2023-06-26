import Nav from "shared/Nav";
import Articles from "components/pages/home/Articles";
import Arrivals from "components/pages/home/Arrivals";
import UnAuthorized from "components/pages/home/UnAuthorized";
import BrandInfo from "components/pages/brandhome/BrandInfo";
import BrandArticles from "components/pages/brandhome/BrandArticles";
import ReactCalendar from "components/pages/home/Calendar";
import ToolBar from "components/pages/home/ToolBar";
import BottomSheet from "shared/BottomSheet";
import ToastPopUp from "shared/ToastPopUp";
import Filters from "components/pages/lookaround/Filters";

const Home = () => {
  //TODO: auth token confirmation

  return (
    <div>
      <ToolBar />
      <ReactCalendar />
      <ToastPopUp />
      <Nav />

      {/* <BottomSheet comp={<Filters />} /> */}
      {/* <BrandInfo />*/}
      {/* <BrandArticles /> */}
      {/* <Arrivals /> */}
      {/* <UnAuthorized /> */}
    </div>
  );
};

export default Home;
