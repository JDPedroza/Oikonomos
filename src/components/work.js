import React, { useState } from "react";

import { Button, Container, Grid, makeStyles } from "@material-ui/core";

//apis
import { sendEmail } from "../api/sendEmail";

//components
import WUser from "./wUser";
import WUserMovil from "./wUserMovil";
import WDone from "./wDone";
import WDoneMovil from "./wDoneMovil";

import Image2 from "../multimedia/img/transp-2.webp";

//style
const useStyles = makeStyles((theme) => ({
  titles: {
    [theme.breakpoints.up("md")]: {
      fontSize: "1.5rem",
      lineHeight: 1.2,
      color: "white",
      textShadow: "black 0.1em 0.1em 0.2em",
      textAlign: "center",
    },
    textAlign: "center",
    fontSize: "1rem",
    lineHeight: 1.2,
    color: "white",
    textShadow: "black 0.1em 0.1em 0.2em",
  },
  form: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    background: "white",
    borderRadius: "10px",
    marginTop: 25,
    marginBottom: 25,
    padding: 20,
  },
  image: {
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
    display: "none",
  },
}));

const Work = () => {
  const classes = useStyles();
  const [data, setData] = useState({
    nameHolder: "",
    phoneHolder: "",
    emailHolder: "",
  });
  const [form, setForm] = useState(false);
  const [done, setDone] = useState(false);
  const [result, setResult] = useState(true);

  const [offSetHeightWork, setOffSetHeightWork] = useState(0);

  const saveDataUser = async (dataUser) => {
    setData((prev) => ({
      ...prev,
      ...dataUser,
    }));

    let dataEmail = {
      to: "gerencia@oikonomos.com.co",
      subject: `NUEVA SIMULACIÓN DE CREDITO, ${data.nameHolder}`,
      html: `<h1 style="color: #77b516;">OIKONOMOS</h1>
			  <p>&nbsp;</p>
			  <p>Te informa que se genero una simulación de credito desde oikonomos.com.co:</p>
			  <p>&nbsp;</p>
			  <table class="editorDemoTable" style="width: 488px; height: 270px;">
			  <tbody>
			  <tr style="height: 18px;">
			  <td style="width: 227px; height: 18px;">Nombre Cliente</td>
			  <td style="width: 245px; height: 18px;">${data.nameHolder}</td>
			  </tr>
			  <tr style="height: 18px;">
			  <td style="width: 227px; height: 18px;">Numero de contacto</td>
			  <td style="width: 245px; height: 18px;">${data.phoneHolder}</td>
			  </tr>
			  <tr style="height: 18px;">
			  <td style="width: 227px; height: 18px;">Correo de contacto</td>
			  <td style="width: 245px; height: 18px;">${data.emailHolder}</td>
			  </tr>
			  </tbody>
			  </table>
			  <p>&nbsp;</p>
			  <p>&nbsp;</p>
			  <p><strong>© 2021 Copyright: OIKONOMOS SOLUCIONES FINANCIERAS S.A.S!</strong></p>
			  <p><i>Soporte Técnico</i><br><i>3209424973</i></p>
			  <p><strong>Por favor, no responder a este correo. :D</strong></p>`,
    };
    await sendEmail(dataEmail).then((dataServer) => {
      if ((dataServer.data = "Sended")) {
        setResult(true);
        setDone(true);
        setForm(false);
      } else {
        setResult(false);
        setDone(true);
      }
    });
  };

  return (
    <div style={{ width: "100%", background: "#77b516" }} id="work">
      {done ? (
        <WDone result={result} height={offSetHeightWork} />
      ) : form ? (
        <WUser saveDataUser={saveDataUser} height={offSetHeightWork} />
      ) : (
        ""
      )}
      <Container>
        <div
          style={{
            display: "grid",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Grid container spacing={2}>
            {done || form ? <Grid item xs={12} md={6}></Grid> : ""}
            <Grid
              item
              xs={12}
              md={6}
              style={done || form ? { marginBottom: "25px" } : {}}
              className={done || form ? classes.form : ""}
            >
              {done ? (
                <WDoneMovil result={result} />
              ) : form ? (
                <WUserMovil saveDataUser={saveDataUser} />
              ) : (
                <div
                  style={{
                    display: "grid",
                    justifyContent: "center",
                    alignContent: "center",
                    height: "100%",
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                      <div className={classes.titles}>
                        ¿Te gustaría trabajar con nosotros?
                      </div>
                    </Grid>
                    <Grid item xs={12} md={12}>
                      Somos BPO con más de 50 asesores Freelance, con una
                      excelente tabla de comisiones para todos los bancos.
                      Nuestra garantía es un servicio de información precisa y
                      pronta, respaldada con la organización de un equipo de
                      trabajo atento a las necesidades de cada asesor.
                      Capacitaciones Continuas, y el respaldo de nuestro sistema
                      de gestión online “Integra Oikonomos”, te dan las
                      herramientas para trabajar con tus clientes y ofrecerles
                      un excelente servicio de Atención.
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        style={{ color: "white" }}
                        onClick={() => {
                          var work = document.getElementById("work");
                          setOffSetHeightWork(work.offsetHeight);
                          setForm(true);
                        }}
                      >
                        ME INTERESA
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              )}
            </Grid>
            <Grid item xs={12} md={6} className={classes.image}>
              <img
                src={Image2}
                alt="image2"
                style={{ width: "100%", height: "100%" }}
              />
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Work;
