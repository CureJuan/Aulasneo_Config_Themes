import React from "react";
import BasicConfig from "./BasicConfig";
import Brand from "./Brand";
import ThemesConfig from "./ThemesConfig";
import SendConfig from "./SendConfig";
import LogosConfig from "./LogosConfig";
import "./styles.scss";

const LookAndFeelBrand = () => {

  return (
    <>
      <div className="tabs">
        <div className="tab-container">

          <div id="tab5" className="tab">
            <a href="#tab5">5. Lanzar</a>
            <div className="tab-content">
              <h2>Lanzar sitio</h2>
              <hr />
              <SendConfig />
            </div>
          </div>

          <div id="tab4" className="tab">
            <a href="#tab4">4. Temas</a>
            <div className="tab-content">
              <h2>Selección de Tema</h2>
              <hr />
              <ThemesConfig />
            </div>
          </div>

          <div id="tab3" className="tab">
            <a href="#tab3">3. Dashboad</a>
            <div className="tab-content">
              <h2>Banner del Dashboad</h2>
              <hr />
              <BasicConfig />
            </div>
          </div>

          <div id="tab2" className="tab">
            <a href="#tab2">2. Logos</a>
            <div className="tab-content">
              <h2>Configuracion de Logos</h2>
              <hr />
              <LogosConfig />
            </div>
          </div>

          <div id="tab1" className="tab">
            <a href="#tab1">1. Marca</a>
            <div className="tab-content">
              <h2>Nombre del sitio y marca</h2>
              <hr />
              <Brand />
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default LookAndFeelBrand;