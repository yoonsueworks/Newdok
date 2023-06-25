const BottomSheet = ({ comp }) => {
  return (
    <div className="absolute bottom-0 z-999 w-full bg-white">
      <div className="w-full py-6 flex justify-center elevation-3-top rounded-t-[32px]">
        <div className="w-12 h-1 bg-warmgray-30 rounded-full"></div>
      </div>
      <div className="w-full h-fit">{comp}</div>
    </div>
  );
};

export default BottomSheet;
