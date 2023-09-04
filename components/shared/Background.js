const Background = ({ children }) => {
  const wrapperCSS = "w-full h-full px-5 bg-beige-100 overflow-scroll";
  return <div className={wrapperCSS}>{children}</div>;
};

export default Background;
