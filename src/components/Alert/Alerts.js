import React from 'react';
import "./Alert.scss";
import { useState } from 'react';
import Alert from "./Alert";
import { useModal } from "../../hooks/useModal";

const Alerts = () => {

  const [isOpenForm, OpenForm, closeForm] = useModal(false);

  const [save, setSave] = useState(false);

  const saveBtn = () => {
    setSave(true);
    console.log(save);
  }
  const unSaveBtn = () => {
    setSave(false);
    console.log(save);
  }

  return (
    <div className='btn_alert'>
      <button className="btn_camb" onClick={OpenForm}>
        Guardar Cambios
      </button>
      <Alert isOpen={isOpenForm} closeModal={closeForm}>
      <div className='btns'>
        <button className="btn_guardar" onClick={() => saveBtn()}>Aplicar Cambios</button>
        <button className="btn_deshacer" onClick={() => unSaveBtn()}>Deshacer Cambios</button>
      </div>
      </Alert>
    </div>
  );
};
export default Alerts;