import React from "react";
import "../../App.scss";
import Box from "../Box";
import Header from "../Header/Header";
import { Footer } from "../Footer/Footer";
import BtnSave from "../Alert/BtnSave";

const ThemeLight = () => {
 
  return (
    <>
      <Header />
      <Box title={"Theme Light"} />

      <BtnSave />
      <hr/>
      <Footer />
    </>
  );
};

export default ThemeLight;
