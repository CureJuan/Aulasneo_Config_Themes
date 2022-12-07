import React from "react";
import "../../App.scss";
import Box from "../Box";
import { Col } from "../Col/index";
import { Row } from "../Row/index";
import CardOpinion from "../CardOpinion/index";
import imagen1 from "../Imagenes/a.png";
import imagen2 from "../Imagenes/b.png";
import imagen3 from "../Imagenes/c.png";
import imagen4 from "../Imagenes/d.jpg";
import imagen5 from "../Imagenes/e.png";
import imagen6 from "../Imagenes/f.jpg";

const Articles = [
  {
    id: "1",
    image: imagen1
  },
  {
    id: "2",
    image: imagen2
  },
  {
    id: "3",
    image: imagen3
  },
  {
    id: "4",
    image: imagen4
  },
  {
    id: "5",
    image: imagen5
  },
  {
    id: "6",
    image: imagen6
  },
];

const Opinion = () => {
  const articles = Articles;
  return (
    <>
      <Box title={"Proyectos realizados"} />
      <div className="wrapper2">
        <Row>
          {articles.map((article) => (
            <Col key={article.id}>
              <CardOpinion
                image={article.image}
              />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default Opinion;
