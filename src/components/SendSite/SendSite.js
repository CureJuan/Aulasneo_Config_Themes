import React from "react";
import Send from "./Sends";
import { useModalSend } from "../../hooks/useModalSend";
import Sends from "./Sends";

const SendSite = () => {
  const [isOpenForm, closeForm] = useModalSend(false);
  return (
    <div className="btn_send">
      <Send isOpen={isOpenForm} closeModal={closeForm}>
      <Sends/>
      </Send>
    </div>
  );
};

export default SendSite;
