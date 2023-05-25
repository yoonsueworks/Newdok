import React from "react";
import Modal from "../../../components/Modal/Modal";
import { ModalContext } from "../../../components/Modal/ModalProvider";

const Component = () => {
  const { dispatch } = React.useContext(ModalContext);

  return (
    <>
      <Modal />
      <button
        className="mt-6 rounded  bg-purple-700 text-purple-100 px-5 h-12"
        onClick={() =>
          dispatch({
            type: "SET_CONTENT",
            payload: {
              content: "it works!",
              title: "Testing",
            },
          })
        }
      >
        CLICK ME 🐙
      </button>
    </>
  );
};

export default Component;
