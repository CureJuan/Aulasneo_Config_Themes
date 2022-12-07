import "../../App.scss";
import Box from "../Box";
import Header from "../Header/Header";
import { Footer } from "../Footer/Footer";
import BtnSave from "../Alert/BtnSave";
import LookAndFeelBrand from "../../componentes Internos/LookAndFeelBrand";

const General = () => {

  return (
    <>
      <Header />
      <Box title={"Configuración General"} />
      <LookAndFeelBrand/>
        <BtnSave />
        <hr/>
      <Footer />
    </>
  );
};

export default General;
