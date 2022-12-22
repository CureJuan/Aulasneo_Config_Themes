import React, { useState } from "react";
import "./styles.scss";
import Logo from '../components/Imagenes/logo.png';

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
        <img width="50%" src="https://control.edunext.co/sample_images/settings/look_and_feel/brand/site-name.png"></img>
        <input type="text" placeholder="Nombre de la empresa"></input>
      </div>
      <hr />

      <h5>Logo</h5>
      <p>Este logotipo representará su iniciativa y se ubicará en el encabezado y pie de página de su sitio de manera predeterminada; sin embargo, más adelante puede editar y cambiar el logotipo de pie de página en la configuración básica de pie de página.
        Para obtener los mejores resultados, cargue su logotipo en formato png con fondo transparente.</p>
      <div className="setLogo3">
        <img width="50%" src="https://control.edunext.co/sample_images/theming/bragi/look_and_feel/brand/your-site-logo.png" />
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
        <img width="50%" height="50%" src="https://control.edunext.co/sample_images/theming/bragi/look_and_feel/brand/favicon.png" />
        <div className="setLogoFavicon2">
          <img width="20%" className="kirigami-edit__preview-src" src="https://d1uwn6yupg8lfo.cloudfront.net/edxsites/aegir-images/favicon.ico" alt="Picture"></img>
          <input className="imgfile2" id="imgfile--kirigami-edit__modal--kiri-logo" type="file" accept="image/png, image/jpeg, .ico" />
        </div>
      </div>
      <hr />

      <h5>Colores Generales</h5>
      <p>Estos ajustes de color se aplican a todas las páginas del sitio excepto la página de registro/inicio de sesión y la página de información del curso.</p>
      <p>En este ejemplo mostramos los cambios de color en la página de inicio</p>

      <div>
        <span className="h6-title">1. Content_wrapper_background</span>
        <p>En página de inicio: En esta sección, el color se refleja en el
          contenedor en el que se encuentra el catálogo de cursos de la página de inicio.</p>
        <span className="h6-title">2. Container_background</span>
        <p>En la página de inicio: En esta sección, el color afecta el contenedor del curso.</p>
      </div>

      <div className="setLogoFavicon">
        <img width="50%" src="https://control.edunext.co/sample_images/theming/bragi/look_and_feel/brand/general-colors.png"></img>

        <div className="col s12 l6 col--no-spacing">
          <div className="input-field input-field--json col s12 l6">
            <label for="content_wrapper_background" className="h6-title"> content_wrapper_background </label>
            <input id="content_wrapper_background" name="content_wrapper_background" type="text" placeholder="For example: #FFF" />
          </div>
          <div className="input-field input-field--json col s12 l6">
            <label for="container_background" className="h6-title"> container_background </label>
            <input id="container_background" name="container_background" type="text" placeholder="For example: #FFF" />
          </div>

        </div>
      </div>
    </>
  );
};

export default Brand;