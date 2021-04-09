import { Container, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import CardEstate from "../components/cardEstate";

//component
import FullScreenImage from "../components/fullScreenImage";

const Estates = () => {
  const [dataEstates, setDataEstates] = useState([]);
  const [open, setOpen] = useState(false);
  const [link, setLink] = useState("");

  useEffect(() => {
    var xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      "https://us-central1-integra-oikonomos.cloudfunctions.net/listEstates",
      true
    );
    xhr.onload = function (e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          var jsonData = JSON.parse(xhr.responseText);
          setDataEstates(jsonData);
          console.log(jsonData);
        } else {
          console.error(xhr.statusText);
        }
      }
    }.bind(this);
    xhr.onerror = function (e) {
      console.error(xhr.statusText);
    };
    xhr.send(null);
  }, []);

  const handleOpen = (link) => {
    setOpen(true);
    setLink(link);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      <FullScreenImage open={open} handleClose={handleClose} link={link} />
      <Container style={{ paddingTop: 25, paddingBottom: 25 }}>
        {dataEstates.length !== 0
          ? dataEstates.map((estate) => (
              <CardEstate dataEstate={estate} handleOpen={handleOpen} />
            ))
          : ""}
      </Container>
    </div>
  );
};

export default Estates;
