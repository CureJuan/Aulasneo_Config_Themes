import "./styles.scss";
import SendSite from '../components/SendSite/SendSite'

const SendConfig = () => {

  return (
    <>
      <h5>Lanzar el sitio</h5>
      <p>Una vez guadado todos los cambios y seleccionado el tema lance el sitio para poder aplicarlo en su sitio,
         recuerde que este proceso puede tardar varios minutos y no podra cortarlo.</p>
       
         <hr />
         <div className="titleCenter">
        <SendSite />  
       </div>
    </>
  );
};

export default SendConfig;