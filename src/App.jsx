import React, { useState } from "react";
import "./App.css";
import { useMediaQuery } from "@mui/material";
import Home from "./components/Home/Home";
import Footer from "./components/footer/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SrollButton from "./components/scrollButton/scrollbtn";
import Logo from "./components/Logo/logo";
import Login from "./components/Login/Login";

import Admin from "./components/Admin/Admin";
import LoadingSvg from "./LoadingSvg";

import SwitchNetwork from "./networkSwitch";
import PrivateRoute from "./components/PrivateRoutes/AdminPrivateRoute.js";
// import PublicRoute from "./components/PublicRoutes/PublicRoute.js";
import Snackbar from "./components/Customsnackbar/Customsnackbar.js";
import ClipLoader from "react-spinners/ClipLoader";
function App() {
  const matches = useMediaQuery("(max-width:750px)");
  const [open, setopen] = useState(false);
  const [loading, setLoading] = useState(true);


  //   if (loading === true) {
  //   return <LoadingSvg />;
  // }
  return (
    <>
      
      <BrowserRouter>
        <Snackbar />
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/signup" element={<Signup />} /> */}

          {/* <Route path="/userDashboard/*" element={<User />} /> */}
          <Route
            path="/adminDashboard/*"
            element={
              <PrivateRoute>
                <Admin />
              </PrivateRoute>
            }
          />
        </Routes>
        <SrollButton />
      </BrowserRouter>
    </>
  );
}

export default App;
