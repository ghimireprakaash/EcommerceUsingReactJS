import React from "react";
import { Link } from "react-router-dom";
import adminImage from "../../../assets/images/admin-96.png";

export default function AdminHeader() {
  return (
    <React.Fragment>
      <header
        id="header"
        className="header fixed-top d-flex align-items-center"
      >
        <div className="d-flex align-items-center justify-content-between">
          <Link to="/dashboard" className="logo d-flex align-items-center">
            <span className="d-none d-lg-block">Admin</span>
          </Link>
          <i className="bi bi-list toggle-sidebar-btn" />
        </div>

        <div className="search-bar">
          <form
            className="search-form d-flex align-items-center"
            method="POST"
            action="#"
          >
            <input
              type="text"
              name="query"
              placeholder="Search"
              title="Enter search keyword"
            />
            <button type="submit" title="Search">
              <i className="bi bi-search" />
            </button>
          </form>
        </div>
        {/* End Search Bar */}

        <nav className="header-nav ms-auto">
          <ul className="d-flex align-items-center">
            <li className="nav-item d-block d-lg-none">
              <Link className="nav-link nav-icon search-bar-toggle " to="">
                <i className="bi bi-search" />
              </Link>
            </li>
            {/* End Search Icon*/}

            <li className="nav-item dropdown pe-3">
              <Link
                className="nav-link nav-profile d-flex align-items-center pe-0"
                to=""
                data-bs-toggle="dropdown"
              >
                <img
                  src={adminImage}
                  alt="Profile"
                  className="rounded-circle"
                />
                <span className="d-none d-md-block dropdown-toggle ps-2">
                  Admin
                </span>
              </Link>

              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                <li className="dropdown-header">
                  <h6>Admin</h6>
                  <span>React Developer</span>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link
                    to=""
                    className="dropdown-item d-flex align-items-center"
                  >
                    <i className="bi bi-person" />
                    <span>My Profile</span>
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link
                    to=""
                    className="dropdown-item d-flex align-items-center"
                  >
                    <i className="bi bi-gear" />
                    <span>Account Settings</span>
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link
                    className="dropdown-item d-flex align-items-center"
                    to=""
                  >
                    <i className="bi bi-box-arrow-right" />
                    <span>Sign Out</span>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
    </React.Fragment>
  );
}
