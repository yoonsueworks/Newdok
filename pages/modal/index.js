import React from "react";
import { ModalProvider } from "../../components/Modal/ModalProvider";
import Component from "./component/component";

export default function App() {
  return (
    <div className="App container mx-auto px-8 text-gray-700">
      <ModalProvider>
        <Component />
      </ModalProvider>
    </div>
  );
}
