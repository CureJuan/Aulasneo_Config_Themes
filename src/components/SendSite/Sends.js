import React from 'react';
import "./Send.scss";
import { useState } from 'react';
import Send from "./Send";
import { useModalSend } from "../../hooks/useModalSend";

const Sends = () => {

  const [isOpenForm, OpenForm, closeForm] = useModalSend(false);

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
    <div className='btn_alert_send'>
      <button className="btn_send" onClick={OpenForm}>
        Lanzar Sitio
      </button>
      <Send isOpen={isOpenForm} closeModal={closeForm}>
      <div className='btns_sends'>
        <button className="btn_save_send" onClick={() => saveBtn()}>Lanzar</button>
        <button className="btn_break_send" onClick={() => unSaveBtn()}>Anular</button>
      </div>
      </Send>
    </div>
  );
};
export default Sends;