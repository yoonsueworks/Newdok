export default function Layout({ children }) {
  return (
    <div className="flex flex-col justify-between h-screen overflow-scroll">
      {children}
    </div>
  );
}
