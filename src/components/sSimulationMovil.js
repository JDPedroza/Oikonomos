import React, { useState } from "react";

//desing
import {
  Button,
  Grid,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";

//packages
import NumberFormat from "react-number-format";
import PropTypes from "prop-types";

//utils
import { BBVA, Colpatria, Itau } from "../utils/calcs";

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
      prefix="$"
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const SSimulationMovil = ({ calculateSimulation }) => {
  const [open, setOpen] = useState(false);
  const [openVis, setOpenVis] = useState(false);

  const [dataSimulation, changeDataSimulation] = useState({
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
  });

  const changeData = (e) => {
    const { name, value } = e.target;

    changeDataSimulation((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const brideSimulation = () => {
    const jsonBBVA = BBVA(null, dataSimulation);
    const jsonItau = Itau(null, dataSimulation);
    const jsonColpatria = Colpatria(null, dataSimulation);
    calculateSimulation({
      ...dataSimulation,
      itau: jsonItau,
      colpatria: jsonColpatria,
      bbva: jsonBBVA,
    });
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        float: "right",
        display: "grid",
        justifyContent: "center",
        alignContent: "center",
        padding: "20px",
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <Typography color="textPrimary" variant="h6">
            Datos
          </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            label="Valor de la vivienda"
            variant="outlined"
            name="houseValue"
            fullWidth
            value={dataSimulation.houseValue}
            onChange={changeData}
            InputProps={{
              inputComponent: NumberFormatCustom,
            }}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            label="Valor del credito"
            variant="outlined"
            name="creditValue"
            fullWidth
            value={dataSimulation.creditValue}
            onChange={changeData}
            InputProps={{
              inputComponent: NumberFormatCustom,
            }}
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <TextField
            label="Plazo"
            variant="outlined"
            name="term"
            fullWidth
            value={dataSimulation.term}
            onChange={changeData}
            type="number"
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <TextField
            label="Ingresos"
            variant="outlined"
            name="salary"
            fullWidth
            value={dataSimulation.salary}
            onChange={changeData}
            InputProps={{
              inputComponent: NumberFormatCustom,
            }}
          />
        </Grid>
        <Grid
          item
          xs={
            parseInt(dataSimulation.nHolders) <= 1
              ? 6
              : parseInt(dataSimulation.nHolders) === 2
              ? 4
              : 12
          }
          md={
            parseInt(dataSimulation.nHolders) <= 1
              ? 6
              : parseInt(dataSimulation.nHolders) === 2
              ? 4
              : 12
          }
        >
          <TextField
            label="Numero Titulares"
            variant="outlined"
            name="nHolders"
            fullWidth
            type="number"
            value={dataSimulation.nHolders}
            onChange={changeData}
          />
        </Grid>
        <Grid
          item
          xs={parseInt(dataSimulation.nHolders) <= 1 ? 6 : 4}
          md={parseInt(dataSimulation.nHolders) <= 1 ? 6 : 4}
        >
          <TextField
            label="Edad Cliente"
            variant="outlined"
            name="age"
            value={dataSimulation.age}
            onChange={changeData}
            fullWidth
            type="number"
          />
        </Grid>
        {parseInt(dataSimulation.nHolders) > 1 ? (
          <Grid item xs={4} md={4}>
            <TextField
              label="Edad Cliente 2"
              variant="outlined"
              name="ageHolder2"
              value={dataSimulation.ageHolder2}
              onChange={changeData}
              fullWidth
              type="number"
            />
          </Grid>
        ) : (
          ""
        )}
        {parseInt(dataSimulation.nHolders) > 2 ? (
          <Grid item xs={4} md={4}>
            <TextField
              label="Edad Cliente 3"
              variant="outlined"
              name="ageHolder3"
              value={dataSimulation.ageHolder3}
              onChange={changeData}
              fullWidth
              type="number"
            />
          </Grid>
        ) : (
          ""
        )}
        <Grid item xs={6} md={6}>
          <FormControl fullWidth>
            <InputLabel>Linea de Credito</InputLabel>
            <Select
              name="line"
              open={open}
              onClose={() => {
                setOpen(false);
              }}
              onOpen={() => {
                setOpen(true);
              }}
              value={dataSimulation.line}
              onChange={changeData}
              fullWidth
            >
              <MenuItem value={"usedHousing"}>Vivienda Usada</MenuItem>
              <MenuItem value={"newHome"}>Vivienda Nueva</MenuItem>
              <MenuItem value={"portfolioPurchase"}>Compra de Cartera</MenuItem>
              <MenuItem value={"newHousingLeasing"}>
                Leasing Habitacional Nuevo
              </MenuItem>
              <MenuItem value={"usedHousingLeasing"}>
                Leasing Habitacional Usado
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6} md={6}>
          <FormControl fullWidth>
            <InputLabel>Tipo de Vivienda</InputLabel>
            <Select
              name="vis"
              open={openVis}
              onClose={() => {
                setOpenVis(false);
              }}
              onOpen={() => {
                setOpenVis(true);
              }}
              value={dataSimulation.vis}
              onChange={changeData}
              fullWidth
            >
              <MenuItem value={"vis"}>VIS</MenuItem>
              <MenuItem value={"noVis"}>No VIS</MenuItem>
            </Select>
          </FormControl>
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
            variant="outline-success"
            style={{
              width: "50%",
              height: "100%",
              fontSize: 15,
              color: "black",
              margin: "auto",
            }}
            onClick={brideSimulation}
          >
            CALCULAR
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default SSimulationMovil;
