import "../../App.scss";
import Box from "../Box";
import Header from "../Header/Header";
import { Footer } from "../Footer/Footer";
import BtnSave from "../Alert/BtnSave";
import LookAndFeelBrand from "../../componentes Internos/LookAndFeelBrand";
import SendSite from "../../components/SendSite/SendSite";

const General = ({signOut, user}) => {

  return (
    <>
      <Header signOut={signOut} user={user}/>
      <Box title={"Configuración General"} />
      <SendSite />
      <hr/>
      <LookAndFeelBrand/>
        <hr/>
        <BtnSave />
        <hr/>
      <Footer />
    </>
  );
};

export default General;
