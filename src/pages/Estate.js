import React, { Component } from "react";

//css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//desing
import { Paper, Typography, IconButton } from "@material-ui/core";
import Slider from "react-slick";

//icons
import OpenWithIcon from "@material-ui/icons/OpenWith";

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

export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
      image: "",
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  handleOpenImage = (link) => {
    console.log(link);
  };

  render() {
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
    };

    const settingsSlider2 = {
      variableWidth: true,
      pauseOnHover: true,
    };

    return (
      <Paper style={{ margin: "20px", border: "2px solid #77b516" }}>
        <div style={{ display: "flex" }}>
          <div style={{ width: "40%", borderRight: "5px solid #77b516" }}>
            <Slider
              asNavFor={this.state.nav2}
              ref={(slider) => (this.slider1 = slider)}
              {...settingsSlider1}
            >
              {this.props.dataEstate.photos.map((link, idx) => (
                <div>
                  <div style={{ position: "absolute" }}>
                    <IconButton
                      onClick={() => {
                        this.handleOpenImage(idx);
                      }}
                    >
                      <OpenWithIcon color="primary" />
                    </IconButton>
                  </div>
                  <img
                    src={link}
                    alt={`img${idx}`}
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
              <Typography variant="h5" align="right">
                {`${this.props.dataEstate.neighborhood}, ${this.props.dataEstate.stratum}`}
              </Typography>
              <Typography
                variant="h6"
                align="right"
              >{`${this.props.dataEstate.address}, ${this.props.dataEstate.city}`}</Typography>
              <Typography variant="body1">{`Area: ${this.props.dataEstate.area} m2`}</Typography>
              <Typography variant="body1">{`Habitaciones: ${this.props.dataEstate.nRooms}`}</Typography>
              <Typography variant="body1">{`Baños: ${this.props.dataEstate.nBathrooms}`}</Typography>
              <Typography variant="body2">{`Descripcion: ${this.props.dataEstate.description}`}</Typography>
              <Typography variant="h5">{`Valor: ${this.props.dataEstate.value}`}</Typography>
            </div>
          </div>
        </div>
        <div style={{ background: "#77b516", padding: "5px 35px 5px 35px" }}>
          <Slider
            asNavFor={this.state.nav1}
            ref={(slider) => (this.slider2 = slider)}
            slidesToShow={3}
            swipeToSlide={true}
            focusOnSelect={true}
            {...settingsSlider2}
          >
            {this.props.dataEstate.photos.map((link, idx) => (
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
  }
}
