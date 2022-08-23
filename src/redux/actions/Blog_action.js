import axios from "axios";
import {
  CREATE_BLOGS,
  DELETE_BLOG,
  UPDATE_BLOG,
  ABOUTUS_DATA,
} from "../constat";
import API from "../url";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function createBlog(body) {
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
      .post(API + "/addBlog", formData, config)
      .then((resp) => {
        // successFul("success");
        console.log("resp.data", resp.data);

        if (resp.data.msg == "Blog Added Successfully") {
          toast.success("Blog Added Successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          dispatch({
            type: CREATE_BLOGS,
            payload: resp.data,
          });
        }

        // dispatch({
        //   type: CREATE_BLOGS,
        //   payload: resp.data,
        // });
      })
      .catch((err) => {
        // createdFail("err");
        console.log(err);
      });
  };
}

export function updateBlog(body) {
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
    axios.post(API + `/updateBlog`, formData, config).then((resp) => {
      console.log(resp.data);

      if (resp.data.msg == "Blog Updated Successfully") {
        toast.info("Blog Updated Successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        dispatch({
          type: UPDATE_BLOG,
          payload: resp.data,
        });
        setTimeout(function () {
          dispatch({
            type: UPDATE_BLOG,
            payload: "",
          });
        }, 3000);
      }
    });
  };
}

export function deleteBlogByid(id) {
  console.log(id);

  return (dispatch) => {
    axios.post(API + `/deleteBlog`, { id }).then((resp) => {
      console.log("resp.data");
      console.log(resp.data);

      dispatch({
        type: DELETE_BLOG,
        payload: resp.data,
      });

      setTimeout(function () {
        dispatch({
          type: DELETE_BLOG,
          payload: "",
        });
      }, 3000);
    });
  };
}
