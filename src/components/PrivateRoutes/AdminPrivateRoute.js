import React from "react";
import { Navigate } from "react-router-dom";
import { isLogin } from "../../Hooks/useAuth";
import { myRole } from "../../Hooks/useAuth";

// import { withRouter } from "react-router-dom";
// import Header from "../Header.jsx";
//admin
// import HeaderLogout from "../HeaderLogout.jsx";
// import AdminHeaderLogout from "../AdminHeaderLogout.jsx";

const PrivateRoute = ({ children }) => {
  // return (

  //   <Route {...rest}> {isLogin ? children : <Navigate to="/login" /> } </Route>
  // );
  // const auth = useAuth();
  // console.log("PrivateRoute isLogin");
  // console.log(isLogin());
  // console.log("PrivateRoute myRole");
  // console.log(myRole());

  return (
    <>
      {/* a ? b : (c ? d : e) */}
      {isLogin() == true && myRole() == "Admin" ? (
        <>
          {/* adminDashboard Header */}
          {/* <AdminHeaderLogout /> */}
          {/* <Navigate to="/adminDashboard" /> */}
          {children}
        </>
      ) : (
        <>
          <Navigate to="/" />
        </>
      )}
    </>
  );
};

export default PrivateRoute;
