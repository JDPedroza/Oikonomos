import React, { useState } from "react";

import {
  Button,
  Container,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";

//apis
import { sendEmail } from "../api/sendEmail";

//components
import SUser from "./sUser";
import SSimulation from "./sSimulation";
import SSimulated from "./sSimulated";
import SUserMovil from "./sUserMovil";
import SSimulationMovil from "./sSimulationMovil";
import SSimulatedMovil from "./sSimulatedMovil";

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
  gridSimulation: {
    margin: "10px 0px 10px 0px",
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
  gridBenefist: {
    [theme.breakpoints.up("md")]: {
      marginTop: "0",
    },
    marginTop: "25px",
  },
}));

const Simulation = () => {
  const classes = useStyles();
  const [user, setUser] = useState(false);
  const [simulate, setSimulate] = useState(false);
  const [simulated, setSimulated] = useState(false);
  const [data, setData] = useState({
    nameHolder: "",
    phoneHolder: "",
    emailHolder: "",
    houseValue: 0,
    creditValue: 0,
    term: 0,
    age: 0,
    ageHolder2: 0,
    ageHolder3: 0,
    line: "newHome",
    vis: "noVis",
    salary: 0,
    nHolders: 1,
    bbva: {
      shareValue: "0",
      rateValue: "0",
      observation: "",
      subTotalHouse: "",
      subTotalLife: "",
    },
    itau: {
      shareValue: "0",
      rateValue: "0",
      observation: "",
      subTotalHouse: "",
      subTotalLife: "",
      incomeProve: 0,
    },
    colpatria: {
      shareValue: "0",
      rateValue: "0",
      observation: "",
      subTotalHouse: "",
      subTotalLife: "",
    },
  });

  const saveDataUser = (dataUser) => {
    setData((prev) => ({
      ...prev,
      ...dataUser,
    }));
    setSimulate(true);
    setUser(false);
  };

  const calculateSimulation = async (dataSimulation) => {
    setData((prev) => ({
      ...prev,
      ...dataSimulation,
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
        setSimulated(true);
        setSimulate(false);
      } else {
        console.log("error");
      }
    });
  };

  return (
    <div style={{ width: "100%" }}>
      {simulated ? (
        <SSimulated dataSimulation={data} />
      ) : simulate ? (
        <SSimulation calculateSimulation={calculateSimulation} />
      ) : user ? (
        <SUser saveDataUser={saveDataUser} />
      ) : (
        ""
      )}
      <Container>
        <div
          style={{
            minHeight: "100vh",
            display: "grid",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} className={classes.gridBenefist}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <div className="elemento">
                    <div style={{ flexGrow: 2 }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-report-money"
                        width="64"
                        height="64"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="#ffffff"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                        <rect x="9" y="3" width="6" height="4" rx="2" />
                        <path d="M14 11h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
                        <path d="M12 17v1m0 -8v1" />
                      </svg>
                    </div>
                    <div
                      style={{
                        flexGrow: 3,
                        display: "grid",
                        alignContent: "center",
                      }}
                    >
                      <Typography variant="body1" align="center" fullWidth>
                        Las mejores tasas.
                      </Typography>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className="elemento">
                    <div style={{ flexGrow: 2 }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-activity"
                        width="60"
                        height="60"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="#ffffff"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 12h4l3 8l4 -16l3 8h4" />
                      </svg>
                    </div>
                    <div
                      style={{
                        flexGrow: 3,
                        display: "grid",
                        alignContent: "center",
                      }}
                    >
                      <Typography variant="body1" align="center" fullWidth>
                        Un asesor experto en todos los bancos te ayudará.
                      </Typography>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className="elemento">
                    <div style={{ flexGrow: 2 }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-coin"
                        width="60"
                        height="60"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="#ffffff"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="12" cy="12" r="9" />
                        <path d="M14.8 9a2 2 0 0 0 -1.8 -1h-2a2 2 0 0 0 0 4h2a2 2 0 0 1 0 4h-2a2 2 0 0 1 -1.8 -1" />
                        <path d="M12 6v2m0 8v2" />
                      </svg>
                    </div>
                    <div
                      style={{
                        flexGrow: 3,
                        display: "grid",
                        alignContent: "center",
                      }}
                    >
                      <Typography variant="body1" align="center" fullWidth>
                        Un asesor experto en todos los bancos te ayudará.
                      </Typography>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className="elemento">
                    <div style={{ flexGrow: 2 }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-friends"
                        width="60"
                        height="60"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="#ffffff"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="7" cy="5" r="2" />
                        <path d="M5 22v-5l-1 -1v-4a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4l-1 1v5" />
                        <circle cx="17" cy="5" r="2" />
                        <path d="M15 22v-4h-2l2 -6a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1l2 6h-2v4" />
                      </svg>
                    </div>
                    <div
                      style={{
                        flexGrow: 3,
                        display: "grid",
                        alignContent: "center",
                      }}
                    >
                      <Typography variant="body1" align="center" fullWidth>
                        Mejora las condiciones de tu crédito actual.
                      </Typography>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              style={
                simulated || simulate || user ? { marginBottom: "25px" } : {}
              }
              className={simulated || simulate || user ? classes.form : ""}
            >
              {simulated ? (
                <SSimulatedMovil dataSimulation={data} />
              ) : simulate ? (
                <SSimulationMovil calculateSimulation={calculateSimulation} />
              ) : user ? (
                <SUserMovil saveDataUser={saveDataUser} />
              ) : (
                <div
                  container
                  spacing={3}
                  style={{
                    height: "100%",
                    justifyContent: "center",
                    display: "grid",
                    alignContent: "center",
                  }}
                >
                  <div className={classes.gridSimulation}>
                    <div className={classes.titles}>
                      ¿Quieres saber cómo quedaría tu crédito hipotecario con
                      nuestros Bancos?
                    </div>
                  </div>
                  <div className={classes.gridSimulation}>
                    <Typography
                      variant="body1"
                      className="title-banner"
                      align="center"
                    >
                      Te ayudamos a saberlo. Solo necesitamos algunos datos:
                    </Typography>
                  </div>
                  <div className={classes.gridSimulation}>
                    <div style={{ width: "80%", margin: "auto" }}>
                      <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        style={{ color: "white" }}
                        onClick={() => {
                          setUser(true);
                        }}
                      >
                        COMENZA AHORA
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Simulation;
