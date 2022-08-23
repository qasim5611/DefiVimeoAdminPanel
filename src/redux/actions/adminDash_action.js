import axios from "axios";
import {
  SITE_GENRL,
  GETSITE_GENRL,
  SITE_SOCIALS,
  HOME_BANER,
  NFT_PROMOT,
  NFT_RECENT,
  NFT_POPULAR,
  NFT_BANNER,
  CREATE_SERVICES,
  HOME_DOCS,
  UPDATE_DOCS,
} from "../constat";
import API from "../url";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getTableBodyUtilityClass } from "@mui/material";

export function setGeneralset(body) {
  return (dispatch) => {
    // let token = localStorage.getItem("token");

    console.log("body");
    console.log(body);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    let genralData = new FormData();

    for (var item in body) {
      genralData.append(item, body[item]);
    }
    console.log("setGeneralset");
    console.log(genralData);
    console.log(config);

    axios
      .post(API + "/setGeneral", genralData, config)
      .then((resp) => {
        if (resp.data.msg == "Updated Successful") {
          toast.success("Updated Successful", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          dispatch({
            type: SITE_GENRL,
            payload: resp.data,
          });
        }
        // successFul("success");
      })
      .catch((err) => {
        // createdFail("err");
        console.log(err);
      });
  };
}

export function setHomeBanner(body) {
  return (dispatch) => {
    // let token = localStorage.getItem("token");

    console.log("body");
    console.log(body);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    let genralData = new FormData();

    for (var item in body) {
      genralData.append(item, body[item]);
    }
    console.log("setGeneralset");
    console.log(genralData);
    console.log(config);

    axios
      .post(API + "/setHomeBanner", genralData, config)
      .then((resp) => {
        console.log("banner");
        console.log(resp.data);

        if (resp.data.msg == "Updated Successful") {
          toast.success("Updated Successful", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          dispatch({
            type: HOME_BANER,
            payload: resp.data,
          });
        }
        // successFul("success");
      })
      .catch((err) => {
        // createdFail("err");
        console.log(err);
      });
  };
}

export function setNftPromote(data, options, id) {
  return (dispatch) => {
    console.log("config");
    console.log(data);
    console.log(options);

    axios
      .post(API + "/setNftPromote", data, options, id)
      .then((resp) => {
        console.log("banner");
        console.log("setNftPromote.data");

        console.log(resp.data);

        if (resp.data.msg == "Files Uploaded Successfully") {
          toast.success("Files Uploaded Successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
        // successFul("success");
        dispatch({
          type: NFT_PROMOT,
          payload: resp.data,
        });
      })
      .catch((err) => {
        // createdFail("err");
        console.log(err);
      });
  };
}

// export function editSingleImg(data, options, id) {
//   return (dispatch) => {
//     console.log("config");
//     console.log(data);
//     console.log(options);
//     console.log(id);

//   };
// }

export function setNftPopular(data, options, id) {
  return (dispatch) => {
    console.log("config");
    console.log(data);
    console.log(options);

    axios
      .post(API + "/setNftPopular", data, options, id)
      .then((resp) => {
        console.log("banner");
        console.log("setNftPopular.data");

        console.log(resp.data);

        if (resp.data.msg == "Files Uploaded Successfully") {
          toast.success("Files Uploaded Successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
        // successFul("success");
        dispatch({
          type: NFT_POPULAR,
          payload: resp.data,
        });
      })
      .catch((err) => {
        // createdFail("err");
        console.log(err);
      });
  };
}

export function setNftRecent(data, options, id) {
  return (dispatch) => {
    console.log("config");
    console.log(data);
    console.log(options);

    axios
      .post(API + "/setNftRecent", data, options, id)
      .then((resp) => {
        console.log("banner");
        console.log("setNftRecent.data");

        console.log(resp.data);

        if (resp.data.msg == "Files Uploaded Successfully") {
          toast.success("Files Uploaded Successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
        // successFul("success");
        dispatch({
          type: NFT_RECENT,
          payload: resp.data,
        });
      })
      .catch((err) => {
        // createdFail("err");
        console.log(err);
      });
  };
}

export function setNftBanner(data, options, id) {
  return (dispatch) => {
    console.log("config");
    console.log(data);
    console.log(options);

    axios
      .post(API + "/setNftBanner", data, options, id)
      .then((resp) => {
        console.log("banner");
        console.log("setNftRecent.data");

        console.log(resp.data);

        if (resp.data.msg == "Updated Successful") {
          toast.success("Updated Successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          dispatch({
            type: NFT_BANNER,
            payload: resp.data,
          });
        }
        // successFul("success");
      })
      .catch((err) => {
        // createdFail("err");
        console.log(err);
      });
  };
}

export function setHomeDocs(body) {
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
    axios.post(API + `/setHomeDocs`, formData, config).then((resp) => {
      console.log(resp.data);

      if (resp.data.msg == "Updated Successful") {
        toast.info("Document Updated Successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        dispatch({
          type: UPDATE_DOCS,
          payload: resp.data,
        });
      }
    });
  };
}

export function setHomeDocsHeading(body) {
  return (dispatch) => {
    axios.post(API + `/setHomeDocsHeading`, body).then((resp) => {
      console.log(resp.data);

      if (resp.data.msg == "Updated Successful") {
        toast.info("Document Updated Successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        // dispatch({
        //   type: UPDATE_SERVICE,
        //   payload: resp.data,
        // });
      }
    });
  };
}

export function getHomeDocsRefresh(body) {
  return (dispatch) => {
    // let token = localStorage.getItem("token");

    console.log("test");
    console.log(body);

    axios
      .get(API + "/getHomeDocsRefresh")
      .then((resp) => {
        // successFul("success");
        console.log(resp.data);
        dispatch({
          type: HOME_DOCS,
          payload: resp.data,
        });
      })
      .catch((err) => {
        // createdFail("err");
        console.log(err);
      });
  };
}

export function getNftPromoteRefresh(body) {
  return (dispatch) => {
    // let token = localStorage.getItem("token");

    console.log("test");
    console.log(body);

    axios
      .get(API + "/getNftPromoteRefresh")
      .then((resp) => {
        // successFul("success");
        console.log(resp.data);
        dispatch({
          type: NFT_PROMOT,
          payload: resp.data,
        });
      })
      .catch((err) => {
        // createdFail("err");
        console.log(err);
      });
  };
}

export function getNftPopularRefresh() {
  return (dispatch) => {
    // let token = localStorage.getItem("token");

    console.log("test");

    axios
      .get(API + "/getNftPopularRefresh")
      .then((resp) => {
        // successFul("success");
        console.log(resp.data);
        dispatch({
          type: NFT_POPULAR,
          payload: resp.data,
        });
      })
      .catch((err) => {
        // createdFail("err");
        console.log(err);
      });
  };
}

export function getNftRecentRefresh(body) {
  return (dispatch) => {
    // let token = localStorage.getItem("token");

    console.log("test");
    console.log(body);

    axios
      .get(API + "/getNftRecentRefresh")
      .then((resp) => {
        // successFul("success");
        console.log(resp.data);
        dispatch({
          type: NFT_RECENT,
          payload: resp.data,
        });
      })
      .catch((err) => {
        // createdFail("err");
        console.log(err);
      });
  };
}

export function getNftBannerRefresh(body) {
  return (dispatch) => {
    // let token = localStorage.getItem("token");

    console.log("test");
    console.log(body);

    axios
      .get(API + "/getNftBannerRefresh")
      .then((resp) => {
        // successFul("success");
        console.log(resp.data);
        dispatch({
          type: NFT_BANNER,
          payload: resp.data,
        });
      })
      .catch((err) => {
        // createdFail("err");
        console.log(err);
      });
  };
}

export function editsocial(body) {
  return (dispatch) => {
    // let token = localStorage.getItem("token");

    console.log("body");
    console.log(body);

    axios
      .post(API + "/setSocialLinks", body)
      .then((resp) => {
        console.log(resp);
        if (resp.data.msg == "SocialLinks Updated Successful") {
          toast.success("SocialLinks Updated Successful", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          //  dispatch({
          //    type: SITE_GENRL,
          //    payload: resp.data,
          //  });
        }
      })
      .catch((err) => {
        // createdFail("err");
        console.log(err);
      });
  };
}

export function getgnrldata(body) {
  return (dispatch) => {
    // let token = localStorage.getItem("token");

    console.log("body");
    console.log(body);

    axios
      .get(API + "/getGeneralsett", body)
      .then((resp) => {
        // successFul("success");
        console.log(resp.data);
        dispatch({
          type: GETSITE_GENRL,
          payload: resp.data,
        });
      })
      .catch((err) => {
        // createdFail("err");
        console.log(err);
      });
  };
}

export function getsocial(body) {
  return (dispatch) => {
    // let token = localStorage.getItem("token");

    console.log("body");
    console.log(body);

    axios
      .get(API + "/getSocialsett", body)
      .then((resp) => {
        // successFul("success");
        console.log(resp.data);
        // dispatch({
        //   type: GETSITE_GENRL,
        //   payload: resp.data,
        // });
      })
      .catch((err) => {
        // createdFail("err");
        console.log(err);
      });
  };
}

//////////////////////////////////////////////////
