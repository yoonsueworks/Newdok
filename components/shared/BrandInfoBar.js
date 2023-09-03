import BackIcon from "icons/back_off.svg";

const BrandInfoBar = ({ name }) => {
  return (
    <div className="bg-white flex justify-between p-2.5 items-center elevation-1-bottom z-10">
      <div className="w-7.5 h-7.5 flex justify-center items-center bg-white shrink-0 cursor-pointer">
        <BackIcon
          width="24"
          height="24"
          className="shrink-0"
          onClick={() => history.back()}
        />
      </div>
      <div className="single-20-b">{name}</div>
      <div className="w-7.5 h-7.5 flex justify-center items-center p-1.5">
        <div className="w-6 h-6"></div>
      </div>
    </div>
  );
};

export default BrandInfoBar;
