import React from "react";
import "../../App.scss";
import Header from "../Header/Header";
import { Footer } from "../Footer/Footer";
import Box from "../Box";
import Card from "../Card/Card";

const ThemeWarm = ({ signOut, user }) => {

  const imgs = [
    {
      id: "1",
      imgCard: require("../Imagenes/Warm/000 - Theme_Warm.png"),
      cardTitle: "Listado de Cursos",
      cardText: "Ejemplo de Listado de Cursos",
    },
    {
      id: "2",
      imgCard: require("../Imagenes/Warm/001 - Theme_Warm.png"),
      cardTitle: "Contenido del Curso",
      cardText: "Esta es la seccion donde ves el contenido del curso",
    },
    {
      id: "3",
      imgCard: require("../Imagenes/Warm/002 - Theme_Warm - Profile.png"),
      cardTitle: "Profile / Perfil",
      cardText: "Esta es la seccion donde configuras tu perfil",
    },
    {
      id: "4",
      imgCard: require("../Imagenes/Warm/003 - Theme_Warm - Account.png"),
      cardTitle: "Account / Cuenta",
      cardText: "Esta es la seccion donde configuras tu cuenta",
    },
  ];


  return (
    <>
      <Header signOut={signOut} user={user} />
      <Box title={"Theme Warm"} />

      <Card imgs={imgs} />
      <hr />
      <Footer />
    </>
  );
};

export default ThemeWarm;
