import React from "react";

function Modal({ showModal, isError, isClosing, modalMessage, closeModal }) {
  return (
    showModal && (
      <div className="modal">
        <div
          className={`modal-content ${
            isError ? "modal-error" : "modal-success"
          } ${isClosing ? "modal-exit" : ""}`}
        >
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <p>{modalMessage}</p>
        </div>
      </div>
    )
  );
}

export default Modal;
