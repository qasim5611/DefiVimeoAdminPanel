import axios from "axios";
import {
  CREATE_SERVICES,
  DELETE_SERVICE,
  UPDATE_MEMBER,
  ABOUTUS_DATA,
  CREATE_MEMBER,
  DELETE_MEMBER,
} from "../constat";
import API from "../url";

 import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";


export function createMember(body) {
  return (dispatch) => {
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
      .post(API + "/addMember", formData, config)
      .then((resp) => {
        console.log("resp.data", resp.data);

        if (resp.data.msg == "Member Added Successfully") {
          toast.info("Member Added Successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          dispatch({
            type: CREATE_MEMBER,
            payload: resp.data,
          });
        } 
        else if (resp.data.msg == "Only 6 members Allaowed") {
          toast.warn("Only 6 members Allaowed", {
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





export function updateMember(body) {
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
    axios.post(API + `/updateMember`, formData, config).then((resp) => {
      console.log(resp.data);

      if (resp.data.msg == "Member Updated Successfully") {
        toast.info("Member Updated Successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        dispatch({
          type: UPDATE_MEMBER,
          payload: resp.data,
        });
      }
    });
  };
}




export function deleteMemberByid(id) {
  console.log(id);

  return (dispatch) => {
    axios.post(API + `/deleteMember`, { id }).then((resp) => {
      console.log("resp.data");
      console.log(resp.data);

      dispatch({
        type: DELETE_MEMBER,
        payload: resp.data,
      });

      setTimeout(function () {
        dispatch({
          type: DELETE_MEMBER,
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

     
        toast.info("AboutUs Updated Successful", {
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
