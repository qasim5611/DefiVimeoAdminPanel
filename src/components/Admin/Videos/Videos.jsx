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
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { Row, Col } from "reactstrap";
import "./../style.css";
import "./../create.css";

import { confirmAlert } from "react-confirm-alert"; // Import

import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
// import CircularProgress from "@material-ui/core/CircularProgress";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
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
} from "@mui/material";

import IconButton from "@mui/material/IconButton";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
// Nested List starts
import ListItemButton from "@mui/material/ListItemButton";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import List from "@mui/material/List";
import { Link, NavLink } from "react-router-dom";
// Nested List ends
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { AiOutlineCalculator } from "react-icons/ai";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import { setNftPopular } from "../../../redux/actions/adminDash_action.js";

import { deleteVideoByid } from "../../../redux/actions/Course_action";

import API from "../../../redux/url.js";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const Videos = () => {
  const dispatch = useDispatch();

  const [articleList, setArticleList] = useState(false);
  const [articleList2, setArticleList2] = useState(false);

  const searchTextField = (e) => {
    e.preventDefault();
    let searching = e.target.value.toLowerCase();
    let result = articleList2.filter(
      (item) => item.title && item.title.toLowerCase().includes(searching)
    );
    setArticleList(result);
  };

  const isVideoDeleted = useSelector((state) => state.CourseReducer.isVideoDeleted);

  console.log("isVideoDeleted");
  console.log(isVideoDeleted);

  useEffect(() => {
    axios.get(API + "/getVideos").then((result) => {
      console.log("getVideos");
      console.log(result.data);

      setArticleList(result.data.user);
      setArticleList2(result.data.user);
    });
  }, [isVideoDeleted]);

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

  const submit = (_id) => {
    confirmAlert({
      title: "Confirm Deletion",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => deleteVideo(_id),
        },
        {
          label: "No",
        },
      ],
    });
  };

  const deleteVideo = (id) => {
    dispatch(deleteVideoByid(id));
  };

  return (
    <div class="content-wrapper">
      <div
        id="order_preview"
        class="wow fadeInUp content_box"
        style={{ visibility: "visible", animationName: "fadeInUp" }}
      >
        {/* Companies Header and Search Bar Start */}

        <Row className="table-header">
          <Col md="4">
            <h2 class="section-title">All Videos</h2>
          </Col>
          <Col md="8">
            <form class="form-inline form-searchbar" action="#">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Find Video.."
                  onChange={searchTextField}
                  style={{ width: "100%" }}
                />
              </div>
              <NavLink to="/adminDashboard/appsetting/list/videos-create">
                <button
                  type="submit"
                  class="btn btn-default"
                  style={{ padding: "10px" }}
                >
                  Upload New videos
                </button>
              </NavLink>
              {/* <Link to="/admin/CategoriesAddSubCate" className="ml-5">
                  <button type="submit" class="btn btn-default">
                    Add New Sub Category
                  </button>
                </Link> */}
            </form>
          </Col>
        </Row>

        {/* Companies Table Sart */}

        <div class="row">
          <div class="col-xs-12 col-md-12">
            <div class="table-responsive">
              {articleList ? (
                <table class="table table-bordered">
                  <tbody>
                    <tr>
                      <th class="active">S#</th>
                      <th class="active">Video Title</th>
                      <th class="active">Video Course</th>
                      <th class="active">Module Name</th>
                  
                      <th class="active">Video</th>

                      <th class="active" style={{ width: "300px" }}>
                        Action
                      </th>
                    </tr>

                    {articleList.map((item, ind) => {
                      return (
                        <tr>
                          <td>{ind + 1}</td>
                          <td>{item.title && item.title}</td>
                          {/* <td>{item.position && item.position}</td> */}

                          {/* <td
                            dangerouslySetInnerHTML={{
                              __html: item.description && item.description,
                            }}
                          ></td> */}
                          <td>{item.courseName && item.courseName}</td>
                          <td>{item.moduleName && item.moduleName}</td>

                          <td style={{width: "auto",
    height: "inherit"}} dangerouslySetInnerHTML={{
                              __html: item.embed && item.embed,
                            }}></td>

                          {/* <td>
                            <img
                              src={API + "/uploads/" + item.image}
                              alt={item.image}
                              height="50"
                            />
                          </td> */}

                          <td style={{ textAlign: "center" }}>
                            <Link
                              to={`/adminDashboard/appsetting/list/videos-update/${item._id}`}
                            >
                              <ModeEditIcon />
                            </Link>

                            <DeleteForeverIcon
                              onClick={() => submit(item._id)}
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              ) : (
                <div>Loading...</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
