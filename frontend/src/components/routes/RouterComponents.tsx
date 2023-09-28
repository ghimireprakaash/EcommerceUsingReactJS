import React from "react";
import { Routes, Route } from "react-router-dom";
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
        <Route path="/" element={<HomeComponents />} />
        <Route path="/login" element={<LoginComponents />} />
        <Route path="/register" element={<RegisterComponent />} />
        <Route path="/dashboard" element={<DashboardComponent />} />
        <Route
          path="/dashboard/manage-category"
          element={<CategoryComponent />}
        />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </React.Fragment>
  );
}

export default RouterComponents;
