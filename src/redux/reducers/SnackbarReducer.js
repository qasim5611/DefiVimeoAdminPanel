import {
  SET_SNACKBAR
} from "../constat";
import { useNavigate } from "react-router-dom";

import history from "../../components/history/history";
import Cookies from "universal-cookie";


let token = localStorage.getItem("token");




var initState = {
  snackbarOpen: false,
  snackbarType: "success",
  snackbarMessage: "",
};

export function SnackbarReducer(state = initState, action) {
  //  const navigate = useNavigate();

  const cookies = new Cookies();

  switch (action.type) {
    case SET_SNACKBAR:
      console.log("action.payload.SET_SNACKBAR");
      // console.log(action.payload.SET_SNACKBAR);
      console.log(action);


      const { snackbarOpen, snackbarMessage, snackbarType } = action;
      return {
        ...state,
        
        snackbarOpen,
        snackbarType,
        snackbarMessage,
      };
      break;
    default:
  }
  return state;
}


export const setSnackbar = ( snackbarOpen, snackbarType = "success", snackbarMessage = "") => ({
  type: SET_SNACKBAR,
  snackbarOpen,
  snackbarType,
  snackbarMessage
})