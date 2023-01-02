import React, { useEffect, useRef, useState } from "react";
import "./styles.scss";
import Logo from '../components/Imagenes/logo.png';
import BtnSave from "../components/Alert/BtnSave";
import selec2 from "../components/Imagenes/2A.png"
import selec3 from "../components/Imagenes/3A.png"
import favicon from "../components/Imagenes/favicon.ico"

const LogosConfig = () => {

  //USE REF
  const refer = useRef();

  const uploadFiles = () =>{
    refer.current.click()
  }

// LOGO
  const [imageUrl, setImageUrl] = useState("");
  const [previewLogo, setPreviewLogo] = useState(Logo)

  useEffect(() =>{
    if(imageUrl){
      const render = new FileReader()
      render.onloadend = ()=>{
        setPreviewLogo(render.result.toString())
      }
      render.readAsDataURL(imageUrl)
    }else{
      setPreviewLogo('')
    }
  },[imageUrl])


// FAVICON
  const [faviconUrl, setFaviconUrl] = useState("");
  const [preview, setPreview] = useState(favicon);
  
  useEffect(() =>{
    if(faviconUrl){
      const render = new FileReader()
      render.onloadend = ()=>{
        setPreview(render.result.toString())
      }
      render.readAsDataURL(faviconUrl)
    }else{
      setPreview('')
    }
  },[faviconUrl])

  return (
    <>
    <h5>Logo</h5>
      <p>Este logotipo representará su iniciativa y se ubicará en el encabezado y pie de página de su sitio de manera predeterminada; sin embargo, más adelante puede editar y cambiar el logotipo de pie de página en la configuración básica de pie de página.
        Para obtener los mejores resultados, cargue su logotipo en formato png con fondo transparente.</p>
      <div className="setLogo3">
        <img width="50%" src={selec2}></img>
          <div className="setLogo2"> 

           {
            imageUrl
            ?
            <img width="100%" src={previewLogo} onClick={uploadFiles} alt="Picture" id="inputField"></img>
            :
            <img width="100%" src={Logo} alt="Picture" id="inputField"></img>
           }

          <input
          className="imgfile2"
          type="file"
          accept="image/png, image/jpeg, .ico"
          onChange={(e)=>{
            const file = e.target.files[0]
            if (file && file.type.substring(0,5)==='image'){
              setImageUrl(file)
            }else{
              setImageUrl(null)
            }
          }} 
          />
        </div>
      </div>
      <hr />

      <h5>Favicon</h5>
      <p>Imagen de Favicon para las páginas del sitio.
        Un favicon (abreviatura de ícono favorito), también conocido como ícono de acceso directo, ícono de sitio web, ícono de pestaña, ícono de URL o ícono de marcador, es un archivo que contiene íconos pequeños asociados con el sitio.
        Para obtener los mejores resultados, utilice una imagen .png o .ico con fondo transparente, 32 px de ancho y 32 px de alto</p>
      <div className="setLogoFavicon">
        <img width="50%" height="50%" src={selec3} alt="Picture" />
        <div className="setLogoFavicon2">
          
          {
          faviconUrl
          ?
          <img width="20%" className="preview-src" src={preview} onClick={uploadFiles} alt="Picture" id="inputFieldFavic"></img>
          :
          <img width="20%" className="preview-src" src={favicon} alt="Picture" id="inputFieldFavic"></img>
          }

          <input 
          className="imgfile2"
          type="file"
          accept="image/png, image/jpeg, .ico"
          ref={refer}
          onChange={(e)=>{
            const file = e.target.files[0]
            if (file && file.type.substring(0,5)==='image'){
             setFaviconUrl(file)
            }else{
             setFaviconUrl(null)
            }
          }} 
          />
        </div>
      </div>
      <hr />
      <BtnSave previewLogo={previewLogo} preview={preview}/>
    </>
  );
};

export default LogosConfig;

