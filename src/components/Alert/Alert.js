import React from "react";
import "./Alert.scss";

const Alert = ({ children, isOpen, closeModal }) => {
  const handleModalContainerClick = (e) => e.stopPropagation();
  return (
    <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
      <div className="modal-container" onClick={handleModalContainerClick}>
        <button onClick={closeModal} className="modal-close">
          X
        </button>
        <h2 className="h2_form">Confirmación</h2>
      <hr />
        <p className="conf" >Estas seguro de realizar los cambios</p>

         {children}
      </div>
    </article>
  );
};

export default Alert;
