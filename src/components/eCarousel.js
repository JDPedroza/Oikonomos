import React from "react";

//designs
import { Carousel } from "react-bootstrap";


const ECarousel = ({ photos }) => {
  return (
    <Carousel>
      {photos.map((img, idx) => (
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "500px"}}
            src={img}
            alt={`image${idx}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ECarousel;
