import Nav from "../components/Nav";

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <div>{children}</div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}
