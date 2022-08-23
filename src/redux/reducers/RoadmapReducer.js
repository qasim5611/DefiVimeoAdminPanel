import {
  CREATE_ROADMAP,
  DELETE_ROADMAP,
  UPDATE_ROADMAP,
  ABOUTUS_DATA,
} from "../constat";
import history from "../../components/history/history";

let initState = {
  msg: null,
  success: null,
  isRoadmapDeleted: "",
  companyEditMsg: null,
  isRoadmapUpdated: null,
  AboutusData: "",
};

export function RoadmapReducer(state = initState, action) {
  switch (action.type) {
    case CREATE_ROADMAP:
      console.log("reducer run RoadMapReducer", action.payload);

      console.log("reducer run", action.payload.user);

      // setTimeout(() => {
      //   history.push("/form");
      // });

      return {
        ...state,
        msg: action.payload.msg,
      };

    case DELETE_ROADMAP:
      // state.isArticleDeleted = action.payload;
      state.isRoadmapDeleted = action.payload.msg;

      return {
        ...state,
        isRoadmapDeleted: action.payload.msg,
      };

      // console.log("DELETE_SERVICE run", action.payload);

      // console.log(action.payload.msg);

      // return {
      //   ...state,
      //   isArticleDeleted: action.payload.msg,
      // };

      break;

    case UPDATE_ROADMAP:
      // state.isRoadmapUpdated = action.payload;
      console.log("isRoadmapUpdated run", action.payload.user);

      return {
        ...state,
        isRoadmapUpdated: action.payload.msg,
      };
      break;

    default:
      break;
  }
  return state;
}
