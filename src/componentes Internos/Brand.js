import React, { useState } from "react";
import "./styles.scss";
import Logo from '../components/Imagenes/logo.png';
import BtnSave from "../components/Alert/BtnSave";
import selec1 from "../components/Imagenes/1A.png"
import selec2 from "../components/Imagenes/2A.png"
import selec3 from "../components/Imagenes/3A.png"
import favicon from "../components/Imagenes/favicon.ico"

const Brand = () => {

  const [imageUrl, setImageUrl] = useState(Logo);

  const changeImg = (e) => {
    setImageUrl(e.target.src = imageUrl);
    document.getElementById('inputField').src = { imageUrl };
  }

  return (
    <>
      <h5>Nombre de la Organización</h5>
      <p>Nombre que se mostrará en todo el sitio al referirse a sí mismo, por ejemplo, en la pestaña del navegador</p>
      <div className="setLogo">
        <img width="50%" src={selec1}></img>
        <input type="text" placeholder="Nombre de la empresa"></input>
      </div>
      <hr />

      <h5>Logo</h5>
      <p>Este logotipo representará su iniciativa y se ubicará en el encabezado y pie de página de su sitio de manera predeterminada; sin embargo, más adelante puede editar y cambiar el logotipo de pie de página en la configuración básica de pie de página.
        Para obtener los mejores resultados, cargue su logotipo en formato png con fondo transparente.</p>
      <div className="setLogo3">
        <img width="50%" src={selec2}></img>
          <div className="setLogo2">
          <img width="100%" src={imageUrl} alt="Picture" id="inputField" ></img>
          <input className="imgfile2" type="file" accept="image/png, image/jpeg, .ico" onClick={changeImg} />
        </div>
      </div>
      <hr />

      <h5>Favicon</h5>
      <p>Imagen de Favicon para las páginas del sitio.
        Un favicon (abreviatura de ícono favorito), también conocido como ícono de acceso directo, ícono de sitio web, ícono de pestaña, ícono de URL o ícono de marcador, es un archivo que contiene íconos pequeños asociados con el sitio.
        Para obtener los mejores resultados, utilice una imagen .png o .ico con fondo transparente, 32 px de ancho y 32 px de alto</p>
      <div className="setLogoFavicon">
        <img paddingBooton="10%" width="50%" height="50%" src={selec3} />
        <div className="setLogoFavicon2">
          <img width="20%" className="preview-src" src={favicon} alt="Picture"></img>
          <input className="imgfile2" type="file" accept="image/png, image/jpeg, .ico" />
        </div>
      </div>
      <hr />
      <BtnSave/>
    </>
  );
};

export default Brand;