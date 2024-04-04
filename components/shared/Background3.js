const Background2 = ({ children }) => {
  const wrapperCSS =
    "w-full h-full overflow-scroll flex flex-col items-center justify-center xl:px-28";
  return <div className={wrapperCSS}>{children}</div>;
};

export default Background2;
