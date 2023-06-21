type Infos = {
  header_1_1: string;
  header_1_2: string;
  caption: string;
};

const UserResearchPage = ({ infos }: { infos: Infos }) => {
  const string = "usernickname ";
  return (
    <div className="grid gap-y-[18px] mb-10">
      <div className="w-full">
        <div className="w-[250px] header_2 shrink-0 mb-1">
          <span className="block">
            {string}
            {infos?.header_1_1}
          </span>
          <span className="block">{infos?.header_1_2}</span>
        </div>
        <div className="body_2 text-warmgray-100 mb-1">{infos?.caption}</div>
      </div>
    </div>
  );
};

export default UserResearchPage;
