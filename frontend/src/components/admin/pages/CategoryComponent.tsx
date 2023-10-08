import React from "react";
import AdminHeader from "../layouts/AdminHeader";
import AdminFooter from "../layouts/AdminFooter";
import AdminAside from "../layouts/AdminAside";
import MyEditor from "../editor/Editor";
import { Link } from "react-router-dom";
import DashboardForm from "../layouts/DashboardForm";

export default function CategoryComponent() {
  return (
    <React.Fragment>
      <AdminHeader />
      <AdminAside />

      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Manage Category</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/dashboard">Home</Link>
              </li>
              <li className="breadcrumb-item active">Category</li>
            </ol>
          </nav>
        </div>

        <section className="section dashboard">
          <div className="form">
            <DashboardForm />
          </div>
          <div>
            <MyEditor />
          </div>
        </section>
      </main>

      <AdminFooter />
    </React.Fragment>
  );
}
