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
      imgCard: require("../Imagenes/Dark/004 - dashboard_dark.png"),
      cardTitle: "Dashboard",
      cardText: "Esta es la sección donde podes ver todos tus cursos.",
    },
    {
      id: "2",
      imgCard: require("../Imagenes/Dark/005 - home_dark.png"),
      cardTitle: "Home",
      cardText: "El home de la plataforma de estudio.",
    },
    {
      id: "3",
      imgCard: require("../Imagenes/Dark/000 - Theme_Dark.png"),
      cardTitle: "Temario del Curso",
      cardText: "En esta sección podes vel el listado del temario del curso.",
    },
    {
      id: "4",
      imgCard: require("../Imagenes/Dark/001 - Theme_Dark.png"),
      cardTitle: "Contenido del Curso",
      cardText: "Esta es la sección donde ves el contenido del curso.",
    }, 
    {
      id: "5",
      imgCard: require("../Imagenes/Dark/003 - Theme_Dark - Account.png"),
      cardTitle: "Account / Cuenta",
      cardText: "Esta es la sección donde configuras tu cuenta.",
    },     
    {
      id: "6",
      imgCard: require("../Imagenes/Dark/002 - Theme_Dark - Profile.png"),
      cardTitle: "Profile / Perfil",
      cardText: "Esta es la sección donde configuras tu perfil.",
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
