import AdminDashboard from "./AdminDashboard/AdminDashboard";
import AdminDrawer from "./AdminDrawer/AdminDrawer";
import { Routes, Route } from "react-router-dom";

import PrivateRoute from "./../../components/PrivateRoutes/AdminPrivateRoute";
// import PublicRoute from "./../../components/PublicRoutes/PublicRoute";

import Course from "./Courses/Courses.jsx";
import CourseCreate from "./Courses/CourseCreate.jsx";
import CourseUpdate from "./Courses/CourseUpdate.jsx";

import Videos from "./Videos/Videos.jsx";
import VideosCreate from "./Videos/VideoUpload.jsx";
import VideosUpdate from "./Videos/VideoUpdate.jsx";

import InvestDashboard from "./InvestDashboard/InvestDashboard";
export default () => {
  return (
    <>
      <AdminDrawer>
        <Routes>
          <Route
            path="/"
            element={  <PrivateRoute>
                <AdminDashboard />
              </PrivateRoute>
            }
          />
      
          <Route path="/appsetting/list/course" element={<Course />} />
          <Route path="/appsetting/list/course-create"  element={<CourseCreate />} />
          <Route path="/appsetting/list/course-update/:id" element={<CourseUpdate />} />

          <Route path="/appsetting/list/videos" element={<Videos />} />
          <Route path="/appsetting/list/videos-create" element={<VideosCreate />} />
          <Route path="/appsetting/list/videos-update/:id" element={<VideosUpdate />}  />

        </Routes>
      </AdminDrawer>
    </>
  );
};
