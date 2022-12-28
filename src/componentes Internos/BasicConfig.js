import React, { useState } from "react";
import "./styles.scss";
import Logo from '../components/Imagenes/logo.png';
import BtnSave from "../components/Alert/BtnSave";
import selec4 from "../components/Imagenes/4A.png"

const BasicConfig = () => {

  const [imageUrl, setImageUrl] = useState(Logo);

  const changeImg = (e) => {
    setImageUrl(e.target.src = imageUrl);
    document.getElementById('inputField').src = { imageUrl };
  }

  return (
    <>
      <h5>Banner</h5>
      <p>Imagen del banner que se usará en el panel del estudiante.
         Tamaño recomendado: 1840px ancho x 550px alto.</p>
      <div className="setLogo3">
      <img width="50%" src={selec4} />
        <div className="setLogo2">
        <img width="100%" className="kirigami-edit__preview-src" src="https://s3.amazonaws.com/enext-analytics/usercontent/defaultbanner.jpg" alt="Picture"/>
          <input className="imgfile2" type="file" accept="image/png, image/jpeg, .ico" onClick={changeImg} />
        </div>
      </div>
      <hr />
      <BtnSave />
    </>
  );
};

export default BasicConfig;