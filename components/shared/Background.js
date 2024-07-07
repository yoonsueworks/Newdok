const Background = ({ children }) => {
  const wrapperCSS = "w-full h-full px-5 bg-neutralgray-200 overflow-scroll";
  return <div className={wrapperCSS}>{children}</div>;
};

export default Background;
