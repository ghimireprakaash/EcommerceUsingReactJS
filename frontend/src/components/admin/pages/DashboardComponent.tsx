import React from "react";
import AdminHeader from "../layouts/AdminHeader";
import AdminAside from "../layouts/AdminAside";
import AdminFooter from "../layouts/AdminFooter";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <React.Fragment>
      <AdminHeader />
      <AdminAside />

      <main id="main" className="main vh-100">
        <div className="pagetitle">
          <h1>Dashboard</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/dashboard">Home</Link>
              </li>
              <li className="breadcrumb-item active">Dashboard</li>
            </ol>
          </nav>
        </div>
        <section className="section dashboard">
          <div className="row"></div>
        </section>
      </main>

      <AdminFooter />
    </React.Fragment>
  );
}
