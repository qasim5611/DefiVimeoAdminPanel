import axios from "axios";
import {
  CREATE_TCKNMX,
  DELETE_TOCKENOMCS,
  UPDATE_TCKNMICS,
  ABOUTUS_DATA,
} from "../constat";
import API from "../url";

 import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";


export function createTokenomics(body) {
  return (dispatch) => {
    let token = localStorage.getItem("token");

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    let formData = new FormData();

    for (var item in body) {
      formData.append(item, body[item]);
    }
    console.log("formData", formData);
    axios
      .post(API + "/addTokenomics", formData, config)
      .then((resp) => {
        // successFul("success");
        console.log("resp.data", resp.data);

           if (resp.data.msg == "Tokenomics Added Successfully") {
             toast.info("Tokenomics Added Successfully", {
               position: "top-right",
               autoClose: 5000,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: true,
               draggable: true,
               progress: undefined,
             });
             dispatch({
               type: CREATE_TCKNMX,
               payload: resp.data,
             });
           } else if (resp.data.msg == "Only 6 Tokenomics Allaowed") {
             toast.warn("Only 6 Tokenomics Allaowed", {
               position: "top-right",
               autoClose: 5000,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: true,
               draggable: true,
               progress: undefined,
             });
           }

        // dispatch({
        //   type: CREATE_SERVICES,
        //   payload: resp.data,
        // });
      })
      .catch((err) => {
        // createdFail("err");
        console.log(err);
      });
  };
}





export function updateTockenomics(body) {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  let formData = new FormData();

  for (var item in body) {
    formData.append(item, body[item]);
  }
  return (dispatch) => {
    axios.post(API + `/updateTokenomics`, formData, config).then((resp) => {
      console.log(resp.data);

      if (resp.data.msg == "Tockenomics Updated Successfully") {
        toast.info("Tockenomics Updated Successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        dispatch({
          type: UPDATE_TCKNMICS,
          payload: resp.data,
        });
      }
    });
  };
}




export function deleteTockenomicsByid(id) {
  console.log(id);

  return (dispatch) => {
    axios.post(API + `/deleteTokenomics`, { id }).then((resp) => {
      console.log("resp.data");
      console.log(resp.data);

      dispatch({
        type: DELETE_TOCKENOMCS,
        payload: resp.data,
      });

      setTimeout(function () {
        dispatch({
          type: DELETE_TOCKENOMCS,
          payload: "",
        });
      }, 3000);
    });
  };
}






export function updateMagzine(body) {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  let formData = new FormData();

  for (var item in body) {
    formData.append(item, body[item]);
  }
  return (dispatch) => {
    axios.post(API + `/api/magzine/update`, formData, config).then((resp) => {
      console.log(resp.data);
      // dispatch({
      //   type: UPDATE_ATICLE_SECCUSS,
      //   payload: resp.data,
      // });
    });
  };
}







export function updateAboutUs(body) {
  return (dispatch) => {
    axios.post(API + `/updateAboutUs`, body).then((resp) => {
      console.log("updateAboutUs action");
      console.log(resp.data);

         if (resp.data.msg == "Updated Successful") {
           toast.info("Updated Successful", {
             position: "top-right",
             autoClose: 5000,
             hideProgressBar: false,
             closeOnClick: true,
             pauseOnHover: true,
             draggable: true,
             progress: undefined,
           });
           dispatch({
             type: ABOUTUS_DATA,
             payload: resp.data,
           });
         }

     
      //   toast.info("AboutUs Updated Successful", {
      //     position: "top-right",
      //     autoClose: 5000,
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //     progress: undefined,
      //   });

    

      // dispatch({
      //   type: ABOUTUS_DATA,
      //   payload: resp.data,
      // });
    });
  };
}




export function getAboutUsRefresh() {
  return (dispatch) => {
    // let token = localStorage.getItem("token");


    axios
      .get(API + "/getAboutUsRefresh")
      .then((resp) => {
        // successFul("success");
        console.log(resp.data);
        dispatch({
          type: ABOUTUS_DATA,
          payload: resp.data,
        });
      })
      .catch((err) => {
        // createdFail("err");
        console.log(err);
      });
  };
}
