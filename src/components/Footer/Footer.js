import React from "react";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import Logo from '../Imagenes/logo.png';
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="row">
        <div link="/" className="logo-footer">
          <img src={Logo} className="img-logo" />
        </div>
        <hr />
        <div className="container1">
          <ul className="footer-links">
            <li>
              <Link
                to="/general"
              >
                Configuracion General   /
              </Link>
            </li>
            <li>
              <Link
                to="/themedark"
              >
                Theme Dark   /
              </Link>
            </li>
            <li>
              <Link
                to="/themelight"
              >
                Theme Light   /
              </Link>
            </li>
            <li>
              <Link
                to="/themecold"
              >
                Theme Cold   /
              </Link>
            </li>
            <li>
              <Link
                to="/themewarm"
              >
                Theme Warm
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container2">
        <ul className="col-desksm-4 --left social-icons">
          <li>
            <a
              className="facebook"
              href="https://es-la.facebook.com/"
              target="_black"
            >
              <i className="fa fa-facebook">
                <BsFacebook />
              </i>
            </a>
          </li>
          <li>
            <a
              className="twitter"
              href="https://twitter.com/?lang=es"
              target="_black"
            >
              <i className="fa fa-twitter">
                <BsTwitter />
              </i>
            </a>
          </li>
          <li>
            <a
              className="dribbble"
              href="https://www.instagram.com/"
              target="_black"
            >
              <i className="fa fa-dribbble">
                <BsInstagram />
              </i>
            </a>
          </li>
          <p className="copyright-text">
            Copyright 2022 AULASNEO | Todos los derechos reservados
          </p>
        </ul>
      </div>
    </footer>
  );
};
