import "../../App.scss";
import Box from "../Box";
import Header from "../Header/Header";
import { Footer } from "../Footer/Footer";
import LookAndFeelBrand from "../../componentes Internos/LookAndFeelBrand";

const General = ({signOut, user}) => {

  return (
    <>
      <Header signOut={signOut} user={user}/>
      <Box title={"Configuración General"} />
      <hr/>
      <LookAndFeelBrand/>
        <hr/>
      <Footer />
    </>
  );
};

export default General;
