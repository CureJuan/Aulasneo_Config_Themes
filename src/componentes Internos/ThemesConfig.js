import React, { useState } from "react";
import "./styles.scss";
import Logo from '../components/Imagenes/logo.png';
import BtnSave from "../components/Alert/BtnSave";
import theme1 from "../components/Imagenes/Dark/Theme_Dark.png"
import theme2 from "../components/Imagenes/Light/Theme_Light.png"
import theme3 from "../components/Imagenes/Cold/Theme_Cold.png"
import theme4 from "../components/Imagenes/Warm/Theme_Warm.png"

const ThemesConfig = () => {

  const [imageUrl, setImageUrl] = useState(Logo);

  const changeImg = (e) => {
    setImageUrl(e.target.src = imageUrl);
    document.getElementById('inputField').src = { imageUrl };
  }

  return (
    <>
      <h5>Theme Dark</h5>
      <p>Seleccione el Theme y guarde todos los cambios, luego lanze el sitio</p>
      <div className="setLogo">
        <img width="50%" src={theme1}></img>
        <button className="btn_theme">Theme Dark</button>
      </div>
      <hr />

     
      <h5>Theme Light</h5>
      <p>Seleccione el Theme y guarde todos los cambios, luego lanze el sitio</p>
      <div className="setLogo">
        <img width="50%" src={theme2}></img>
        <button className="btn_theme">Theme Light</button>
      </div>
      <hr />

      <h5>Theme Cold</h5>
      <p>Seleccione el Theme y guarde todos los cambios, luego lanze el sitio</p>
      <div className="setLogo">
        <img width="50%" src={theme3}></img>
        <button className="btn_theme">Theme Cold</button>
      </div>
      <hr />

      <h5>Theme Warm</h5>
      <p>Seleccione el Theme y guarde todos los cambios, luego lanze el sitio</p>
      <div className="setLogo">
        <img width="50%" src={theme4}></img>
        <button className="btn_theme">Theme Warm</button>
      </div>
      <BtnSave />
    </>
  );
};

export default ThemesConfig;