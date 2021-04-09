import React from "react";

//desing
import {
  Grid,
  Typography,
  makeStyles,
  Container,
  Fab,
} from "@material-ui/core";

//components
import Simulation from "../components/simulation";
import Carousel from "../components/carousel";

//img
import Image1 from "../multimedia/img/transp-1.webp";
import BBVA from "../multimedia/img/logo-bbva.webp";
import CajaSocial from "../multimedia/img/logo-cs.webp";
import Colpatria from "../multimedia/img/logo-colpatria.webp";
import Itau from "../multimedia/img/logo-itau.webp";
import Work from "../components/work";
import SectionFooter from "../components/footer";

//ICONS
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

//style
const useStyles = makeStyles((theme) => ({
  gridImage: {
    [theme.breakpoints.up("md")]: {
      display: "block",
      paddingBottom: 0,
    },
    display: "none",
  },
  titles: {
    [theme.breakpoints.up("md")]: {
      fontSize: "2rem",
      lineHeight: 1.2,
      color: "white",
      textShadow: "black 0.1em 0.1em 0.2em",
      textAlign: "center",
    },
    textAlign: "center",
    fontSize: "1.5rem",
    lineHeight: 1.2,
    color: "white",
    textShadow: "black 0.1em 0.1em 0.2em",
  },
  logosBank: {
    [theme.breakpoints.up("md")]: {
      width: "80%",
      margin: "auto",
    },
    width: "60%",
    margin: "auto",
  },
  question: {
    [theme.breakpoints.up("md")]: {
      borderTop: "5px solid #77b516",
      borderBottom: "5px solid #77b516",
      padding: 0,
    },
    borderTop: "5px solid #77b516",
    borderBottom: "5px solid #77b516",
    padding: "25px 0 25px 0",
  },
}));

const Main = () => {
  const classes = useStyles();

  return (
    <div>
      <div style={{ position: "fixed", bottom: 25, right: 25, zIndex: 200 }}>
        <a
          href="https://api.whatsapp.com/send/?phone=573158173939&text=Hola%2C+Necesito+mas+informaci%C3%B3n.&app_absent=0"
          target="_blank"
        >
          <Fab
            color="primary"
            aria-label="add"
            style={{ border: "1px solid white" }}
          >
            <WhatsAppIcon style={{ color: "white" }} />
          </Fab>
        </a>
      </div>
      <section className="banner">
        <div className="cont-banner">
          <Simulation />
        </div>
      </section>
      <div className={classes.question}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} className={classes.gridImage}>
              <img
                src={Image1}
                alt="image1"
                style={{ width: "100%", height: "100%" }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <div
                style={{
                  display: "grid",
                  alignContent: "center",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} md={12}>
                    <Typography variant="h2" className={classes.titles}>
                      ¿En qué consiste nuestro trabajo?
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <div style={{ textAlign: "center" }}>
                      <Typography className="title-banner">
                        Somos Asesores externos de los bancos aliados, que te
                        ayudan a ahorrar tiempo y dinero en la búsqueda del
                        crédito que necesitas. Con información precisa, te
                        acompañamos en todo el proceso hasta el desembolso de tu
                        crédito, asegurando que las condiciones ofrecidas, sean
                        las mismas que el banco de tu selección haya otorgado.
                      </Typography>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <Carousel />
      <div
        style={{
          borderTop: "5px solid #77b516",
          borderBottom: "5px solid #77b516",
          padding: "25px 0 25px 0",
        }}
      >
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <Typography variant="h4" align="center">
                Nuestros bancos aliados
              </Typography>
            </Grid>
            <Grid item xs={12} md={3}>
              <div
                style={{
                  height: "100%",
                  display: "grid",
                  alignContent: "center",
                  justifyContent: "center",
                }}
              >
                <img src={BBVA} alt="logoBBVA" className={classes.logosBank} />
              </div>
            </Grid>
            <Grid item xs={12} md={3}>
              <div
                style={{
                  height: "100%",
                  display: "grid",
                  alignContent: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={CajaSocial}
                  alt="logoCajaSocial"
                  className={classes.logosBank}
                />
              </div>
            </Grid>
            <Grid item xs={12} md={3}>
              <div
                style={{
                  height: "100%",
                  display: "grid",
                  alignContent: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={Colpatria}
                  alt="logoColpatria"
                  className={classes.logosBank}
                />
              </div>
            </Grid>
            <Grid item xs={12} md={3}>
              <div
                style={{
                  height: "100%",
                  display: "grid",
                  alignContent: "center",
                  justifyContent: "center",
                }}
              >
                <img src={Itau} alt="logoItau" className={classes.logosBank} />
              </div>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography variant="h5" align="center">
                Con nuestros bancos aliados, buscamos la mejor opción para tu
                crédito hipotecario, según tu perfil y tus necesidades, te
                asesoramos para mostrarte la mejor opción.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </div>
      <section>
        <Work />
      </section>
      <SectionFooter />
    </div>
  );
};

export default Main;
