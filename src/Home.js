import React from "react";
import Box from "./components/Box/index";
import { Col } from "./components/Col/index";
import { Row } from "./components/Row";
import Card from "./components/Card/index";
import Header from "./components/Header/Header";
import Carrousel from "./components/Carrousel/Carrousel";
import { Footer } from "./components/Footer/Footer";
import Opinion from "./components/Opinion";

const Articles = [
  {
    id: "1",
    title:
      "Plataforma Open edX™ completamente administrada (SaaS)",
  },
  {
    id: "2",
    title:
      "Instalación llave en mano de la Plataforma Open edX™ ",
  },
  {
    id: "3",
    title:
      "PANORAMA™ Analytics Avanzados para la Plataforma Open edX™",
  }
];

function Home({signOut, user}) {
  const articles = Articles;

  return (
    <div>
      <Header signOut={signOut} user={user} />
      <Carrousel />
      <Box title={"Aulasneo Configuración de Temas"} />
      <div>
        <Row>
          {articles.map((article) => (
            <Col key={article.key}>
              <Card className="cards-home"
                title={article.title}
              />
            </Col>
          ))}
        </Row>
       
        <div>
          <hr />
          <Opinion />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
