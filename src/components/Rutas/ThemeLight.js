import React from "react";
import "../../App.scss";
import Box from "../Box";
import Header from "../Header/Header";
import { Footer } from "../Footer/Footer";
import Card from "../Card/Card";

const ThemeLight = ({ signOut, user }) => {

  const imgs = [

    {
      id: "1",
      imgCard: require("../Imagenes/Light/004 - dashboard_light.png"),
      cardTitle: "Dashboard",
      cardText: "Esta es la sección donde podes ver todos tus cursos.",
    },
    {
      id: "2",
      imgCard: require("../Imagenes/Light/005 - home_light.png"),
      cardTitle: "Home",
      cardText: "El home de la plataforma de estudio.",
    },
    {
      id: "3",
      imgCard: require("../Imagenes/Light/000 - Theme_Light.png"),
      cardTitle: "Temario del Curso",
      cardText: "En esta sección podes vel el listado del temario del curso.",
    },
    {
      id: "4",
      imgCard: require("../Imagenes/Light/001 - Theme_Light.png"),
      cardTitle: "Contenido del Curso",
      cardText: "Esta es la sección donde ves el contenido del curso.",
    }, 
    {
      id: "5",
      imgCard: require("../Imagenes/Light/003 - Theme_Light - Account.png"),
      cardTitle: "Account / Cuenta",
      cardText: "Esta es la sección donde configuras tu cuenta.",
    },     
    {
      id: "6",
      imgCard: require("../Imagenes/Light/002 - Theme_Light - Profile.png"),
      cardTitle: "Profile / Perfil",
      cardText: "Esta es la sección donde configuras tu perfil.",
    },
  ];

  return (
    <>
      <Header signOut={signOut} user={user} />
      <Box title={"Theme Light"} />
      <Card
        imgs={imgs}
      />
      <hr />
      <Footer />
    </>
  );
};

export default ThemeLight;
