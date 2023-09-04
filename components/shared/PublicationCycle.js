import Clock from "icons/time_off.svg";

const PublicationCycle = ({ publicationCycle }) => {
  return (
    <div className="flex single-12-m text-neutralgray-900 items-center gap-x-1">
      <Clock width="16" height="16" />
      {publicationCycle}
    </div>
  );
};

export default PublicationCycle;
