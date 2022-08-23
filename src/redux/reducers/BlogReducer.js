import {
  CREATE_BLOGS,
  DELETE_BLOG,
  UPDATE_BLOG,
  ABOUTUS_DATA,
} from "../constat";
import history from "../../components/history/history";

let initState = {
  msg: null,
  success: null,
  isBlogDeleted: "",
  companyEditMsg: null,
  isBlogUpdated: null,
  AboutusData: "",
};

export function BlogReducer(state = initState, action) {
  switch (action.type) {
    case CREATE_BLOGS:
      console.log("reducer run BlogReducer", action.payload);

      console.log("reducer run", action.payload.user);

      // setTimeout(() => {
      //   history.push("/form");
      // });

      return {
        ...state,
        msg: action.payload.msg,
      };

    case DELETE_BLOG:
      // state.isArticleDeleted = action.payload;
      state.isBlogDeleted = action.payload.msg;

      return {
        ...state,
        isBlogDeleted: action.payload.msg,
      };

      // console.log("DELETE_SERVICE run", action.payload);

      // console.log(action.payload.msg);

      // return {
      //   ...state,
      //   isArticleDeleted: action.payload.msg,
      // };

      break;

    case UPDATE_BLOG:
      // state.isBlogUpdated = action.payload;
      console.log("isBlogUpdated run", action.payload.user);

      return {
        ...state,
        isBlogUpdated: action.payload.msg,
      };
      break;

    default:
      break;
  }
  return state;
}
