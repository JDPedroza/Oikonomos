import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

export default function AlertDialog({ open, handleClose, link }) {
  const brideHandleClose = () => {
    handleClose(false);
  };

  return (
    <Dialog
      open={open}
      onClose={brideHandleClose}
      style={{ maxHeight: "100vh" }}
    >
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <div style={{ height: "100%" }}>
            <img src={link} alt={`image${link}`} style={{ width: "100%" }} />
          </div>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}
