import React from "react";
import { Link } from "react-router-dom";
import { LocalMall, PersonRounded, ShoppingCart } from "@mui/icons-material";
import SearchBarComponents from "./SearchBarComponents";
// import Login from "../pages/auth/Login";
// import { Button } from "reactstrap";
// import PopUpLoginComponent from "../pages/auth/PopUpLoginComponent";
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

          <SearchBarComponents />

          <ul>
            <li>
              {/* <Button
                style={{ background: "transparent", border: "none" }}
                onClick={PopUpLoginComponent}
              >
                <PersonRounded sx={{ fontSize: 30, color: "white" }} />
              </Button> */}
              {/* <Link to="" onClick={() => Login}>
                <PersonRounded sx={{ fontSize: 30, color: "white" }} />
              </Link> */}
              <Link to="/login">
                <PersonRounded sx={{ fontSize: 30, color: "white" }} />
              </Link>
            </li>
            <li>
              <Link to="">
                <ShoppingCart sx={{ fontSize: 30, color: "white" }} />
              </Link>
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
