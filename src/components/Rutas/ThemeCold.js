import React from "react";
import "../../App.scss";
import Box from "../Box";
import Header from "../Header/Header";
import { Footer } from "../Footer/Footer";
import BtnSave from "../Alert/BtnSave";

const ThemeCold = () => {

  return (
    <div>
      <Header />
      <Box title={"Theme Cold"} />
      
      <BtnSave />
      <hr/>
      <Footer />
    </div>
  );
};

export default ThemeCold;
