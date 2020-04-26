import React from "react";
import "./modal.css";

class Modal extends React.Component {

  render() {
    const { children, closeModal, isModalOpen } = this.props;
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
}
}

export default Modal;
