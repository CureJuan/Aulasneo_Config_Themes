import React from "react";
import Alert from "./Alerts";
import { useModal } from "../../hooks/useModal";
import Alerts from "./Alerts";

const BtnSave = ({theme, preview, previewLogo, previewBanner}) => {

  const [isOpenForm, closeForm] = useModal(false);
  return (
    <div className="btn_save">
      <Alert 
       isOpen={isOpenForm}
       closeModal={closeForm}
       theme={theme}
       preview={preview}
       previewLogo={previewLogo}
       previewBanner={previewBanner}>
      <Alerts />
      </Alert>
    </div>
  );
};

export default BtnSave;
