import React from "react";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import Modals from "../Formulario/Modals";
import Logo from '../Imagenes/logo.png';

const Header = () => {
  function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }

  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0px";
  }

  return (
    <>
      <div className="header">
        <div id="mySidepanel" className="sidepanel">
          <a
            href="javascript:void(0)"
            className="closebtn"
            onClick={() => closeNav()}
          >
            &times;
          </a>

          <ul>
            <Link
              to="/"
              title="Ir a la página principal"
              className="logo_menu"
              onClick={() => closeNav()}
            >
              Temas
            </Link>
            <hr />
            <li>
              <Link
                to="/general"
                className="link__item"
                onClick={() => closeNav()}
              >
                Configuracion General
              </Link>
            </li>
            <li>
              <Link
                to="/themedark"
                className="link__item"
                onClick={() => closeNav()}
              >
                Theme Dark
              </Link>
            </li>
            <li>
              <Link
                to="/themelight"
                className="link__item"
                onClick={() => closeNav()}
              >
                Theme Light
              </Link>
            </li>
            <li>
              <Link
                to="/themecold"
                className="link__item"
                onClick={() => closeNav()}
              >
                Theme Cold
              </Link>
            </li>
            <li>
              <Link
                to="/themewarm"
                className="link__item"
                onClick={() => closeNav()}
              >
                Theme Warm
              </Link>
            </li>               
          </ul>
        </div>

        <button className="openbtn" onClick={() => openNav()}>
          &#9776; &nbsp; TEMAS &nbsp;
        </button>

        <button className="btn_buscar">
          <FiSearch className="lupa" />
          &nbsp; BUSCAR{" "}
        </button>
        <h1>
          <Link to="/" title="Ir a la página principal" className="logo_header">
          <img className="logo-head" src={Logo}/>
          </Link>{" "}
        </h1>
        <Modals />
        <button className="btn_ingresar">INGRESAR</button>
      </div>
      <div className="sub_menu">
        <p>Soluciones de elearning</p>
        <p>Configura el diseño que mejor se adapte a tu marca</p>
      </div>
    </>
  );
};

export default Header;
