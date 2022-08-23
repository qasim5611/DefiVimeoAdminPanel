import axios from "axios";
import {
  SAVE_FORM,
  GET_AUTH,
  DELETE_FORM,
  FORM_UPDATE,
  SAVE_SIGNUP,
  DUPERR_MSG,
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
import API from "../url";
 import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";




export function resetpassw(body) {
  return (dispatch) => {
    // let token = localStorage.getItem("token");

    console.log("body", body);

    axios
      .post(API + "/resetpassword", body)
      .then((resp) => {
        // successFul("success");
        console.log(resp.data);

        if (resp.data.msg === "Password Updated") {
          // console.log("Toaster");
          toast.success("Password Updated, You can Login Now!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
}







export function clearstate() {
  return (dispatch) => {
    // let token = localStorage.getItem("token");

    // console.log("body", body);
 dispatch({
   type: CLEAR_STATE,
   payload: { data: "" },
 });
   
  };
}


export function signupdata(body) {
  return (dispatch) => {
    // let token = localStorage.getItem("token");

    console.log("body", body);

    axios
      .post(API + "/register", body)
      .then((resp) => {
        console.log(resp.data.msg);
      
        dispatch({
          type: DUPERR_MSG,
          payload: { data: resp.data },
        });

            setTimeout(function () {
              dispatch({
                type: DUPERR_MSG,
                payload: { data: "" },
              });
            }, 2000); 
      })
      .catch((err) => {
        console.log(err);
      });
  };
}




export function VerifyToken(body) {
  return (dispatch) => {
    // let token = localStorage.getItem("token");

    console.log("body", body);

    axios
      .post(API + "/VerifyToken", body)
      .then((resp) => {
        // successFul("success");
        console.log(resp.data);
        dispatch({
          type: ISTOKEN_OK,
          payload: { data: resp.data },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}






export function VerifyTokenForPass(body) {
  return (dispatch) => {
    // let token = localStorage.getItem("token");

    console.log("body", body);

    axios
      .post(API + "/VerifyTokenforpass", body)
      .then((resp) => {
        // successFul("success");
        console.log(resp.data);
        if (resp.data.msg == "Sorry Your Token Is Not Correct") {
           toast.error("Sorry Your Token Is Not Correct", {
             position: "top-right",
             autoClose: 5000,
             hideProgressBar: false,
             closeOnClick: true,
             pauseOnHover: true,
             draggable: true,
             progress: undefined,
           });
        }
         else if (resp.data.msg == "You Have Been Verified for Password Update. Redirecting...") {
           toast.success("You Have Been Verified for Password Update. Redirecting...", {
             position: "top-right",
             autoClose: 5000,
             hideProgressBar: false,
             closeOnClick: true,
             pauseOnHover: true,
             draggable: true,
             progress: undefined,
           });
           dispatch({
             type: ISTOKEN_OKTOEDIT,
             payload: { data: resp.data },
           });
         }
        
      })
      .catch((err) => {
        console.log(err);
      });
  };
}





export function authuser(body) {
  return (dispatch) => {
    // let token = localStorage.getItem("token");

    console.log("body", body);

    axios
      .post(API + "/authenticate", body)
      .then((resp) => {
        // successFul("success");
      console.log("resp.data", resp.data);

      console.log("resp.data", resp.data.msg);
     
      if (resp.data.msg == "Login Successfull") {
        dispatch({
          type: DATA_LOGIN,
          payload: resp.data,
        });
      }
        
      dispatch({
        type: MSG_LOGINS,
        payload: resp.data,
      });

      setTimeout(function () {
        dispatch({
          type: MSG_LOGINS,
          payload: "",
        });
      }, 2000); 

     
  
      })
      .catch((err) => {
        console.log(err);
      });
  };
}




export function forgotpass(body) {
  return (dispatch) => {
    // let token = localStorage.getItem("token");

    console.log("body", body);

    axios
      .post(API + "/forgot-password", body)
      .then((resp) => {
        // successFul("success")
        console.log("resp.data", resp);
        console.log("resp.data", resp.data);

        if (resp.data.msg == "Email Not Found.") {
          toast.error("Email Not Found", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else if (resp.data.msg == "Cool Email Found, Redirecting to Change Password") {
          toast.info("Redirecting to Change Password", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          dispatch({
            type: FORG_PASSERR,
            payload: resp.data,
          });
        }

       
      })
      .catch((err) => {
        console.log(err);
      });
  };
}



export function logoutuser() {
  return (dispatch) => {
    
    // let token = localStorage.getItem("token");
    // localStorage.getItem("token");
    dispatch({
      type: DATA_LOGIN,
      payload: "",
    });
  };
}



