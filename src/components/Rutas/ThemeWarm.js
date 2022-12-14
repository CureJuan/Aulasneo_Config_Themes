import React from "react";
import "../../App.scss";
import Header from "../Header/Header";
import { Footer } from "../Footer/Footer";
import Box from "../Box";
import BtnSave from "../Alert/BtnSave";

const ThemeWarm = ({signOut, user}) => {
  return (
    <>
      <Header signOut={signOut} user={user}/>
      <Box title={"Theme Warm"} />

      <BtnSave />
      <hr/>
      <Footer />
    </>
  );
};

export default ThemeWarm;
