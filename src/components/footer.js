import React from "react";

//icons
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Container, Grid, IconButton, Typography } from "@material-ui/core";

const SectionFooter = () => {
  return (
    <footer>
      <div style={{borderBottom: "5px solid #77b516", borderTop: "5px solid #77b516"}}>
        <Container>
          <div style={{ textAlign: "center", padding: "10px 0 10px 0" }}>
            <IconButton>
              <FacebookIcon color="primary" />
            </IconButton>
            <IconButton>
              <InstagramIcon color="primary" />
            </IconButton>
            <IconButton>
              <LinkedInIcon color="primary" />
            </IconButton>
          </div>
        </Container>
      </div>
      <div
        style={{
          background: "#58595b",
          width: "100%",
          padding: "25px 0 25px 0",
        }}
      >
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <Typography align="center" variant="h6" style={{color:"white"}}>
				  CONTACTANOS
			  </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Grid container>
                <div
                  style={{
                    display: "flex",
                    textAlign: "center",
                    margin: "auto",
                  }}
                >
                  <IconButton size="small" disabled>
                    <LocationOnIcon style={{ color: "white" }} />
                  </IconButton>
                  <Typography
                    variant="body1"
                    style={{ color: "white", padding: 3 }}
                  >
                    Calle 26a 13-97
                  </Typography>
                </div>
              </Grid>
            </Grid>
            <Grid item xs={12} md={12}>
              <Grid container>
                <div
                  style={{
                    display: "flex",
                    textAlign: "center",
                    margin: "auto",
                  }}
                >
                  <IconButton size="small" disabled>
                    <EmailIcon style={{ color: "white" }} />
                  </IconButton>
                  <Typography
                    variant="body1"
                    style={{ color: "white", padding: 3 }}
                  >
                    contacto@oikonomos.com.co
                  </Typography>
                </div>
              </Grid>
            </Grid>
            <Grid item xs={12} md={12}>
              <Grid container>
                <div
                  style={{
                    display: "flex",
                    textAlign: "center",
                    margin: "auto",
                  }}
                >
                  <IconButton size="small" disabled>
                    <PhoneIcon style={{ color: "white" }} />
                  </IconButton>
                  <Typography
                    variant="body1"
                    style={{ color: "white", padding: 3 }}
                  >
                    7924569
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div
        style={{
          background: "#212121",
          width: "100%",
          textAlign: "center",
          color: "white",
          padding: "25px 0 25px 0",
        }}
      >
        © Copyright oikonomos.com
      </div>
    </footer>
  );
};

export default SectionFooter;
