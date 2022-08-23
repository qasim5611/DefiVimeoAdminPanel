import {
  CREATE_TCKNMX,
  DELETE_TOCKENOMCS,
  UPDATE_TCKNMICS,
  ABOUTUS_DATA,
} from "../constat";
import history from "../../components/history/history";

let initState = {
  msg: null,
  success: null,
  isTockenomicsDeleted: "",
  companyEditMsg: null,
  isTockenomicsUpdated: null,
  AboutusData: "",
};

export function TockenomicsReducer(state = initState, action) {
  switch (action.type) {
    case CREATE_TCKNMX:
      console.log("reducer run TockenomicsReducer", action.payload);

      console.log("reducer run", action.payload.user);

      // setTimeout(() => {
      //   history.push("/form");
      // });

      return {
        ...state,
        msg: action.payload.msg,
      };

    case DELETE_TOCKENOMCS:
      // state.isArticleDeleted = action.payload;
      state.isTockenomicsDeleted = action.payload.msg;

      return {
        ...state,
        isTockenomicsDeleted: action.payload.msg,
      };

      // console.log("DELETE_SERVICE run", action.payload);

      // console.log(action.payload.msg);

      // return {
      //   ...state,
      //   isArticleDeleted: action.payload.msg,
      // };

      break;

    case UPDATE_TCKNMICS:
      // state.isTockenomicsUpdated = action.payload;
      console.log("isTockenomicsUpdated run", action.payload.user);

      return {
        ...state,
        isTockenomicsUpdated: action.payload.msg,
      };
      break;

    case ABOUTUS_DATA:
      // state.isTockenomicsUpdated = action.payload;
      console.log("isTockenomicsUpdated run", action.payload);

      return {
        ...state,
        AboutusData: action.payload.user,
      };
      break;

    // case EDIT_ARTICLE:
    //   state.companyEditMsg = "Company Successfully Edited";
    //   setTimeout(() => {
    //     history.push("/");
    //   });

    //   break;

    default:
      break;
  }
  return state;
}
