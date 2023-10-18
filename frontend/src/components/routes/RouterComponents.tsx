import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import HomeComponents from "../pages/home/HomeComponents";
import LoginComponents from "../pages/auth/LoginComponents";
import PageNotFound from "../pages/errors/PageNotFound";
import DashboardComponent from "../admin/pages/DashboardComponent";
import CategoryComponent from "../admin/pages/CategoryComponent";
import RegisterComponent from "../pages/auth/RegisterComponent";

function RouterComponents() {
  return (
    <React.Fragment>
      <Routes>
        {/* Incase the path doesn't exist */}
        <Route path="*" element={<PageNotFound />} />
        {/* Incase the path doesn't exist */}

        <Route path="/" element={<HomeComponents />} />
        <Route path="/login" element={<LoginComponents />} />
        <Route path="/register" element={<RegisterComponent />} />
        <Route path="/dashboard">
          <Route path="/dashboard" element={<DashboardComponent />} />
          <Route
            path="/dashboard/manage-category"
            element={<CategoryComponent />}
          />
          {/* <Route path="/dashboard/*">
            <Route path="/dashboard" element={<DashboardComponent />} />
          </Route> */}
        </Route>
      </Routes>
    </React.Fragment>
  );
}

export default RouterComponents;
