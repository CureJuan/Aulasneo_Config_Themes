import React, { useEffect, useRef, useState } from "react";
import "./styles.scss";
import banner from '../components/Imagenes/banner.png';
import BtnSave from "../components/Alert/BtnSave";
import selec4 from "../components/Imagenes/4A.png"

const BasicConfig = () => {

  const refer = useRef();

  const uploadFiles = () =>{
    refer.current.click()
  }

  // BANNER
  const [bannerUrl, setBannerUrl] = useState("");
  const [previewBanner, setPreviewBanner] = useState(banner);
  
  useEffect(() =>{
    if(bannerUrl){
      const render = new FileReader()
      render.onloadend = ()=>{
        setPreviewBanner(render.result.toString())
      }
      render.readAsDataURL(bannerUrl)
    }else{
      setPreviewBanner('')
    }
  },[bannerUrl]);

  return (
    <>
      <h5>Banner</h5>
      <p>Imagen del banner que se usará en el panel del estudiante.
         Tamaño recomendado: 1840px ancho x 550px alto.</p>
      <div className="setLogo3">
      <img width="50%" src={selec4} />
        <div className="setLogo2">
        
        {
          bannerUrl
          ?
          <img width="100%" className="preview-src" src={previewBanner} onClick={uploadFiles} alt="Picture" id="inputFieldFavic"></img>
          :
          <img width="100%" className="preview-src" src={banner} alt="Picture" id="inputFieldFavic"></img>
          }

          <input 
          className="imgfile2"
          type="file"
          accept="image/png, image/jpeg, .ico"
          ref={refer}
          onChange={(e)=>{
            const file = e.target.files[0]
            if (file && file.type.substring(0,5)==='image'){
              setBannerUrl(file)
            }else{
              setBannerUrl(null)
            }
          }} 
          />
        </div>
      </div>
      <hr />
      <BtnSave previewBanner={previewBanner}/>
    </>
  );
};

export default BasicConfig;