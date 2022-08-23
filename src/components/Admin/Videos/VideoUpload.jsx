import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Box } from "@mui/system";
import CropRotateIcon from "@mui/icons-material/CropRotate";
import ResetTvIcon from "@mui/icons-material/ResetTv";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import { useMediaQuery } from "@mui/material";
// import Investtab from "./Investtab";
import { FormControlLabel } from "@mui/material";
import ImageUploading from "react-images-uploading";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import LoadingSvg from "../../Loader/Loader";

import "./../style.css";
import "./../create.css";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import { basic, complex, formatting } from "../../misc/buttonList.js";

import { Row, Col } from "reactstrap";


import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { createCourse } from "../../../redux/actions/Course_action.js";
import { addVedioToVemio } from "../../../redux/actions/Course_action.js";

import { getNftPopularRefresh } from "../../../redux/actions/adminDash_action.js";

import API from "../../../redux/url.js";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const VideoUpload = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  
  let [color, setColor] = useState("#ffffff");

  const [allCourses, setAllCourses] = useState("");

  const [courseName, setCourseName] = useState("");
  const [moduleName, setModuleName] = useState("");

  const [modules, setModules] = useState("");

  useEffect(() => {
    axios.get(API + "/getCourse").then((result) => {
      console.log("result.data.user", result.data.user);
      setAllCourses(result.data.user);
    });
  }, []);

  useEffect(() => {
    if (courseName) {
      let body = {
        courseName: courseName,
      };
      console.log("body", body);
      axios.post(API + `/getCourseModules`, body).then((resp) => {
        console.log("mystr", resp.data.user[0].moduleLists);
        setModules(resp.data.user[0].moduleLists);
      });
    }
  }, [courseName]);


  
  // let success = useSelector((state) => state.CourseReducer.videoCreate);
  // console.log("success CourseReducer");
  // console.log(success);

  // if(success){
  //   console.log("setLoading false Now")
  //   setLoading(false);
  // }

  let success = useSelector((state) => state.CourseReducer);
  console.log("success.courseCreate", success.videoCreate);
  useEffect(() => {
    if (success.videoCreate) {
      setLoading(false);
    }
  }, [success]);

  
  if(loading === true ){
    document.body.style.overflow = "hidden"
  }
  else{
    document.body.style.overflow = "scroll"

  }



  const filesstyle = {
    color: "black",
    border: "1px black solid",
    width: "100%",
    background: "white",
    height: "36px",
    padding: "7px",
    border: "1px solid rgb(190, 194, 199)",
    borderRadius: "7px",
    marginBottom: "20px",
    boxShadow:
      "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
  };

  const [multipleFiles, setMultipleFiles] = useState("");
  const [multipleProgress, setMultipleProgress] = useState(0);

  const labls = {
    color: "#101924",
    flex: "1",
    marginLeft: "2px",
  };

  const errmsg = {
    color: "red",
    position: "relative",
    top: "-11px",
  };

  const inputstyle = {
    padding: "3px 4px",
    display: "flex",
    alignItems: "center",
    width: "100%",
    border: "1px solid #bec2c7",
    borderRadius: "7px",
    marginBottom: "20px",
  };

  const check = useMediaQuery("(max-Width:900px)");

  const [titleerr, settitleerr] = useState("");
  const [authererr, setauthererr] = useState("");
  const [descerr, setdescerr] = useState("");
  const [dateerr, setdateerr] = useState("");

  const [state, setState] = useState({
    title: "",
    length: "",
    video: null,
  });

  const [description, setDescription] = useState(null);

  const onChangeHandler = (e) => {
    console.log("worked");
    
    if (e.target.name == "video") {
      let val = e.target.files[0];
      val.onloadedmetadata = function(){
       
        console.log(" media.duration;", val.duration);
      }; 
      setState({ ...state, [e.target.name]: val });
    } else {
      setState({ ...state, [e.target.name]: e.target.value });
    }
  };

  const editorRef = useRef < SunEditor > null;
  useEffect(() => {
    // Get underlining core object here
    // Notice that useEffect is been used because you have to make sure the editor is rendered.
    console.log(editorRef.current?.editor.core);
  }, []);

  const handleChange = (content) => {
    setDescription(content); //Get Content Inside Editor
  };

  const onSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    let obj = {
      ...state,
      courseName,
      moduleName,
    };

    dispatch(addVedioToVemio(obj));
    console.log("obj", obj);

  };

  const validate = () => {
    console.log("validate called");
    let isvalid = true;

    if (
      state.title.length < 5 ||
      state.title.length > 80 ||
      state.title.length == 0
    ) {
      isvalid = false;
      settitleerr("title to be 5 to 80 characters long");
      setauthererr("");
      setdescerr();
      setdateerr();
    } else if (
      state.auther.length < 5 ||
      state.auther.length > 40 ||
      state.auther.length == 0
    ) {
      isvalid = false;
      settitleerr("");
      setauthererr("auther to be 5 to 50 characters long");
      setdescerr("");
      setdateerr("");
    } else if (state.date.length == 0) {
      isvalid = false;
      settitleerr("");
      setauthererr("");
      setdescerr("");
      setdateerr("Date is Required!");
    } else if (description.length == 0) {
      isvalid = false;
      settitleerr("");
      setauthererr("");
      setdescerr("Desc should not empty");
      setdateerr("");
    } else {
      settitleerr("");
      setauthererr("");
      setdescerr("");
      setdateerr("");
    }

    return isvalid;
  };

  if(loading === true ){
    document.body.style.overflow = "hidden"
  }


  return (
    <>
    {loading === true && <LoadingSvg  />}
 
    <div class="content-wrapper">
      <div
        id="order_preview"
        class="wow fadeInUp content_box"
        style={{ visibility: "visible", animationName: "fadeInUp" }}
      >
        <Row className="table-header">
          <Col xs="12" md="12">
            <h2 class="section-title">Upload New Videos</h2>
          </Col>
        </Row>
        <div class="row">
          <Row>
            <Col xs="12" md="9">
              <form>
                <div class="form-group">
                  <label for="pwd">Video title</label>
                  <input
                    type="text"
                    class="form-control"
                    required
                    name="title"
                    onChange={onChangeHandler}
                    // value={state.title}
                  />
                  <center>
                    {titleerr ? <div style={errmsg}>{titleerr}</div> : null}
                  </center>
                </div>
                <div class="form-group">
                  <label for="pwd"> Video Length </label>
                  <input
                    name="length"
                    type="text"
                    class="form-control"
                    placeholder="3.5 Hourse"
                    required
                    onChange={onChangeHandler}
                  />
                  <center>
                    {authererr ? <div style={errmsg}>{authererr}</div> : null}
                  </center>
                </div>
                <div class="form-group">
                  <label for="pwd"> Choose For Which Course </label>
                  <select
                    name="course"
                    id="module"
                    class="form-control"
                    onChange={(e) => setCourseName(e.target.value)}
                  >
                    <option value="0" selected disabled hidden>
                      Select...
                    </option>
                    {allCourses &&
                      allCourses.map((item, index) => {
                        return <option key={index}>{item.title}</option>;
                      })}
                  </select>
                </div>

                <div class="form-group">
                  <label for="pwd">
                    {" "}
                    Choose Module For Above Course Select{" "}
                  </label>
                  <select
                    name="module"
                    id="module"
                    class="form-control"
                    onChange={(e) => setModuleName(e.target.value)}
                  >
                    <option value="0" selected disabled hidden>
                      Select above Course First...
                    </option>
                    {modules &&
                      modules.map((item, index) => {
                        return <option key={index}>{item}</option>;
                      })}
                  </select>
                </div>

                {/* <div class="form-group">
                  <label for="pwd"> Course Date </label>
                  <input
                    name="date"
                    type="date"
                    class="form-control"
                    required
                    onChange={onChangeHandler}
                  />
                  <center>
                    {dateerr ? <div style={errmsg}>{dateerr}</div> : null}
                  </center>
                </div> */}
                {/* <div class="form-group">
                  <label for="pwd">Course Descriptions</label>

                  <SunEditor
                    setOptions={{
                      height: 200,
                      width: "60%",
                      buttonList: formatting,
                      buttonList: basic,
                      buttonList: complex,
                    }}
                    onChange={handleChange}
                  />
                  <center>
                    {descerr ? <div style={errmsg}>{descerr}</div> : null}
                  </center>
                </div> */}
                <div class="form-group">
                  <label for="pwd">Upload Video </label>
                  <input
                    type="file"
                    accept="video/mp4,video/x-m4v,video/*"
                    class="form-control"
                    required
                    name="video"
                    onChange={onChangeHandler}
                    // onLoadedMetadata={onChangeHandler}
                  />
                </div>
                
            
                <button
                  type="submit"
                  class="btn btn-default"
                  onClick={onSubmit}
                  style={{
                    marginTop: 10,
                    float: "right",
                    padding: "8px 16px",
                    fontSize: 16,
                  }}
                >
                  Upload Video
                </button>
              </form>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  
    </>
   
  );
};

export default VideoUpload;
