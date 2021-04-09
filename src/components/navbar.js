import React from "react";

//packages
import PropTypes from "prop-types";

//desing
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Slide,
  useScrollTrigger,
  IconButton,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//icons
import MenuIcon from "@material-ui/icons/Menu";

//img
import logo from "../multimedia/img/logo_only_logo_original.svg";
import logotype from "../multimedia/img/logotype.svg";

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: "white",
    flexGrow: 1,
    margin: 0,
  },
  logo: {
    width: "25%",
    padding: 10,
  },
  logotype: {
    width: "45%",
    padding: 10,
  },
  title: {
    [theme.breakpoints.up("md")]: {
      flexGrow: 2,
    },
    flexGrow: 3,
  },
  containerMenu: {
    [theme.breakpoints.up("md")]: {
      display: "grid",
      justifyContent: "end",
      height: "100%",
      alignContent: "center",
    },
    display: "none",
  },
  menu: {
    [theme.breakpoints.up("md")]: {
      width: "100%",
      display: "flex",
    },
    display: "none",
  },
  menuButton: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    display: "grid",
    justifyContent: "center",
    textAlign: "center",
    height: "100%",
    margin: "auto",
  },
}));

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function Navbar(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Grid container spacing={0}>
              <Grid item xs={10} md={4}>
                <img src={logo} className={classes.logo} alt="logo" />
                <img
                  src={logotype}
                  className={classes.logotype}
                  alt="logotype"
                />
              </Grid>
              <Grid item xs={2} md={8}>
                <div className={classes.containerMenu}>
                  <div className={classes.menu}>
                    <div color="inherit" className="nav-link">
                      Nuestro trabajo
                    </div>
                    <div color="inherit" className="nav-link">
                      Sobre nosotros
                    </div>
                    <div color="inherit" className="nav-link">
                      Bancos aliados
                    </div>
                    <div color="inherit" className="nav-link">
                      ¿Quieres trabajar con nosotros?
                    </div>
                    <div color="inherit" className="nav-link">
                      Nuestro inmuebles
                    </div>
                    <div color="inherit" className="nav-link">
                      Contactanos
                    </div>
                  </div>
                </div>
                <div className={classes.menuButton}>
                  <div>
                    <IconButton
                      className={classes.menuButton}
                      color="primary"
                      aria-label="menu"
                    >
                      <MenuIcon />
                    </IconButton>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}
