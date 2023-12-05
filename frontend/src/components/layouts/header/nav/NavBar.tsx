import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <React.Fragment>
      <div className="second-header">
        <ul>
          <li>
            <Link to="/" className="nav-items">
              Categories
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-items">
              Mobile Phones
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-items">
              Mobile Accessories
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-items">
              Laptops
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-items">
              PC Components
            </Link>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}
