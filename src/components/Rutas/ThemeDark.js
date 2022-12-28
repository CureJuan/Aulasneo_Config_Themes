import React from "react";
import "../../App.scss";
import Header from "../Header/Header";
import { Footer } from "../Footer/Footer";
import Box from "../Box";
import Card from "../Card/Card";

const ThemeDark = ({ signOut, user }) => {

  const imgs = [
    {
      id: "1",
      imgCard: require("../Imagenes/Dark/000 - Theme_Dark.png"),
      cardTitle: "Listado de Cursos",
      cardText: "Ejemplo de Listado de Cursos",
    },
    {
      id: "2",
      imgCard: require("../Imagenes/Dark/001 - Theme_Dark.png"),
      cardTitle: "Contenido del Curso",
      cardText: "Esta es la seccion donde ves el contenido del curso",
    },
    {
      id: "3",
      imgCard: require("../Imagenes/Dark/002 - Theme_Dark - Profile.png"),
      cardTitle: "Profile / Perfil",
      cardText: "Esta es la seccion donde configuras tu perfil",
    },
    {
      id: "4",
      imgCard: require("../Imagenes/Dark/003 - Theme_Dark - Account.png"),
      cardTitle: "Account / Cuenta",
      cardText: "Esta es la seccion donde configuras tu cuenta",
    },
  ];



  return (
    <>
      <Header signOut={signOut} user={user} />
      <Box title={"Theme Dark"} />
      <Card
        imgs={imgs}
      />
      <hr />
      <Footer />
    </>
  )
};

export default ThemeDark;
