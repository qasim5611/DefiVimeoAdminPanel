import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useMediaQuery } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { useParams } from "react-router-dom";

import "./../style.css";
import "./../create.css";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import { basic, complex, formatting } from "../../misc/buttonList.js";

import { Row, Col } from "reactstrap";
import "react-toastify/dist/ReactToastify.css";

import { addVedioToVemios } from "../../../redux/actions/Course_action";

import API from "../../../redux/url.js";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const VideoUpdate = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const [record, setrecord] = useState(false);
  const [idtoUpdate, setidtoUpdate] = useState(false);

  const [allCourses, setAllCourses] = useState("");

  const [courseName, setCourseName] = useState("");
  const [moduleName, setModuleName] = useState("");

  const [modules, setModules] = useState("");

  console.log("myid");
  console.log(params.id);

  const [state, setState] = useState({
    title: "",
    length: "",
    video: null,
  });

  const [description, setDescription] = useState(null);

  const isCourseUpdated = useSelector((state) => state.BlogReducer.isCourseUpdated);

  console.log("isCourseUpdated");
  console.log(isCourseUpdated);

  useEffect(() => {
    axios.get(API + "/getVideosById", { params }).then((res) => {
      console.log("getBlogByid.data", res.data);
      console.log(res.data.user[0]);

      setrecord(res.data.user);
      setidtoUpdate(res.data.user[0]._id);
      // setEditRecordBefore(res.data.user[0]);
    });
  }, [isCourseUpdated]);



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

  const onChangeHandler = (e) => {
    if (e.target.name == "video") {
      let val = e.target.files[0];
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
    let obj = {
      ...state,
      courseName,
      moduleName,
      idtoUpdate
    };

console.log(obj);

    window.scrollTo(0, 200);


      dispatch(addVedioToVemios(obj));
  };

  // const validate = () => {
  //   console.log("validate called");
  //   let isvalid = true;

  //   if (
  //     state.title.length < 5 ||
  //     state.title.length > 80 ||
  //     state.title.length == 0
  //   ) {
  //     isvalid = false;
  //     settitleerr("title to be 5 to 80 characters long");
  //     setauthererr("");
  //     setdescerr();
  //     setdateerr();
  //   } else if (
  //     state.auther.length < 5 ||
  //     state.auther.length > 40 ||
  //     state.auther.length == 0
  //   ) {
  //     isvalid = false;
  //     settitleerr("");
  //     setauthererr("auther to be 5 to 50 characters long");
  //     setdescerr("");
  //     setdateerr("");
  //   } else if (state.date.length == 0) {
  //     isvalid = false;
  //     settitleerr("");
  //     setauthererr("");
  //     setdescerr("");
  //     setdateerr("Date is Required!");
  //   }
  //   //  else if (description.length == 0) {
  //   //   isvalid = false;
  //   //   settitleerr("");
  //   //   setauthererr("");
  //   //   setdescerr("Desc should not empty");
  //   //   setdateerr("");
  //   // }
  //   else {
  //     settitleerr("");
  //     setauthererr("");
  //     setdescerr("");
  //     setdateerr("");
  //   }

  //   return isvalid;
  // };

  return (
    <div class="content-wrapper">
      <div
        id="order_preview"
        class="wow fadeInUp content_box"
        style={{ visibility: "visible", animationName: "fadeInUp" }}
      >
        <Row className="table-header">
          <Col xs="12" md="12">
            <h2 class="section-title">Edit Your Video</h2>
          </Col>
        </Row>

        <div class="row">
          <Row>
            <Col xs="12" md="9">
              {record ? (
                <div>
                  {record.map((item, index) => {
                    return (
                      <form>
                <div class="form-group">
                  <label for="pwd">Video title</label>
                  <input
                    type="text"
                    class="form-control"
                    required
                    name="title"
                    onChange={onChangeHandler}
                    defaultValue={item.title}

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
                    defaultValue={item.length}

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

                <div dangerouslySetInnerHTML={{
                    __html: item.embed && item.embed,
                  }}></div>

                <div class="form-group">
                  <label for="pwd">Replace with New Video </label>
                  <input
                    type="file"
                    class="form-control"
                    required
                    name="video"
                    onChange={onChangeHandler}
                  />
                </div>
                {/* <div class="form-group featuredItems_out">
                    <input
                      type="checkbox"
                      class=""
                      required
                      name="isFeatured"
                      id="featured_item"
                      onChange={onChangeHandler}
                    />
                    <label for="featured_item">Featured</label>
                  </div> */}
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
                  Edit Video
                </button>
              </form>
                    );
                  })}
                </div>
              ) : (
                <div>Loading...</div>
              )}
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default VideoUpdate;
