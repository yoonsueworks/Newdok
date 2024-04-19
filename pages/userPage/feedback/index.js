import AppBar from "shared/AppBar";

const Feedback = () => {
  return (
    <div className="xl:w-full md:w-full md:flex md:flex-col">
      <div className="relative w-full">
        <div className="absolute w-full">
          <AppBar
            iconl={true}
            shadow={true}
            textl="서비스 피드백"
            iconr={false}
            func={() => history.back()}
          />
        </div>
      </div>
      <iframe
        src="https://7xrdp4cp24a.typeform.com/to/Lkh7C9zd"
        width="100%"
        height="500px"
      ></iframe>
    </div>
  );
};

export default Feedback;
