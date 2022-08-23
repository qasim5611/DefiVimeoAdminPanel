import axios from "axios";
import {
  CREATE_ROADMAP,
  DELETE_SERVICE,
  UPDATE_ROADMAP,
  ABOUTUS_DATA,
  CREATE_MEMBER,
  DELETE_ROADMAP,
} from "../constat";
import API from "../url";

 import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";


export function createRoadmap(body) {
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


    // let maplistnew = body.maplist;

    // formData.append(maplist);


    axios
      .post(API + "/addRoadmap", formData, config, )
      .then((resp) => {
        console.log("resp.data", resp.data);

        if (resp.data.msg == "RoadMap Added Successfully") {
          toast.info("RoadMap Added Successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          dispatch({
            type: CREATE_ROADMAP,
            payload: resp.data,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
}





export function updateRoadmap(body) {
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
    axios.post(API + `/updateRoadmap`, formData, config).then((resp) => {
      console.log(resp.data);

      if (resp.data.msg == "Roadmap Updated Successfully") {
        toast.info("Roadmap Updated Successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        dispatch({
          type: UPDATE_ROADMAP,
          payload: resp.data,
        });
      }
    });
  };
}




export function deleteRoadmapByid(id) {
  console.log(id);

  return (dispatch) => {
    axios.post(API + `/deleteRoadmap`, { id }).then((resp) => {
      console.log("resp.data");
      console.log(resp.data);

      dispatch({
        type: DELETE_ROADMAP,
        payload: resp.data,
      });

      setTimeout(function () {
        dispatch({
          type: DELETE_ROADMAP,
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
