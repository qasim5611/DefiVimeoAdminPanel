// import React, { useState } from "react";
// import "./App.css";
// // import Header from "./components/Header";
// import { useMediaQuery } from "@mui/material";
// import Home from "./components/Home/Home";
// // import FAQ from "./components/FAQ/faq";
// import Footer from "./components/footer/footer";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import Business from "./components/Business/Business";
// import SrollButton from "./components/scrollButton/scrollbtn";
// import Logo from "./components/Logo/logo";
// // import Signup from "./components/signup/Signup";
// import Login from "./components/Login/Login";
// // import Forgotpass from "./components/Forgotpass/ForgotPass";
// // import Resetpass from "./components/Forgotpass/ResetPass";
// // import VerifyTockenMail from "./components/Forgotpass/VerifyTockenMail";

// import Admin from "./components/Admin/Admin";
// // import User from "./components/User/User";
// // import BlogPage from "./components/blogPage/blog";
// // import Privacy from "./components/privacyPage/privacy";
// import SwitchNetwork from "./networkSwitch";

// import PrivateRoute from "./components/PrivateRoutes/AdminPrivateRoute.js";
// // import PublicRoute from "./components/PublicRoutes/PublicRoute.js";
// import Snackbar from "./components/Customsnackbar/Customsnackbar.js";
// function App() {
//   const matches = useMediaQuery("(max-width:750px)");
//   const [open, setopen] = useState(false);

//   return (
//     <>
//       <BrowserRouter>
//         <Snackbar />
//         <Routes>
//           {/* <Route path="/" element={<Login />} /> */}

//           {/* <Route path="/userDashboard/*" element={<User />} /> */}
//           <Route
//             path="/adminDashboard/*"
//             element={
//               <PrivateRoute>
//                 <Admin />
//               </PrivateRoute>
//             }
//           />
//         </Routes>
//         <div>
//             All Routes Are He
//         </div>
//         <SrollButton />
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;
