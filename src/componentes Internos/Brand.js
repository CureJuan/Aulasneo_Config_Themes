import React from "react";
import "./styles.scss";

const Brand = () => {

  return (
    <>
      <h5>Nombre de la Organización</h5>
      <p>Nombre que se mostrará en todo el sitio al referirse a sí mismo, por ejemplo, en la pestaña del navegador</p>
      <img width="50%" src="https://control.edunext.co/sample_images/settings/look_and_feel/brand/site-name.png"></img>
      <input type="text" placeholder="Nombre de la empresa"></input>
      <hr />
      <h5>Logo</h5>
      <p>Este logotipo representará su iniciativa y se ubicará en el encabezado y pie de página de su sitio de manera predeterminada; sin embargo, más adelante puede editar y cambiar el logotipo de pie de página en la configuración básica de pie de página.
        Para obtener los mejores resultados, cargue su logotipo en formato png con fondo transparente.</p>
      <div className="setLogo">
      <img width="50%" src="https://control.edunext.co/sample_images/theming/bragi/look_and_feel/brand/your-site-logo.png" />
      <div className="setLogo2">
      <img className="kirigami-edit__preview-src" src="https://s3.amazonaws.com/enext-analytics/usercontent/default.png" alt="Picture"></img>
      <input className="imgfile2" id="imgfile--kirigami-edit__modal--kiri-logo" type="file" accept="image/png, image/jpeg, .ico" />
      </div>
      </div>
      <hr />
      <h5>Favicon</h5>
      <p>Imagen de Favicon para las páginas del sitio.
         Un favicon (abreviatura de ícono favorito), también conocido como ícono de acceso directo, ícono de sitio web, ícono de pestaña, ícono de URL o ícono de marcador, es un archivo que contiene íconos pequeños asociados con el sitio.
         Para obtener los mejores resultados, utilice una imagen .png o .ico con fondo transparente, 32 px de ancho y 32 px de alto</p>
      <div className="setLogo">
      <img width="50%" height="50%" src="https://control.edunext.co/sample_images/theming/bragi/look_and_feel/brand/favicon.png"/>
      <div className="setLogo2">
      <img class="kirigami-edit__preview-src" src="https://d1uwn6yupg8lfo.cloudfront.net/edxsites/aegir-images/favicon.ico" alt="Picture"></img>
      <input className="imgfile2" id="imgfile--kirigami-edit__modal--kiri-logo" type="file" accept="image/png, image/jpeg, .ico" />
      </div>
      </div>
    </>
  );
};

export default Brand;