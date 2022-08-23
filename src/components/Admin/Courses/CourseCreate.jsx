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

import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import Chip from "@mui/material/Chip";

import Popper from "@mui/material/Popper";
import { makeStyles, createStyles } from "@mui/styles";

import "./../style.css";
import "./../create.css";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import { basic, complex, formatting } from "../../misc/buttonList.js";

import { Row, Col } from "reactstrap";
// Import Swiper styles
// import 'swiper/css';
import {
  Container,
  FormControl,
  Input,
  InputAdornment,
  InputBase,
  InputLabel,
  Paper,
  TextField,
  Typography,
  Button,
  styled
} from "@mui/material";



import "react-toastify/dist/ReactToastify.css";

import { createCourse } from "../../../redux/actions/Course_action.js";

import { getNftPopularRefresh } from "../../../redux/actions/adminDash_action.js";

import API from "../../../redux/url.js";
import axios from "axios";
import Cookies from "universal-cookie";
import LoadingSvg from "../../Loader/Loader";

const cookies = new Cookies();

const AutocompleteStyle = styled(Autocomplete)(() => ({
  '&.MuiAutocomplete-root': {
    borderRadius: '10px',
    color: '#fff',
    backgroundColor: "#fff",
  },
  '&.Mui-focused': {
    color: 'red',
    backgroundColor: "#fafafa"
  },
 
}));

const TextFieldStyle = styled(TextField)(() => ({
  '.MuiFilledInput-root': {
    color: 'black !important',
  },
  '&.MuiTextField': {
    color: 'black !important',
  }

}));


const CourseCreate = () => {
  const dispatch = useDispatch();


  const [loading, setLoading] = useState(false);

  const [learnList, setLearnList] = useState(null);
  const [moduleList, setModuleList] = useState(null);
  
  const [titleerr, settitleerr] = useState("");
  const [authererr, setauthererr] = useState("");
  const [descerr, setdescerr] = useState("");
  const [dateerr, setdateerr] = useState("");
  const [imgerr, setimgerr] = useState("");
  const [listerr, setlisterr] = useState("");

  const [state, setState] = useState({
    title: "",
    auther: "",
    image: null,
  });
  
  const [description, setDescription] = useState(null);
  const [instructorBio, setInstructorBio] = useState(null);
  const useStyles = makeStyles({
    paper: {
      border: "5px solid black",
      color: "red",
      backgroundColor: "green",
    },
  });
  const classes = useStyles();

  const onChangeHandlerMap = (value) => {
    setLearnList(value);
  };
  const onChangeHandlerModule = (value) => {
    setModuleList(value);
  };
  const courseModules = [
    { title: "The history of money" },
    { title: "What is cryptocurrency" },
    { title: "The basics of blockchain" },
    { title: "The differences between cryptocurrencies" },
    { title: "How to research cryptocurrencies" },
    { title: "How to setup a wallet" },
    { title: "How to secure your wallet" },
    { title: "Avoiding the most common scams" },
  ];
  const defaultModules = [
    { title: "History" },
    { title: "Basics" },
    { title: "Advance" },
    { title: "Latest" },
  ];



  let success = useSelector((state) => state.CourseReducer);
  console.log("success.courseCreate", success.courseCreate);
  useEffect(() => {
    if (success.courseCreate) {
      setLoading(false);
    }
  }, [success]);



  if(loading === true ){
    document.body.style.overflow = "hidden"
  }
  else{
    document.body.style.overflow = "scroll"

  }



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

  const [module, setModule] = useState(0);




  const onChangeHandler = (e) => {
    if (e.target.name == "image") {
      let val = e.target.files[0];
      setState({ ...state, [e.target.name]: val });
    } else {
      setState({ ...state, [e.target.name]: e.target.value });
    }
  };
  const handleChange = (content) => {
    setDescription(content); //Get Content Inside Editor
  };
  const handleBioChange = (content) => {
    setInstructorBio(content); //Get Content Inside Editor
  };

  const editorRef = useRef < SunEditor > null;
  useEffect(() => {
    // Get underlining core object here
    // Notice that useEffect is been used because you have to make sure the editor is rendered.
    console.log(editorRef.current?.editor.core);
  }, []);


  const onSubmit = (e) => {
    e.preventDefault();
   

    let obj = {
      ...state,
      module,
      description,
      instructorBio,
      learnList,
      moduleList,
    };

    var isFormvalid = validate();
    console.log("isvalid", isFormvalid);
    window.scrollTo(0, 200);
    if (isFormvalid) {
      console.log(obj);
       setLoading(true);
      dispatch(createCourse(obj));
      //  alert("ok");
    }
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
      setimgerr("");
      setlisterr("");
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
      setimgerr("");
      setlisterr("");
    } else if (learnList.length == 0) {
      isvalid = false;
      settitleerr("");
      setauthererr("");
      setdescerr("");
      setdateerr("");
      setimgerr("");
      setlisterr("List Should not Empty");
    } else if (module == 0) {
      isvalid = false;
      settitleerr("");
      setauthererr("");
      setdescerr("");
      setimgerr("");
      setlisterr("");

      setdateerr("Module is Required!");
    } else if (state.image == null) {
      isvalid = false;
      settitleerr("");
      setauthererr("");
      setdescerr("");
      setlisterr("");

      setimgerr("Course Image is Required");

      setdateerr("");
    } else {
      settitleerr("");
      setauthererr("");
      setdescerr("");
      setdateerr("");
      setimgerr("");
      setlisterr("");
    }

    return isvalid;
  };

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
            <h2 class="section-title">Enter New Course</h2>
          </Col>
        </Row>
        <div class="row">
          <Row>
            <Col xs="12" md="9">
              <form>
                <div class="form-group">
                  <label for="pwd">Course Title</label>
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
                  <label for="pwd">Course Level</label>
                  <select
                    name="module"
                    id="module"
                    class="form-control"
                    onChange={(e) => setModule(e.target.value)}
                  >
                    <option value="0" selected disabled hidden>
                      Select...
                    </option>
                    <option value="Beginner">Beginner Level</option>
                    <option value="Intermediate">Medium Level</option>
                    <option value="Advanced">Advanced Level</option>
                  </select>
                  <center>
                    {titleerr ? <div style={errmsg}>{titleerr}</div> : null}
                  </center>
                </div>

                <div class="form-group">
                  <label for="pwd"> Instructor Name </label>
                  <input
                    name="auther"
                    type="text"
                    class="form-control"
                    required
                    onChange={onChangeHandler}
                  />
                  <center>
                    {authererr ? <div style={errmsg}>{authererr}</div> : null}
                  </center>
                </div>
                <div class="form-group">
                  <label for="pwd">Instructor BIO</label>

                  <SunEditor
                    setOptions={{
                      height: 200,
                      width: "60%",
                      buttonList: formatting,
                      buttonList: basic,
                      buttonList: complex,
                    }}
                    onChange={handleBioChange}
                  />
                  <center>
                    {descerr ? <div style={errmsg}>{descerr}</div> : null}
                  </center>
                </div>
                <div class="form-group">
                  <label for="pwd"> Course Modules </label>

                  <div class="form-group">
                    <Stack spacing={3} sx={{ width: "60%" }}>
                      <AutocompleteStyle
                        multiple
                        id="tags-filled"
                        options={defaultModules.map((option) => option.title)}
                        freeSolo
                        onChange={(event, value) =>
                          onChangeHandlerModule(value)
                        }
                        renderTags={(value, getTagProps) =>
                          value.map((option, index) => (
                            <Chip
                            color="primary"
                              variant="outlined"
                              label={option}
                              {...getTagProps({ index })}
                            />
                          ))
                        }
                        renderInput={(params) => (
                          <TextFieldStyle
                            {...params}
                            variant="filled"
                            label="Enter Modules Names For this Particular Course*"
                            name="list"
                          />
                        )}
                      />
                      <center>
                        {listerr ? <div style={errmsg}>{listerr}</div> : null}
                      </center>
                    </Stack>
                    {/* <center>
                    {descerr ? <div style={errmsg}>{descerr}</div> : null}
                  </center> */}
                  </div>
                  <center>
                    {dateerr ? <div style={errmsg}>{dateerr}</div> : null}
                  </center>
                </div>
                <div class="form-group">
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
                </div>

                <div class="form-group">
                  <Stack spacing={3} sx={{ width: "60%" }}>
                    <AutocompleteStyle
                      multiple
                      id="tags-filled"
                      options={courseModules.map((option) => option.title)}
                      // defaultValue={courseModules.map((option) => option.title)}
                      // defaultValue={[courseModules[1].title]}
                      freeSolo
                      onChange={(event, value) => onChangeHandlerMap(value)}
                      renderTags={(value, getTagProps) =>
                        value.map((option, index) => (
                          <Chip
                            color="primary"
                            variant="outlined"
                            label={option}
                            {...getTagProps({ index })}
                          />
                        ))
                      }
                      renderInput={(params) => (
                        <TextFieldStyle
                          {...params}
                          variant="filled"
                          label="What you will learn In Overall Course*"
                          // placeholder="Favorites"
                          name="list"
                        />
                      )}
                    />
                    <center>
                      {listerr ? <div style={errmsg}>{listerr}</div> : null}
                    </center>
                  </Stack>
                  {/* <center>
                    {descerr ? <div style={errmsg}>{descerr}</div> : null}
                  </center> */}
                </div>
                <div class="form-group">
                  <label for="pwd">Course Image </label>
                  <input
                    type="file"
                    class="form-control"
                    required
                    name="image"
                    onChange={onChangeHandler}
                  />
                </div>
                <center>
                  {imgerr ? <div style={errmsg}>{imgerr}</div> : null}
                </center>

            
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
                  Create Course
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

export default CourseCreate;
