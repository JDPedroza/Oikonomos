import React, { useState } from "react";

import { Button, Grid, Typography, TextField } from "@material-ui/core";

const WUser = ({ saveDataUser, height }) => {
  const [errorsUser, setErrorsUser] = useState({
    nameHolder: false,
    phoneHolder: false,
    emailHolder: false,
  });

  const [dataUser, changeDataUser] = useState({
    nameHolder: "",
    phoneHolder: "",
    emailHolder: "",
  });

  const changeData = (e) => {
    const { name, value } = e.target;

    changeDataUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const brideSaveData = () => {
    let name,
      phone,
      email = false;

    if (dataUser.nameHolder === "") {
      name = true;
    }
    if (dataUser.phoneHolder === "") {
      phone = true;
    }
    if (dataUser.emailHolder === "") {
      email = true;
    }
    if (!name && !phone && !email) {
      saveDataUser(dataUser);
    } else {
      setErrorsUser({
        nameHolder: name,
        phoneHolder: phone,
        emailHolder: email,
      });
    }
  };

  return (
    <div
      style={{
        width: "50%",
        position: "absolute",
        height,
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
              <Typography
                color="textPrimary"
                variant="h6"
                fullWidth
                style={{ textAlign: "center" }}
              >
                Datos Personales
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                error={errorsUser.nameHolder}
                label="Nombre Completo"
                variant="outlined"
                name="nameHolder"
                value={dataUser.nameHolder}
                onChange={changeData}
                fullWidth
                type="name"
                helperText={
                  errorsUser.emailHolder
                    ? "Por favor, ingrese la información"
                    : ""
                }
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                error={errorsUser.emailHolder}
                label="Correo de Contacto"
                variant="outlined"
                name="emailHolder"
                fullWidth
                value={dataUser.emailHolder}
                onChange={changeData}
                type="email"
                helperText={
                  errorsUser.emailHolder
                    ? "Por favor, ingrese la información"
                    : ""
                }
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                error={errorsUser.emailHolder}
                label="Numero de Contacto"
                variant="outlined"
                name="phoneHolder"
                fullWidth
                value={dataUser.phoneHolder}
                onChange={changeData}
                type="number"
                helperText={
                  errorsUser.emailHolder
                    ? "Por favor, ingrese la información"
                    : ""
                }
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={12}
              style={{
                width: "100%",
                alignContent: "center",
                display: "flex",
              }}
              alignContent="center"
              alignItems="center"
            >
              <Button
                variant="outlined"
                color="primary"
                onClick={brideSaveData}
                style={{ width: "80%", margin: "auto" }}
              >
                SIGUIENTE
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default WUser;
