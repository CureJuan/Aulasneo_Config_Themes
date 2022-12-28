import React from "react";
import "../../App.scss";
import Box from "../Box";
import Header from "../Header/Header";
import { Footer } from "../Footer/Footer";
import Card from "../Card/Card";

const ThemeCold = ({ signOut, user }) => {

  const imgs = [
    {
      id: "1",
      imgCard: require("../Imagenes/Cold/000 - Theme_Cold.png"),
      cardTitle: "Listado de Cursos",
      cardText: "Ejemplo de Listado de Cursos",
    },
    {
      id: "2",
      imgCard: require("../Imagenes/Cold/001 - Theme_Cold.png"),
      cardTitle: "Contenido del Curso",
      cardText: "Esta es la seccion donde ves el contenido del curso",
    },
    {
      id: "3",
      imgCard: require("../Imagenes/Cold/002 - Theme_Cold - Profile.png"),
      cardTitle: "Profile / Perfil",
      cardText: "Esta es la seccion donde configuras tu perfil",
    },
    {
      id: "4",
      imgCard: require("../Imagenes/Cold/003 - Theme_Cold - Account.png"),
      cardTitle: "Account / Cuenta",
      cardText: "Esta es la seccion donde configuras tu cuenta",
    },
  ];

  return (
    <>
      <Header signOut={signOut} user={user} />
      <Box title={"Theme Cold"} />
      <Card
        imgs={imgs}
      />
      <hr />
      <Footer />
    </>
  );
};

export default ThemeCold;
