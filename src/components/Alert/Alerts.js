import React from 'react';
import "./Alert.scss";
import { useState } from 'react';
import Alert from "./Alert";
import { useModal } from "../../hooks/useModal";

const Alerts = ({theme, preview, previewLogo, previewBanner}) => {

  const [isOpenForm, OpenForm, closeForm] = useModal(false);

  const [save, setSave] = useState(false);
  const [arrayData, setArrayData] = useState ([]);

  const saveBtn = () => {
    setSave(true);
    setArrayData(
      ...arrayData,
      [theme, preview, previewLogo, previewBanner]
  );

    console.log(arrayData)
  }
  const unSaveBtn = () => {
    setSave(false);
    setArrayData([]);

    console.log(arrayData);
  }

  return (
    <div className='btn_alert'>
      <button className="btn_camb" onClick={OpenForm}>
        Guardar Cambios
      </button>
      <Alert
       isOpen={isOpenForm}
       closeModal={closeForm}
       theme={theme} preview={preview}
       previewLogo={previewLogo}
       previewBanner={previewBanner}
       >
      <div className='btns'>
        <button className="btn_guardar" onClick={() => saveBtn()}>Aplicar Cambios</button>
        <button className="btn_deshacer" onClick={() => unSaveBtn()}>Deshacer Cambios</button>
      </div>
      </Alert>
    </div>
  );
};
export default Alerts;