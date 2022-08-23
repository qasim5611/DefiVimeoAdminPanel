import React, { useState, useEffect, useRef } from "react";
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
  Button,
  useMediaQuery,
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
import ReCAPTCHA from "react-google-recaptcha";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper.min.css";
import { Autoplay, Navigation } from "swiper";
import "swiper/modules/pagination/pagination.min.css";
import { HashLink } from "react-router-hash-link";
import { BsCheckCircleFill } from "react-icons/bs";

import { signupdata } from "./../../redux/actions/authuser.js";

// import { BsCheckCircleFill } from "react-icons/bi";

import { setSnackbar } from "../../redux/reducers/SnackbarReducer.js";

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
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let dispatch = useDispatch();

  const [isRecapVerfid, setisRecapVerfid] = useState(false);

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const errmsg = {
    color: "red",
    position: "relative",
    top: "-11px",
  };

  function onChange(value) {
    console.log("Captcha value:", value);
    setisRecapVerfid(true);
  }

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
    referral: "",
  });

  const [nameerr, setnameerr] = useState("");
  const [emailerr, setemailerr] = useState("");
  const [passerr, setpasserr] = useState("");

  const [clearpass, setclearpass] = useState(false);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

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

    if (
      values.name.length < 3 ||
      values.name.length > 30 ||
      values.name.length == 0
    ) {
      isvalid = false;
      setnameerr("Username needs to be 3 to 30 characters long");
      setemailerr("");
      setpasserr("");
    } else if (!isemailVer) {
      isvalid = false;
      setemailerr("Your Email is not Correct!");
      setpasserr("");
      setnameerr("");
    } else if (pass !== conpass || pass.length == 0 || conpass.length == 0) {
      isvalid = false;
      setpasserr("Password is not Match/Correct");
      setemailerr("");
      setnameerr("");
    } else {
      setnameerr("");
      setemailerr("");
      setpasserr("");
    }

    return isvalid;
  };

  const createAccounct = (e) => {
    e.preventDefault();

    var isFormvalid = validate();
    console.log("isvalid", isFormvalid);
    window.scrollTo(0, 200);
    if (isFormvalid) {
      dispatch(signupdata(values));
    }

    //  inputRef.current.focus();
  };

  const MySignupMsg = useSelector((state) => state.Auth);
  console.log("SignUp Responce is", MySignupMsg.SignupMsg);

  //  if (SignupMsg.SignupMsg == "Email Already Exist") {
  //    dispatch(setSnackbar(true, "error", "Email Already Exist"));
  //  } else if (SignupMsg.SignupMsg == "Verify your mail Now Plz") {
  //    dispatch( setSnackbar( true, "info",     "Registered Successfully!, Check your mail for verification" ) );
  //  }
   if (MySignupMsg.SignupMsg == "Email Already Exist") {
     //  dispatch(setSnackbar(true, "error", "Email Already Exist"));
     toast.info("Email Already Exist", {
       position: "top-right",
       autoClose: 5000,
       hideProgressBar: false,
       closeOnClick: true,
       pauseOnHover: true,
       draggable: true,
       progress: undefined,
     });
   } else if (MySignupMsg.SignupMsg == "Verify your mail Now Plz") {
     toast.success(
       "Registered Successfully!, Check your mail for verification",
       {
         position: "top-right",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
       }
     );
     //  dispatch( setSnackbar( true, "info",     "Registered Successfully!, Check your mail for verification" ) );
   }

  return (
    <Box
      sx={{
        background:
          "linear-gradient(180deg, rgba(255,189,117,1) 0%, rgba(255,250,246,1) 100%)",
        mb: "30px",
      }}
    >
      {/* <BelowHead /> */}
      <Container maxWidth="sm">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            fontSize={{ xs: "28px", sm: "48px" }}
            sx={{
              //   fontSize: "48px",
              fontWeight: "Bold",
              color: "#903800",
              borderBottom: "3px solid #903800",
              my: "5%",
              fontFamily: "MilkyNice",
            }}
          >
            Sign Up
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
                New to RagDoll Cat NFT?
              </Typography>
              <Typography
                fontSize={{ xs: "12px", sm: "20px" }}
                sx={{
                  fontWeight: "Bold",
                  color: "#371f00",
                  fontFamily: "MilkyNice",
                }}
              >
                Create New Account
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
                placeholder="Enter Your User Name"
                onChange={handleChange("name")}
              />
            </Paper>
            <center>
              {nameerr ? <div style={errmsg}>{nameerr}</div> : null}
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
                <img src={email} alt="" style={{ maxWidth: "40px" }} />
              </IconButton>
              <InputBase
                sx={{ ml: 1, flex: 1, color: "#903800" }}
                placeholder="Enter Your Email Address"
                onChange={handleChange("email")}
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
                placeholder="User Name Password"
                onChange={handleChange("password")}
                type="password"
              />
            </Paper>
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
                <BsCheckCircleFill
                  style={
                    values.password === values.cpassword &&
                    values.password.length !== 0 &&
                    values.cpassword.length !== 0
                      ? {
                          color: "green",
                          maxWidth: "40px",
                          height: "40px",
                          width: "40px",
                        }
                      : { maxWidth: "40px", height: "40px", width: "40px" }
                  }
                />
              </IconButton>
              <InputBase
                sx={{ ml: 1, flex: 1, color: "#903800" }}
                placeholder="Confirm Your Password"
                onChange={handleChange("cpassword")}
                type="password"
              />
            </Paper>
            {passerr ? <div style={errmsg}>{passerr}</div> : null}
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
                <img src={marketing} alt="" style={{ maxWidth: "40px" }} />
              </IconButton>
              <InputBase
                sx={{ ml: 1, flex: 1, color: "#903800" }}
                placeholder="Referral (Optional)"
                onChange={handleChange("referral")}
              />
            </Paper>
          </Box>
          {/* **********Recaptcha code************ */}
          <Box>
            <ReCAPTCHA
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              onChange={onChange}
            />
          </Box>
          {/* **********END Recaptcha code************ */}
          <Typography
            fontSize={{ xs: "14px", sm: "18px" }}
            sx={{
              fontWeight: "Bold",
              color: "#903800",
              //   fontFamily: "MilkyNice",
              textAlign: "center",
              paddingTop: "20px",
            }}
          >
            By clicking "Create Account" You agree to the terms and conditions
            of the following: Privacy & Terms
          </Typography>
          <Button
            disabled={!isRecapVerfid}
            onClick={createAccounct}
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
            {" "}
            Create Account
          </Button>
          <Box
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
            Already have an account?
          </Typography>
          <Box
            border="2.5px solid #C96100"
            borderRadius="30px"
            mt={3}
            sx={{ width: "fit-content" }}
          >
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Button
                sx={{
                  border: "1.5px solid white",
                  borderRadius: "30px",
                  backgroundImage:
                    "linear-gradient(to right, #FF8605, #FFAB24)",
                  fontSize: { xs: "17px", md: "24px" },
                  fontWeight: "800",
                  boxShadow: 4,
                  textAlign: "center",
                  py: "10px",
                  px: "50px",
                }}
              >
                {" "}
                Log In
              </Button>
            </Link>
          </Box>
        </Box>
      </Container>

     
    </Box>
  );
};

export default Signup;
