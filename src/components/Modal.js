import React, { useContext } from "react";
import AppContext from "../context/AppContext";

const Modal = props => {
  const { isModalOpen, closeModal } = useContext(AppContext);
  const { children } = props;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "auto",
        zIndex: 1,
        display: isModalOpen ? "block" : "none"
      }}
    >
      <div
        style={{
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)"
        }}
        onClick={closeModal}
      />
      <div onClick={closeModal} />
      <div
        style={{
          position: "relative",
          width: 500,
          padding: 20,
          boxSizing: "border-box",
          backgroundColor: "#fff",
          margin: "40px auto",
          borderRadius: 3,
          zIndex: 2,
          textAlign: "left",
          boxShadow: "0 20px 30px rgba(0, 0, 0, 0.2)"
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
