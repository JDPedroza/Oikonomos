import React, { Component } from "react";

//icons
import ShareIcon from "@material-ui/icons/Share";
import VisibilityIcon from "@material-ui/icons/Visibility";

//desing
import { IconButton } from "@material-ui/core";

const IconsCard = () => {
  return (
    <div style={{ position: "absolute", zIndex: 100 }}>
      <IconButton>
        <ShareIcon style={{color:"white"}} />
      </IconButton>
      <IconButton>
        <VisibilityIcon style={{color:"white"}} />
      </IconButton>
    </div>
  );
};

export default IconsCard;
