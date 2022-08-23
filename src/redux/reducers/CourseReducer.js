import {
  CREATE_FOLDER,
  CREATE_VIDEO,
  DELETE_COURSE,
  UPDATE_COURSE,
  DELETE_VIDEO,
  ABOUTUS_DATA,
} from "../constat";
import history from "../../components/history/history";

let initState = {
  courseCreate: "",
  videoCreate: "",
  success: null,
  isCourseDeleted: "",
  isVideoDeleted: "",
  companyEditMsg: null,
  isCourseUpdated: null,
  AboutusData: "",
};

export function CourseReducer(state = initState, action) {
  switch (action.type) {

    
    case CREATE_VIDEO:
      console.log("reducer run CREATE_VIDEO", action.payload);
      console.log("reducer run", action.payload.msg);
      return {
        ...state,
        videoCreate: action.payload.msg,
      };

    case CREATE_FOLDER:
      console.log("reducer run BlogReducer", action.payload);

      console.log("reducer run", action.payload.resp);

      // setTimeout(() => {
      //   history.push("/form");
      // });

      return {
        ...state,
        courseCreate: action.payload.msg,
      };

    case DELETE_COURSE:
      // state.isArticleDeleted = action.payload;
      state.isCourseDeleted = action.payload.msg;

      return {
        ...state,
        isCourseDeleted: action.payload.msg,
      };

      

      case DELETE_VIDEO:
        // state.isArticleDeleted = action.payload;
        state.isCourseDeleted = action.payload.msg;
  
        return {
          ...state,
          isVideoDeleted: action.payload.msg,
        };

      

      // console.log("DELETE_SERVICE run", action.payload);

      // console.log(action.payload.msg);

      // return {
      //   ...state,
      //   isArticleDeleted: action.payload.msg,
      // };

      break;

    case UPDATE_COURSE:
      // state.isCourseUpdated = action.payload;
      console.log("isCourseUpdated", action.payload.user);

      return {
        ...state,
        isCourseUpdated: action.payload.msg,
      };
      break;

    default:
      break;
  }
  return state;
}
