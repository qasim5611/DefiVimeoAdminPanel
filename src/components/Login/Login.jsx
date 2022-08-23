import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AccountCircle } from "@mui/icons-material";
import {
  Container,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputBase,
  InputLabel,
  Paper,
  TextField,
  Typography,
  useMediaQuery,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";
import back from "../../images/welcome-back.png";
import userName from "../../images/man-user.png";
import email from "../../images/email.png";
import padlock from "../../images/padlock.png";
import check from "../../images/check-mark.png";
import marketing from "../../images/marketing.png";
import robot from "../../images/robot.png";
import BelowHead from "../belowHead/belowHead";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import ReCAPTCHA from "react-google-recaptcha";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper.min.css";
import { Autoplay, Navigation } from "swiper";
import "swiper/modules/pagination/pagination.min.css";
import { HashLink } from "react-router-hash-link";

import { setSnackbar } from "../../redux/reducers/SnackbarReducer.js";
import { useNavigate } from "react-router-dom";


import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

import { authuser } from "./../../redux/actions/authuser.js";
import { isLogin } from "./../../Hooks/useAuth.js";
import { myRole } from "./../../Hooks/useAuth.js";

import "./Login.css";

import bgImg from "../../images/bg-hero.png"

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Signup = () => {
  const banner = [
    "banner 1",
    "banner 2",
    "banner 3",
    "banner 4",
    "banner 5",
    "banner 6",
  ];
  const matches1 = useMediaQuery("(min-width:1050px)");

  // const LoginMsg = useSelector((state) => state.Auth);
  const LoginMsfghg = useSelector((state) => state.Auth);


  React.useEffect(() => {
    window.scrollTo(0, 0);

  }, []);

  let dispatch = useDispatch();
  const navigate = useNavigate();

  const errmsg = {
    color: "red",
    position: "relative",
    top: "-11px",
  };

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const [emailerr, setemailerr] = useState("");
  const [passerr, setpasserr] = useState("");

  const validate = () => {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isemailVer = re.test(values.email);
    console.log("isemailVer", isemailVer);

    const pass = values.password;
    console.log("pass", pass);

    const conpass = values.cpassword;
    console.log("conpass", conpass);

    let isvalid = true;
    // const isvalid = {
    //   isvalidbool: true,

    // };

    if (!isemailVer) {
      isvalid = false;
      setemailerr("Your Email is not Correct!");
      setpasserr("");
    } else if (pass == "") {
      isvalid = false;
      setpasserr("Password ShouldNot Be Empty");
      setemailerr("");
    } else {
      setemailerr("");
      setpasserr("");
    }

    return isvalid;
  };

  //  useEffect(() => {
  //    // setauthloginMsg(loginMsg);
  //    console.log(loginMsg);
  //    if (loginMsg == "Password Not Correct") {
  //      setMsgone(true);
  //    }
  //  }, [loginMsg]);

  const Submithandler = (e) => {
    e.preventDefault();

    var isFormvalid = validate();
    console.log("isvalid", isFormvalid);

    if (isFormvalid) {
      dispatch(authuser(values));
      console.log("ok");
    }
  };
  ////////////////////
  const LoginMsg = useSelector((state) => state.Auth);

  console.log(LoginMsg.LoginMsg, "loginMsg");
if (LoginMsg.LoginMsg == "Password Not Correct") {
  // dispatch(setSnackbar(true, "error", "Password Not Correct"));
  toast.error("Password Not Correct!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
} else if (
  LoginMsg.LoginMsg ==
  "NOT Verified, Check Mail, We Already Have Send you Email"
) {
  // dispatch(setSnackbar(true, "info", "Password Not Correct"));
    toast.info("NOT Verified, Check Mail, We Already Have Send you Email", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
} else if (LoginMsg.LoginMsg == "Login Successfull" && isLogin() === true && myRole() === 'Admin') {
  // dispatch(setSnackbar(true, "success", "Login Successfull"));
  toast.success("Admin Login Successfull", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
  //  navigate(to="/blog");
  navigate("/adminDashboard", { replace: true });
}
else if (LoginMsg.LoginMsg == "Login Successfull" && isLogin() === true && myRole() === 'User') {
  // dispatch(setSnackbar(true, "success", "Login Successfull"));
  toast.warn("Sorry you Are Not Admin", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
  //  navigate(to="/blog");
  // navigate("/", { replace: true });
}
else if (LoginMsg.LoginMsg == "Not available email") {
  // dispatch(setSnackbar(true, "error", "Not available email"));
  toast.warn("Not available email", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}
    const [isRecapVerfid, setisRecapVerfid] = useState(true);

    function onChange(value) {

      console.log("Captcha value:", value);
      setisRecapVerfid(true);
    }


      // function onChange(e) {
      //   e.preventDefault();
      //   grecaptcha.ready(function () {
      //     grecaptcha
      //       .execute("6LeVHaAfAAAAAMtTBCfxxlHsJULQDAJP8OUJGQQl", { action: "submit" })
      //       .then(function (token) {
      //         setisRecapVerfid(true);
      //         // Add your logic to submit to your backend server here.
      //       });
      //   });
      // }

  return (
    <Box
    sx={{
      background: `url(${bgImg})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 100%",
    }}
  
    >
      {/* <BelowHead /> */}
      <Container maxWidth="sm">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            fontSize={{ xs: "28px", sm: "48px" }}
            sx={{
              fontWeight: "Bold",
              color: "#903800",
              borderBottom: "3px solid #903800",
              my: "5%",
              fontFamily: "MilkyNice",
            }}
          >
           Defi Fire Admin Log In
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mb: "5%",
            }}
          >
            <img
              src={back}
              alt=""
              style={{ marginRight: "30px", maxWidth: "80px", width: "100%" }}
            />
            <Box>
              <Typography
                fontSize={{ xs: "18px", sm: "30px" }}
                sx={{
                  fontWeight: "Bold",
                  color: "#371f00",
                  fontFamily: "MilkyNice",
                }}
              >
                Have an account?
              </Typography>
              <Typography
                fontSize={{ xs: "12px", sm: "20px" }}
                sx={{
                  fontWeight: "Bold",
                  color: "#371f00",
                  fontFamily: "MilkyNice",
                }}
              >
                Log In
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
            }}
          >
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: "100%",
                border: "2px solid #ff5100",
                borderRadius: "40px",
                mb: "20px",
              }}
            >
              <IconButton sx={{ p: "5px" }} aria-label="menu">
                <img src={userName} alt="" style={{ maxWidth: "40px" }} />
              </IconButton>
              <InputBase
                sx={{ ml: 1, flex: 1, color: "#903800" }}
                placeholder="Enter Your Email"
                onChange={handleChange("email")}
                autoComplete
                type="email"
                required
              />
            </Paper>
            <center>
              {emailerr ? <div style={errmsg}>{emailerr}</div> : null}
            </center>

            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: "100%",
                border: "2px solid #ff5100",
                borderRadius: "40px",
                mb: "20px",
              }}
            >
              <IconButton sx={{ p: "5px" }} aria-label="menu">
                <img src={padlock} alt="" style={{ maxWidth: "40px" }} />
              </IconButton>
              <InputBase
                sx={{ ml: 1, flex: 1, color: "#903800" }}
                placeholder="Enter your Password"
                type="password"
                onChange={handleChange("password")}
              />
            </Paper>
            <center>
              {passerr ? <div style={errmsg}>{passerr}</div> : null}
            </center>
          </Box>
          {/* <Box mt={-1.8} mb={1} width="100%" textAlign="right">
            <Link
              to="/forgotpass"
              style={{ textDecoration: "none", color: "#ff6704" }}
            >
              <Box color="#ff6704" fontSize={{ md: "15px", xs: "13px" }}>
                Forgot password?
              </Box>
            </Link>
          </Box> */}
          {/* **********Recaptcha code************ */}
          {/* <Box>
            <ReCAPTCHA
              sitekey="6LeVHaAfAAAAAMtTBCfxxlHsJULQDAJP8OUJGQQl"
              onChange={onChange}
            />
          </Box> */}
          {/* **********END Recaptcha code************ */}
          <Box
            border="2.5px solid #C96100"
            borderRadius="30px"
            my={8}
            sx={{ width: "fit-content" }}
          >
            <Button
              // disabled={!isRecapVerfid}
              onClick={Submithandler}
              sx={{
                border: "1.5px solid white",
                borderRadius: "30px",
                backgroundImage: "linear-gradient(to right, #FF8605, #FFAB24)",
                fontSize: { xs: "17px", md: "24px" },
                fontWeight: "800",
                boxShadow: 4,
                textAlign: "center",
                // py: "10px",
                px: "50px",
              }}
            >
              Log In
            </Button>
          </Box>

          {/* <Box
            sx={{
              width: "100%",
              height: "8px",
              background: "#9e8164",
              borderRadius: "20px",
              mb: "5%",
            }}
          ></Box>
          <Typography
            fontSize={{ xs: "18px", sm: "30px" }}
            sx={{
              fontWeight: "Bold",
              color: "#371f00",
              //   fontFamily: "MilkyNice",
              textAlign: "center",
            }}
          >
            New to RagDoll NFT?
          </Typography> */}

          {/* <Link to="/signup" style={{ textDecoration: "none", color: "black" }}>
            <Button
              sx={{
                borderRadius: "30px",
                background: "#ff5100",
                fontSize: { xs: "14px", md: "24px" },
                "&:hover": {
                  background: "#ff5100a1",
                },
                color: "#371f00",
                fontWeight: "800",
                boxShadow: 4,
                textAlign: "center",
                py: "10px",
                px: "20px",
                my: "5%",
              }}
            >
              Create Account
            </Button>
          </Link> */}
        </Box>
      </Container>
    </Box>
  );
};

export default Signup;
