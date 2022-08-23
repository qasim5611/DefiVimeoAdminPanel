import {
  CREATE_MEMBER,
  DELETE_MEMBER,
  UPDATE_MEMBER,
  ABOUTUS_DATA,
} from "../constat";
import history from "../../components/history/history";

let initState = {
  msg: null,
  success: null,
  isMemberDeleted: "",
  companyEditMsg: null,
  isMemberUpdated: null,
  AboutusData: "",
};

export function TeamReducer(state = initState, action) {
  switch (action.type) {
    case CREATE_MEMBER:
      console.log("reducer run TeamReducer", action.payload);

      console.log("reducer run", action.payload.user);

      // setTimeout(() => {
      //   history.push("/form");
      // });

      return {
        ...state,
        msg: action.payload.msg,
      };

    case DELETE_MEMBER:
      // state.isArticleDeleted = action.payload;
      state.isMemberDeleted = action.payload.msg;

      return {
        ...state,
        isMemberDeleted: action.payload.msg,
      };

      // console.log("DELETE_SERVICE run", action.payload);

      // console.log(action.payload.msg);

      // return {
      //   ...state,
      //   isArticleDeleted: action.payload.msg,
      // };

      break;

    case UPDATE_MEMBER:
      // state.isMemberUpdated = action.payload;
      console.log("isMemberUpdated run", action.payload.user);

      return {
        ...state,
        isMemberUpdated: action.payload.msg,
      };
      break;

    case ABOUTUS_DATA:
      // state.isMemberUpdated = action.payload;
      console.log("isMemberUpdated run", action.payload);

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
