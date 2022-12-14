import React from "react";
import "../../App.scss";
import Box from "../Box";
import Header from "../Header/Header";
import { Footer } from "../Footer/Footer";
import BtnSave from "../Alert/BtnSave";

const ThemeLight = ({signOut, user}) => {
 
  return (
    <>
      <Header signOut={signOut} user={user}/>
      <Box title={"Theme Light"} />

      <BtnSave />
      <hr/>
      <Footer />
    </>
  );
};

export default ThemeLight;
