import React, { useEffect, useState } from "react";
import "./styles.scss";
import BtnSave from "../components/Alert/BtnSave";
import selec1 from "../components/Imagenes/1A.png"
import CrudForm from "./CrudForm";


const Brand = () => {

  return (
    <>
      <h5>Nombre del Sitio</h5>
      <p>Nombre que se mostrará en todo el sitio al referirse a sí mismo, e-mail y URL del mismo</p>
      <div className="setLogo">
        <img width="50%" src={selec1}></img>
        <CrudForm />
      </div>
      <hr />
      <BtnSave/>
    </>
  );
};

export default Brand;