import Clock from "icons/ver3.0/Line Clock.svg";

const PublicationCycle = ({ publicationCycle }) => {
  return (
    <div className="flex label-l text-neutralgray-700 items-start gap-x-1">
      <Clock width="16" height="16" color="#555555" />
      {publicationCycle}
    </div>
  );
};

export default PublicationCycle;
