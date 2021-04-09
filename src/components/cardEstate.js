import React, { useState, useEffect } from "react";

//css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//desing
import { Paper, Typography, IconButton } from "@material-ui/core";
import Slider from "react-slick";

//icons
import OpenWithIcon from "@material-ui/icons/OpenWith";

//components
import FullScreenImage from "./fullScreenImage";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

const CardEstate = ({ dataEstate, handleOpen }) => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [current, setCurrent] = useState(0);
  let slider1 = [];
  let slider2 = [];

  const settingsSlider1 = {
    centerPadding: "60px",
    dots: false,
    infinite: true,
    autoplay: true,
    fade: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    adaptiveHeight: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    afterChange: (current) => setCurrent(current),
  };

  const settingsSlider2 = {
    variableWidth: true,
    pauseOnHover: true,
  };

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, [slider1, slider2]);

  const brideHandleOpen = (current) => {
    handleOpen(dataEstate.photos[current]);
  };

  return (
    <Paper style={{ margin: "20px", border: "2px solid #77b516" }}>
      <div style={{ display: "flex" }}>
        <div style={{ width: "40%", borderRight: "5px solid #77b516" }}>
          <Slider
            asNavFor={nav2}
            ref={(slider) => (slider1 = slider)}
            {...settingsSlider1}
          >
            {dataEstate.photos.map((link, idx) => (
              <div>
                <div style={{ position: "absolute" }} key={`${link}_${idx}`}>
                  <IconButton
                    onClick={() => {
                      brideHandleOpen(current);
                    }}
                  >
                    <OpenWithIcon color="primary" />
                  </IconButton>
                </div>
                <img
                  src={link}
                  alt={`img${idx}_${link}`}
                  style={{ height: "400px", margin: "auto" }}
                  onClick={() => {
                    console.log(link);
                  }}
                />
              </div>
            ))}
          </Slider>
        </div>
        <div style={{ width: "60%", padding: "20px" }}>
          <div
            style={{
              height: "100%",
              display: "grid",
              justifyContent: "start",
              alignContent: "center",
            }}
          >
            <Typography variant="h5" align="center">
              {`${dataEstate.neighborhood}, ${dataEstate.stratum}`}
            </Typography>
            <Typography
              variant="h6"
              align="center"
            >{`${dataEstate.address}, ${dataEstate.city}`}</Typography>
            <Typography variant="body1">{`Area: ${dataEstate.area} m2`}</Typography>
            <Typography variant="body1">{`Habitaciones: ${dataEstate.nRooms}`}</Typography>
            <Typography variant="body1">{`Baños: ${dataEstate.nBathrooms}`}</Typography>
            <Typography variant="body2">{`Descripcion: ${dataEstate.description}`}</Typography>
            <Typography variant="h5">{`Valor: ${dataEstate.value}`}</Typography>
          </div>
        </div>
      </div>
      <div
        style={{
          background: "#77b516",
          padding: "5px 35px 5px 35px",
          width: "100%",
        }}
      >
        <Slider
          asNavFor={nav1}
          ref={(slider) => (slider2 = slider)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
          {...settingsSlider2}
        >
          {dataEstate.photos.map((link, idx) => (
            <div>
              <img
                src={link}
                alt={`img${idx}`}
                style={{
                  height: "150px",
                  paddingRight: "5px",
                  paddingLeft: "5px",
                  cursor: "pointer",
                }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </Paper>
  );
};

export default CardEstate;
