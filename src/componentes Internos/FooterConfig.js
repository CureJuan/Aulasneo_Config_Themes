import React, { useState } from "react";
import "./styles.scss";
import Logo from '../components/Imagenes/logo.png';
import BtnSave from "../components/Alert/BtnSave";
import selec5 from "../components/Imagenes/5A.png"

const FooterConfig = () => {

  const [imageUrl, setImageUrl] = useState(Logo);

  const changeImg = (e) => {
    setImageUrl(e.target.src = imageUrl);
    document.getElementById('inputField').src = { imageUrl };
  }

  return (
    <>
      <h5>Logo del footer</h5>
      <p>En el pie de página puedes colocar tu logo en blanco y negro para que destaque con su fondo, si no adjuntas logo se utilizará el mismo que adjuntaste en la sección de marca.</p>
      <div className="setLogo4">
      <img  height="50%" width="50%" src={selec5}/>
        <div className="setLogo5">
          <img width="50%" src={imageUrl} alt="Picture" id="inputField" ></img>
          <input placeholder="Selecciona un el archivo" className="imgfile2" type="file" accept="image/png, image/jpeg, .ico" onClick={changeImg} />
        </div>
      </div>
      <hr />
      <BtnSave/>
    </>
  );
};

export default FooterConfig;