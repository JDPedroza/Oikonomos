import React, { useState } from "react";

//desing
import {
  Grid,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Collapse,
  Box,
} from "@material-ui/core";

//icons
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

//imgs
import logoBBVA from "../multimedia/img/bbva_logo.png";
import logoItau from "../multimedia/img/itau_logo.png";
import logoColpatria from "../multimedia/img/colpatria_logo.png";


const SSimulated = ({dataSimulation}) => {
  const [openColpatria, setOpenColpatria] = useState(false);
  const [openItau, setOpenItau] = useState(false);
  const [openBBVA, setOpenBBVA] = useState(false);

  return (
    <div
      style={{
        width: "100%",
        position: "absolute",
        height: "100vh",
        zIndex: 200,
      }}
      className="divSimulation"
    >
      <div
        style={{
          width: "50%",
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
              <img src={logoBBVA} alt="LogoBBVA" style={{ width: "60px" }} />
            </Grid>
            <Grid item xs={12} md={12}>
              <TableContainer>
                <Table aria-label="simple table" size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell />
                      <TableCell align="center">Valor Cuota</TableCell>
                      <TableCell align="center">Valor Tasa EA</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow key="BBVA">
                      <TableCell>
                        <IconButton
                          aria-label="expand row"
                          size="small"
                          onClick={() => setOpenBBVA(!openBBVA)}
                          disabled={dataSimulation.bbva.rateValue === "0"}
                        >
                          {openBBVA ? (
                            <KeyboardArrowUpIcon />
                          ) : (
                            <KeyboardArrowDownIcon />
                          )}
                        </IconButton>
                      </TableCell>
                      <TableCell align="center">
                        {dataSimulation.bbva.shareValue}
                      </TableCell>
                      <TableCell align="center">
                        {dataSimulation.bbva.rateValue}
                      </TableCell>
                    </TableRow>
                    <TableRow key="subTotals">
                      <TableCell
                        style={{
                          paddingBottom: 0,
                          paddingTop: 0,
                        }}
                        colSpan={12}
                      >
                        <Collapse in={openBBVA} timeout="auto" unmountOnExit>
                          <Box margin={1}>
                            <Table size="small" aria-label="purchases">
                              <TableHead>
                                <TableRow>
                                  <TableCell align="center">
                                    Seguro de Vida
                                  </TableCell>
                                  <TableCell align="center">
                                    Seguro de Vivienda
                                  </TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                <TableCell align="center">
                                  {dataSimulation.bbva.subTotalLife}
                                </TableCell>
                                <TableCell align="center">
                                  {dataSimulation.bbva.subTotalHouse}
                                </TableCell>
                              </TableBody>
                            </Table>
                          </Box>
                        </Collapse>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
              <Typography variant="caption" style={{ color: "red" }}>
                {dataSimulation.bbva.observation}
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <img src={logoItau} alt="LogoItau" style={{ width: "50px" }} />
            </Grid>
            <Grid item xs={12} md={12}>
              <TableContainer>
                <Table aria-label="simple table" size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell />
                      <TableCell align="center">Valor Cuota</TableCell>
                      <TableCell align="center">Valor Tasa EA</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow key="Itau">
                      <TableCell>
                        <IconButton
                          aria-label="expand row"
                          size="small"
                          onClick={() => setOpenItau(!openItau)}
                          disabled={dataSimulation.itau.rateValue === "0"}
                        >
                          {openItau ? (
                            <KeyboardArrowUpIcon />
                          ) : (
                            <KeyboardArrowDownIcon />
                          )}
                        </IconButton>
                      </TableCell>
                      <TableCell align="center">
                        {dataSimulation.itau.shareValue}
                      </TableCell>
                      <TableCell align="center">
                        {dataSimulation.itau.rateValue}
                      </TableCell>
                    </TableRow>
                    <TableRow key="subTotals">
                      <TableCell
                        style={{
                          paddingBottom: 0,
                          paddingTop: 0,
                        }}
                        colSpan={12}
                      >
                        <Collapse in={openItau} timeout="auto" unmountOnExit>
                          <Box margin={1}>
                            <Table size="small" aria-label="purchases">
                              <TableHead>
                                <TableRow>
                                  <TableCell align="center">
                                    Seguro de Vida
                                  </TableCell>
                                  <TableCell align="center">
                                    Seguro de Vivienda
                                  </TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                <TableCell align="center">
                                  {dataSimulation.itau.subTotalLife}
                                </TableCell>
                                <TableCell align="center">
                                  {dataSimulation.itau.subTotalHouse}
                                </TableCell>
                              </TableBody>
                            </Table>
                          </Box>
                        </Collapse>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
              <Typography variant="caption" style={{ color: "red" }}>
                {dataSimulation.itau.observation}
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <img
                src={logoColpatria}
                alt="LogoColpatria"
                style={{ width: "100px" }}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TableContainer>
                <Table aria-label="simple table" size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell />
                      <TableCell align="center">Valor Cuota</TableCell>
                      <TableCell align="center">Valor Tasa EA</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow key="Colpatria">
                      <TableCell>
                        <IconButton
                          aria-label="expand row"
                          size="small"
                          onClick={() => setOpenColpatria(!openColpatria)}
                          disabled={dataSimulation.colpatria.rateValue === "0"}
                        >
                          {openColpatria ? (
                            <KeyboardArrowUpIcon />
                          ) : (
                            <KeyboardArrowDownIcon />
                          )}
                        </IconButton>
                      </TableCell>
                      <TableCell align="center">
                        {dataSimulation.colpatria.shareValue}
                      </TableCell>
                      <TableCell align="center">
                        {dataSimulation.colpatria.rateValue}
                      </TableCell>
                    </TableRow>
                    <TableRow key="subTotals">
                      <TableCell
                        style={{
                          paddingBottom: 0,
                          paddingTop: 0,
                        }}
                        colSpan={12}
                      >
                        <Collapse
                          in={openColpatria}
                          timeout="auto"
                          unmountOnExit
                        >
                          <Box margin={1}>
                            <Table size="small" aria-label="purchases">
                              <TableHead>
                                <TableRow>
                                  <TableCell align="center">
                                    Seguro de Vida
                                  </TableCell>
                                  <TableCell align="center">
                                    Seguro de Vivienda
                                  </TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                <TableCell align="center">
                                  {dataSimulation.colpatria.subTotalLife}
                                </TableCell>
                                <TableCell align="center">
                                  {dataSimulation.colpatria.subTotalHouse}
                                </TableCell>
                              </TableBody>
                            </Table>
                          </Box>
                        </Collapse>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
              <Typography variant="caption" style={{ color: "red" }}>
                {dataSimulation.colpatria.observation}
              </Typography>
            </Grid>
            <Grid container spacing={0}>
              <Grid item xs={12} md={12}>
                <Typography variant="caption" fullWidth component="p">
                  Ingresos a demostrar:{" "}
                  {new Intl.NumberFormat("es-CO", {
                    style: "currency",
                    currency: "COP",
                  }).format(dataSimulation.itau.incomeProve)}
                </Typography>
              </Grid>
              <Grid item xs={12} md={12}>
                <Typography variant="caption" fullWidth component="p">
                  *Valores aproximados
                </Typography>
              </Grid>
              <Grid item xs={12} md={12}>
                <Typography variant="caption" fullWidth component="p">
                  *Tasa sujeta a cambios según vigencia al desembolso
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default SSimulated;
