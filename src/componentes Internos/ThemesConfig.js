import React, { useState } from "react";
import "./styles.scss";
import BtnSave from "../components/Alert/BtnSave";
import theme1 from "../components/Imagenes/Dark/Theme_Dark.png"
import theme2 from "../components/Imagenes/Light/Theme_Light.png"
import theme3 from "../components/Imagenes/Cold/Theme_Cold.png"
import theme4 from "../components/Imagenes/Warm/Theme_Warm.png"

const ThemesConfig = () => {

  const [theme, setTheme] = useState("");

  return (
    <>
      <h5>Theme Dark</h5>
      <p>Este es un tema con color negro, blanco y grises</p>
      <div className="setLogo">
        <img width="50%" src={theme1}></img>
        <button className="btn_theme" value="Dark" onClick={(e) => setTheme(e.target.value)}>Theme Dark</button>
      </div>
      <hr />
     
      <h5>Theme Light</h5>
      <p>Este tema esta diseñado con colores blancos y grises</p>
      <div className="setLogo">
        <img width="50%" src={theme2}></img>
        <button className="btn_theme" value="Light" onClick={(e) => setTheme(e.target.value)}>Theme Light</button>
      </div>
      <hr />

      <h5>Theme Cold</h5>
      <p>Temas con coleres frios, azules, celestes y violetas</p>
      <div className="setLogo">
        <img width="50%" src={theme3}></img>
        <button className="btn_theme" value="Cold" onClick={(e) => setTheme(e.target.value)}>Theme Cold</button>
      </div>
      <hr />

      <h5>Theme Warm</h5>
      <p>Tema con coleres calidos, rojos, amarillos y naranjas</p>
      <div className="setLogo">
        <img width="50%" src={theme4}></img>
        <button className="btn_theme" value="Warm" onClick={(e) => setTheme(e.target.value )}>Theme Warm</button>
      </div>
      <hr />
      <BtnSave theme={theme}/>
    </>
  );
};

export default ThemesConfig;