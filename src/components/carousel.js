import React from "react";

//designs
import { Carousel } from "react-bootstrap";

//img
import Carousel1 from "../multimedia/img/1.webp";
import Carousel2 from "../multimedia/img/2.webp";
import Carousel3 from "../multimedia/img/3.webp";
import Carousel4 from "../multimedia/img/4.webp";

const SectionCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ maxHeight: 650 }}
          src={Carousel1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 style={{ textShadow: "black 0.1em 0.1em 0.2em" }}>
            Oikonomos Soluciones Financieras
          </h3>
          <p style={{ textShadow: "black 0.1em 0.1em 0.2em" }}>
            Tenemos a tu disposición las instalaciones y el equipo de trabajo
            para ayudarte en tu proceso de crédito.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ maxHeight: 650 }}
          src={Carousel2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 style={{ textShadow: "black 0.1em 0.1em 0.2em" }}>
            Oikonomos Soluciones Financieras
          </h3>
          <p style={{ textShadow: "black 0.1em 0.1em 0.2em" }}>
            Tenemos a tu disposición las instalaciones y el equipo de trabajo
            para ayudarte en tu proceso de crédito.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ maxHeight: 650 }}
          src={Carousel3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 style={{ textShadow: "black 0.1em 0.1em 0.2em" }}>
            Oikonomos Soluciones Financieras
          </h3>
          <p style={{ textShadow: "black 0.1em 0.1em 0.2em" }}>
            Tenemos a tu disposición las instalaciones y el equipo de trabajo
            para ayudarte en tu proceso de crédito.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ maxHeight: 650 }}
          src={Carousel4}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 style={{ textShadow: "black 0.1em 0.1em 0.2em" }}>
            Oikonomos Soluciones Financieras
          </h3>
          <p style={{ textShadow: "black 0.1em 0.1em 0.2em" }}>
            Tenemos a tu disposición las instalaciones y el equipo de trabajo
            para ayudarte en tu proceso de crédito.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default SectionCarousel;
