import React from "react";
import dynamic from "next/dynamic";
import { ModalProvider } from "../../components/Modal/ModalProvider";
const Component = dynamic(() => import("./component/component"), {
  ssr: false,
});

export default function App() {
  return (
    <div className="App container mx-auto px-8 text-gray-700">
      <ModalProvider>
        <Component />
      </ModalProvider>
    </div>
  );
}
