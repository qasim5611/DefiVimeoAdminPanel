import {
  SAVE_FORM,
  GET_FORMS,
  DELETE_FORM,
  FORM_UPDATE,
  SAVE_SIGNUP,
  DUPERR_MSG,
  GET_AUTH,
  DATA_LOGIN,
  LOGOUT,
  ISTOKEN_OK,
  MSG_LOGINS,
  FORG_PASS,
  FORG_PASSERR,
  UPDATEPASS_MSG,
  CLEAR_STATE,
  ISTOKEN_OKTOEDIT,
  ARTICLE_SVE,
  UPVOTE_SET,
  DOWNVOTE_SET,
  ISUSER_VOTED,
} from "../constat";
import { useNavigate } from "react-router-dom";

import history from "../../components/history/history";
import Cookies from "universal-cookie";


let token = localStorage.getItem("token");




var initState = {
  SignupMsg: "",
  LoginMsg: "",

  isVotedBefore: "",

  ArticleData: "",
  Upvotes: [{}],
  Downvotes: [{}],

  Email: "",

  // auth: '',
  // token: '',
  // msg: '',
  TokenMsg: "",

  data: {
    created: "",
    email: "",
    id: "",
    isVerified: "",
    jwtToken: "",
    msg: "",
    name: "",
    referral: "",
    refreshToken: "",
    role: "",
  },
  userDetail: "",
  userInfo: "",

  ForgPassMsg: "",
  ForgPassMsgMail: "",
  PassUpdateMsg: "",

  TokenMsgPassUpdate: "",
};

export function Auth(state = initState, action) {

  //  const navigate = useNavigate();
 
const cookies = new Cookies();
  
  switch (action.type) {
    case DATA_LOGIN:
      console.log("reducer run login", action.payload);

      console.log("reducer run", action.payload.jwtToken);
      

    
      let date = new Date();
       let mydate = date.now;
      if (action.payload.jwtToken) {
        // localStorage.setItem("jwtToken", action.payload.jwtToken);
        cookies.set("jwtToken", action.payload.jwtToken )
        cookies.set("myRole", action.payload.user.role);
        cookies.set("loginID", action.payload.user._id);

        console.log(cookies.get("jwtToken")); // Pacman
      }
      // let tokens = localStorage.getItem("token");

      // setTimeout(() => {
      //   history.push("/form");
      // });

      return {
        ...state,
        // data: action.payload,
        data: action.payload,
        
      };

      break;

    case MSG_LOGINS:
      console.log("reducer run login", action.payload);

      console.log("reducer run", action.payload.user);

      // setTimeout(() => {
      //   history.push("/form");
      // });

      return {
        ...state,
        LoginMsg: action.payload.msg,
      };

      break;

    case LOGOUT:
      // localStorage.removeItem("token");
      cookies.remove("jwtToken");
      
      // cookies.remove("jwtToken", { path: "/", domain: "gaddollcat.herokuapp.com" });  
      // removeCookie("jwtToken");
      // state.userDetail = null;
      // state.userInfo = null;
      // state.TokenMsg = "";
      // state.ErrMsg = "";
      // state.data = "";

      // setTimeout(() => {
      //    navigate("/", { replace: true });s
      // });

      break;

    case FORG_PASSERR:
      console.log("reducer Forgot Pass Err", action.payload);

      return {
        ...state,
        ForgPassMsg: action.payload.msg,
        ForgPassMsgMail: action.payload.user.email,
      };

      break;

    case FORG_PASS:
      console.log("reducer Forgot Pass", action.payload);

      return {
        ...state,
        ForgPassMsg: action.payload.msg,
        // ForgPassMsgMail: action.payload.user.email,
      };

      break;

    case ISTOKEN_OK:
      // console.log(action.payload.data);
      // localStorage.removeItem("token");
      // state.userDetail = null;
      // setTimeout(() => {
      //   history.push("/");
      // });

      return {
        ...state,
        TokenMsg: action.payload.data.msg,
      };

      break;

    case ISTOKEN_OKTOEDIT:
    

      return {
        ...state,
        TokenMsgPassUpdate: action.payload.data.msg,
      };

      break;

    case UPDATEPASS_MSG:
      return {
        ...state,
        PassUpdateMsg: action.payload.data.msg,
      };

      break;

    case UPVOTE_SET:
      console.log(action.payload.data);
      console.log(action.payload.data[0].outputupdated);

      return {
        ...state,
        Upvotes: action.payload.data[0].outputupdated,
        isVotedBefore: action.payload.data[0].msg,
      };

      break;

    case ISUSER_VOTED:
      console.log(action.payload.data);

      return {
        ...state,
        isVotedBefore: action.payload.data.msg,
      };

      break;

    case DOWNVOTE_SET:
      console.log(action.payload.data);
      console.log(action.payload.data[0].outputupdated);

      return {
        ...state,
        Downvotes: action.payload.data[0].outputupdated,
      };

      break;
    case CLEAR_STATE:
      console.log("ClearState", action.payload.data);
      return {
        ...state,
        PassUpdateMsg: action.payload.data,
      };

      break;
    case DUPERR_MSG:
      console.log("reducer run", action.payload);

      console.log("reducer run", action.payload.data);

      // console.log("reducer mailid", action.payload.data.mailret);
      console.log("reducer msg", action.payload.data.msg);

      console.log("reducer msg", action.payload.data.msg);

      return {
        ...state,
        // ErrMsg: action.payload.data ? action.payload.data : action.payload.data.msg,4
        SignupMsg: action.payload.data.msg,
        // Email: action.payload.data.mailret,
      };

      break;

    case GET_FORMS:
      console.log("reducer run", action.payload);
      console.log("reducer run", action.payload.status);

      return {
        ...state,
        DBFormdata: action.payload,
      };

      break;

    case ARTICLE_SVE:
      console.log("article reducer run", action.payload);

      // return {
      //   ...state,
      //   ArticleData: action.payload,
      // };

      break;

    case DELETE_FORM:
      console.log("data in reducer for delete action", action.payload._id);
      let filterStudents = state.DBFormdata.filter(
        (item) => item._id !== action.payload._id
      );
      console.log("filterStudents", filterStudents);
      return {
        ...state,
        //  DBFormdata: [...DBFormdata, filterStudents],
        DBFormdata: filterStudents,
      };

      break;

    case FORM_UPDATE:
      // state.companyEditMsg = "Company Successfully Edited";
      console.log("Company Successfully Edited");

      break;

    default:
      break;
  }
  return state;
}
