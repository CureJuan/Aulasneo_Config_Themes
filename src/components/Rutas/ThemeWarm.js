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
      imgCard: require("../Imagenes/Warm/004 - dashboard_warm.png"),
      cardTitle: "Dashboard",
      cardText: "Esta es la sección donde podes ver todos tus cursos.",
    },
    {
      id: "2",
      imgCard: require("../Imagenes/Warm/005 - home_warm.png"),
      cardTitle: "Home",
      cardText: "El home de la plataforma de estudio.",
    },
    {
      id: "3",
      imgCard: require("../Imagenes/Warm/000 - Theme_Warm.png"),
      cardTitle: "Temario del Curso",
      cardText: "En esta sección podes vel el listado del temario del curso.",
    },
    {
      id: "4",
      imgCard: require("../Imagenes/Warm/001 - Theme_Warm.png"),
      cardTitle: "Contenido del Curso",
      cardText: "Esta es la sección donde ves el contenido del curso.",
    }, 
    {
      id: "5",
      imgCard: require("../Imagenes/Warm/003 - Theme_Warm - Account.png"),
      cardTitle: "Account / Cuenta",
      cardText: "Esta es la sección donde configuras tu cuenta.",
    },     
    {
      id: "6",
      imgCard: require("../Imagenes/Warm/002 - Theme_Warm - Profile.png"),
      cardTitle: "Profile / Perfil",
      cardText: "Esta es la sección donde configuras tu perfil.",
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
