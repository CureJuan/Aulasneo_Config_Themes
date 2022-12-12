import React from "react";
import ModalLogin from "./ModalLogin";
import { useModal } from "../../hooks/useModal";
import FormLogin from "./FormLogin";

const ModalsLogin = () => {
  const [isOpenForm, OpenForm, closeForm] = useModal(false);
  return (
    <div>
      <button className="btn_ingresar" onClick={OpenForm}>
        INGRESAR
      </button>
      <ModalLogin isOpen={isOpenForm} closeModal={closeForm}>
        <FormLogin />
      </ModalLogin>
    </div>
  );
};

export default ModalsLogin;
