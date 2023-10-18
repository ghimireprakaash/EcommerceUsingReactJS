import React from "react";
import { Link } from "react-router-dom";
import { LocalMall, PersonRounded, ShoppingCart } from "@mui/icons-material";
import SearchBarComponents from "./SearchBarComponents";
import NavBar from "./nav/NavBar";
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
          <div className="header-logo-container">
            <Link to="/" className="header-logo">
              <LocalMall sx={{ fontSize: 40, color: "white" }} />
              <h1>Store</h1>
            </Link>
          </div>

          <SearchBarComponents />

          <div className="top-nav-links">
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
        </div>

        {/* NavBar component */}
        <NavBar />
        {/* NavBar End */}
      </div>
    </React.Fragment>
  );
}

export default HeaderComponents;
