import { CREATE_SERVICES, DELETE_SERVICE, UPDATE_SERVICE, ABOUTUS_DATA } from "../constat";
import history from "../../components/history/history";

let initState = {
  msg: null,
  success: null,
  isServiceDeleted: "",
  companyEditMsg: null,
  isServiceUpdated: null,
  AboutusData: "",
};

export function ServicesReducer(state = initState, action) {
  switch (action.type) {
    case CREATE_SERVICES:
      console.log("reducer run ServicesReducer", action.payload);

      console.log("reducer run", action.payload.user);

      // setTimeout(() => {
      //   history.push("/form");
      // });

      return {
        ...state,
        msg: action.payload.msg,
      };

    case DELETE_SERVICE:
      // state.isArticleDeleted = action.payload;
      state.isServiceDeleted = action.payload.msg;

      return {
        ...state,
        isServiceDeleted: action.payload.msg,
      };

      // console.log("DELETE_SERVICE run", action.payload);

      // console.log(action.payload.msg);

      // return {
      //   ...state,
      //   isArticleDeleted: action.payload.msg,
      // };

      break;

    case UPDATE_SERVICE:
      // state.isArticleUpdated = action.payload;
      console.log("isServiceUpdated run", action.payload.user);

      return {
        ...state,
        isServiceUpdated: action.payload.msg,
      };
      break;

    case ABOUTUS_DATA:
      // state.isArticleUpdated = action.payload;
      console.log("isArticleUpdated run", action.payload);

      return {
        ...state,
        AboutusData: action.payload.user ,
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
