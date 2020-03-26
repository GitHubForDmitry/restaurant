import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import "./modal.css";

const Modal = props => {
  const { isModalOpen, closeModal } = useContext(AppContext);
  const { children } = props;

  return (
    <div
      className="modal"
      style={{
        display: isModalOpen ? "block" : "none"
      }}
    >
      <div className="modal__wrapper" onClick={closeModal} />
      <div onClick={closeModal} />
      <div className="modal__inner">{children}</div>
    </div>
  );
};

export default Modal;
