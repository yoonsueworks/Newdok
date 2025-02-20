import SearchButton from "shared/SearchButton";

const Title = () => {
  return (
    <div>
      <div className="w-full bg-white flex justify-between items-center px-5 py-4">
        <h6>북마크함</h6>
        <SearchButton />
      </div>
    </div>
  );
};

export default Title;
