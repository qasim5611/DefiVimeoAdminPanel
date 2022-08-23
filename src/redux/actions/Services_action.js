import axios from "axios";
import { CREATE_SERVICES, DELETE_SERVICE, UPDATE_SERVICE,ABOUTUS_DATA } from "../constat";
import API from "../url";

 import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";


export function createService(body) {
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
     .post(API + "/addService", formData, config)
     .then((resp) => {
       // successFul("success");
       console.log("resp.data", resp.data);

       dispatch({
         type: CREATE_SERVICES,
         payload: resp.data,
       });
     })
     .catch((err) => {
       // createdFail("err");
       console.log(err);
     });
 };
}





export function updateService(body) {
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
    axios.post(API + `/updateService`, formData, config).then((resp) => {
      console.log(resp.data);

          if (resp.data.msg == "Service Updated Successfully") {
            toast.info("Service Updated Successfully", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
             dispatch({
               type: UPDATE_SERVICE,
               payload: resp.data,
             });
          }

     
    });
  };
}




export function deleteServiceByid(id) {
      console.log(id);

  return (dispatch) => {
    axios.post(API + `/deleteService`, { id }).then((resp) => {
      console.log('resp.data');
      console.log(resp.data);

        dispatch({
          type: DELETE_SERVICE,
          payload: resp.data,
        });

        setTimeout(function () {
          dispatch({
            type: DELETE_SERVICE,
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
