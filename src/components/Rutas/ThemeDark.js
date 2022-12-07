import React from "react";
import "../../App.scss";
import Header from "../Header/Header";
import { Footer } from "../Footer/Footer";
import Box from "../Box";
import BtnSave from "../Alert/BtnSave";

const ThemeDark = () => {
 return (
    <>
      <Header />
      <Box title={"Theme Dark"} />
  
      <BtnSave />
      <hr/>
      <Footer />
    </>
)};

export default ThemeDark;
