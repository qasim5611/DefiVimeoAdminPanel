import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

import { setSnackbar } from "../../redux/reducers/SnackbarReducer";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Customsnackbar = () => {
  // function snackbar() {

  let dispatch = useDispatch();

  const snackbarOpen = useSelector(
    (state) => state.SnackbarReducer.snackbarOpen
  );
  const snackbarType = useSelector(
    (state) => state.SnackbarReducer.snackbarType
  );
  const snackbarMessage = useSelector(
    (state) => state.SnackbarReducer.snackbarMessage
  );

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    //   setOpen(false);
    dispatch(setSnackbar(false, snackbarType, snackbarMessage));
  };

  return (
    <div>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleClose}
        
      >
        <Alert
          onClose={handleClose}
          severity={snackbarType}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Customsnackbar;
