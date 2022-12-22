import React from "react";
import "./Send.scss";

const Send = ({ children, isOpen, closeModal }) => {
  const handleModalContainerClick = (e) => e.stopPropagation();
  return (
    <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
      <div className="modal-container" onClick={handleModalContainerClick}>
        <button onClick={closeModal} className="modal-close">
          X
        </button>
        <h2 className="title_alert">ATENCIÓN</h2>
      <hr />
        <p className="conf" >Antes de lanzar el sitio revise bien que haya elegido y salvado todos los cambios.</p>
        <p className="conf" >Este proceso puede tardar unos minutos y no se podrá anular.</p>
         {children}
      </div>
    </article>
  );
};

export default Send;
