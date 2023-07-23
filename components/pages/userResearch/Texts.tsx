type Infos = {
  header_1_1: string;
  header_1_2: string;
  caption: string;
};

const UserResearchPage = ({ infos }: { infos: Infos }) => {
  return (
    <div className="grid  mb-7">
      <div className="w-full grid gap-y-1">
        <div className="w-[250px] multiple-24-b shrink-0 mb-1">
          <span className="block">{infos?.header_1_1}</span>
          <span className="block">{infos?.header_1_2}</span>
        </div>
        <div className="multiple-16-m text-neutralgray-900 mb-1">
          {infos?.caption}
        </div>
      </div>
    </div>
  );
};

export default UserResearchPage;
