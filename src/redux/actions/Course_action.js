import axios from "axios";
import {
  CREATE_FOLDER,
  CREATE_VIDEO,
  DELETE_COURSE,
  DELETE_VIDEO,
  UPDATE_COURSE,
  ABOUTUS_DATA,
} from "../constat";
import API from "../url";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function createCourse(body) {
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
      .post(API + "/addCourse", formData, config)
      .then((resp) => {
        // successFul("success");
        console.log("resp.data", resp.data);

        if (resp.data.msg == "Course Folder Added Successfully") {
          toast.success("Course Folder Added Successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          dispatch({
            type: CREATE_FOLDER,
            payload: resp.data,
          });
          setTimeout(function () {
            dispatch({
              type: CREATE_FOLDER,
              payload: "",
            });
          }, 3000);
        }

        // dispatch({
        //   type: CREATE_FOLDER,
        //   payload: resp.data,
        // });
      })
      .catch((err) => {
        // createdFail("err");
        console.log(err);
      });
  };
}

export function updateCourse(body) {
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
    axios.post(API + `/updateCourse`, formData, config).then((resp) => {
      console.log(resp.data);

      if (resp.data.msg == "Course Updated Successfully") {
        toast.info("Course Updated Successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        dispatch({
          type: UPDATE_COURSE,
          payload: resp.data,
        });
        setTimeout(function () {
          dispatch({
            type: UPDATE_COURSE,
            payload: "",
          });
        }, 3000);
      }
    });
  };
}

export function addVedioToVemio(body) {
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
      .post(API + "/addToVimeo", formData, config)
      .then((resp) => {
        // successFul("success");
        console.log("resp.data", resp.data);

        if (resp.data.msg == "uploaded Successfully, transCoding Start..") {
          toast.info("uploaded Successfully, transCoding Start..", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          dispatch({
            type: CREATE_VIDEO,
            payload: resp.data,
          });
          setTimeout(function () {
            dispatch({
              type: CREATE_VIDEO,
              payload: "",
            });
          }, 3000);
        }

        else if(resp.data.msg == "Failed because: Unable to locate file to upload." ){
          toast.error("Failed because: Unable to locate file to upload.", {
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
        //   type: CREATE_FOLDER,
        //   payload: resp.data,
        // });
      })
      .catch((err) => {
        // createdFail("err");
        console.log(err);
      });
  };
}


export function addVedioToVemios(body) {
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
      .post(API + "/updateVideoToVimeo", formData, config)
      .then((resp) => {
        // successFul("success");
        console.log("resp.data", resp.data);

        if (resp.data.msg == "uploaded Successfully, transCoding Start..") {
          toast.info("uploaded Successfully, transCoding Start..", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          dispatch({
            type: CREATE_VIDEO,
            payload: resp.data,
          });
          setTimeout(function () {
            dispatch({
              type: CREATE_VIDEO,
              payload: "",
            });
          }, 3000);
        }

        else if(resp.data.msg == "Failed because: Unable to locate file to upload." ){
          toast.error("Failed because: Unable to locate file to upload.", {
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
        //   type: CREATE_FOLDER,
        //   payload: resp.data,
        // });
      })
      .catch((err) => {
        // createdFail("err");
        console.log(err);
      });
  };
}

export function deleteCourseByid(id) {
  console.log(id);

  return (dispatch) => {
    axios.post(API + `/deleteCourse`, { id }).then((resp) => {
      console.log("resp.data");
      console.log(resp.data);

      dispatch({
        type: DELETE_COURSE,
        payload: resp.data,
      });

      setTimeout(function () {
        dispatch({
          type: DELETE_COURSE,
          payload: "",
        });
      }, 3000);
    });
  };
}

//////////////  Videos Func Starts From Here ///////////////.



export function deleteVideoByid(id) {
  console.log(id);

  return (dispatch) => {
    axios.post(API + `/deleteVideoByid`, { id }).then((resp) => {
      console.log("resp.data");
      console.log(resp.data);

      dispatch({
        type: DELETE_VIDEO,
        payload: resp.data,
      });

      setTimeout(function () {
        dispatch({
          type: DELETE_VIDEO,
          payload: "",
        });
      }, 3000);
    });
  };
}


export function updateVedioToVemio(body) {
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
      .post(API + "/updateVideoToVimeo", formData, config)
      .then((resp) => {
        // successFul("success");
        console.log("resp.data", resp.data);

        if (resp.data.msg == "uploaded Successfully, transCoding Start..") {
          toast.info("uploaded Successfully, transCoding Start..", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          dispatch({
            type: CREATE_VIDEO,
            payload: resp.data,
          });
          setTimeout(function () {
            dispatch({
              type: CREATE_VIDEO,
              payload: "",
            });
          }, 3000);
        }

        else if(resp.data.msg == "Failed because: Unable to locate file to upload." ){
          toast.error("Failed because: Unable to locate file to upload.", {
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
        //   type: CREATE_FOLDER,
        //   payload: resp.data,
        // });
      })
      .catch((err) => {
        // createdFail("err");
        console.log(err);
      });
  };
}
// export function updateVedioToVemio(body) {
//   return (dispatch) => {
//     const config = {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     };
//     let formData = new FormData();

//     for (var item in body) {
//       formData.append(item, body[item]);
//     }
//     console.log("formData", formData);
//     axios.post(API + "/updateToVimeo", formData, config).then((resp) => {
//         // successFul("success");
//         console.log("resp.data", resp.data);

//         if (resp.data.msg == "Updated Successfully.") {
//           toast.success("Updated Successfully.", {
//             position: "top-right",
//             autoClose: 5000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//           });
//           // dispatch({
//           //   type: CREATE_VIDEO,
//           //   payload: resp.data,
//           // });
//           // setTimeout(function () {
//           //   dispatch({
//           //     type: CREATE_VIDEO,
//           //     payload: "",
//           //   });
//           // }, 3000);
//         }

//         else if(resp.data.msg == "Failed because: Unable to locate file to upload." ){
//           toast.error("Failed because: Unable to locate file to upload.", {
//             position: "top-right",
//             autoClose: 5000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//           });
        
//         }

//         // dispatch({
//         //   type: CREATE_FOLDER,
//         //   payload: resp.data,
//         // });
//       })
//       .catch((err) => {
//         // createdFail("err");
//         console.log(err);
//       });
//   };
// }