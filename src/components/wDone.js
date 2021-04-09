import React from "react";

import { Grid, Typography } from "@material-ui/core";
import DoneTask from "../multimedia/img/doneTask.png";
import ErrorTask from "../multimedia/img/errorTask.png";

const WDone = ({ result }) => {
  return (
    <div
      style={{
        width: "50%",
        position: "absolute",
        height: "100%",
        zIndex: 100,
      }}
      className="divWork"
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          float: "right",
          display: "grid",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <div style={{ width: "70%", margin: "auto" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <Grid container spacing={2}>
                <img
                  src={result ? DoneTask : ErrorTask}
                  alt="result"
                  style={{ width: "80%", margin: "auto", paddingBottom: 20 }}
                />
                <Typography variant="h5" align="center">
                  {result
                    ? "Se envio correctamente tu registro, pronto nos contactaremos contigo."
                    : "Hubo un error en el envio de tu registro, intentalo de nuevo o comunicate con nosotros +57 318 5201683."}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default WDone;
