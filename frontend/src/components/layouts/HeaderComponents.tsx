import React from "react";
import { Link } from "react-router-dom";
import { LocalMall, PersonRounded, ShoppingCart } from "@mui/icons-material";
// import LocalMallIcon from '@mui/icons-material/LocalMall';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function HeaderComponents() {
  return (
    <React.Fragment>
      <div className="top-header">
        <div className="first-header">
          <Link to="/" className="logo">
            <LocalMall sx={{ fontSize: 40, color: "white" }} />
            <h1>Store</h1>
          </Link>
          <div className="input-group">
            <input
              type="search"
              className="form-control"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <button type="button" className="btn btn-outline-primary">
              search
            </button>
          </div>
          <ul>
            <li>
              <Link to="/login">
                <PersonRounded sx={{ fontSize: 30, color: "white" }} />
              </Link>
            </li>
            <li>
              <Link to="">
                <ShoppingCart sx={{ fontSize: 30, color: "white" }} />
              </Link>
            </li>
            <li>
              <Link to=""></Link>
            </li>
          </ul>
        </div>
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
      </div>
    </React.Fragment>
  );
}

export default HeaderComponents;
