import React from "react";
import banner1 from "../Imagenes/banner1.jpg";
import banner2 from "../Imagenes/banner2.jpg";
import banner3 from "../Imagenes/banner3.jpg";

const Carrousel = () => {
  return (
    <div
      id="carouselExampleDark"
      className="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img src={banner1} className="d-block w-100 " alt="banner 1" />
          <div className="carousel-caption d-none d-md-block">
            <h5 >Producción de Contenidos Audiovisuales</h5>
            <p>Producimos contenidos en video, animación, audios y presentaciones para la creación de sus cursos y capacitaciones, a medida de sus necesidades.</p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src={banner2} className="d-block w-100" alt="banner 2" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Administración de Programas de Capacitación Digital</h5>
            <p>
            Gestionamos la de capacitación de las organizaciones a través de programas de formación digital, evaluando y reportando los resultados individuales.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={banner3} className="d-block w-100" alt="banner 3" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Gestión Integral de Cursos Online </h5>
            <p>
            Nuestro equipo de operaciones se encarga de la carga de los contenidos, resolviendo todos los temas de formatos, configuraciones y ajustes necesarios. 
            </p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carrousel;
