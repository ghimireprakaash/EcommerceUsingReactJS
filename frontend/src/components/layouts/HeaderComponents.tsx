<<<<<<< HEAD
import React, { useState } from "react";
import { Modal, ModalHeader } from "reactstrap";
import { Link } from "react-router-dom";
import { LocalMall, PersonRounded, ShoppingCart } from "@mui/icons-material";
import { Button } from "@mui/material";
import Login from "../pages/auth/Login";
=======
import React from "react";
import { Link } from "react-router-dom";
import { LocalMall, PersonRounded, ShoppingCart } from "@mui/icons-material";
>>>>>>> 89969b6dc286dc80e7d449490cabb1fd5a609acd
// import LocalMallIcon from '@mui/icons-material/LocalMall';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function HeaderComponents() {
<<<<<<< HEAD
  // const [modal, setModal] = useState(false);

  return (
    <React.Fragment>
      {/* <Modal size="lg" isOpen={modal} toggle={() => setModal(!modal)}>
        <ModalHeader toggle={() => setModal(!modal)}>
          <Login />
        </ModalHeader>
      </Modal> */}

=======
  return (
    <React.Fragment>
>>>>>>> 89969b6dc286dc80e7d449490cabb1fd5a609acd
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
<<<<<<< HEAD
              <Button onClick={() => Login}>
                <PersonRounded sx={{ fontSize: 30, color: "white" }} />
              </Button>
              {/* <Link to="/login">
                <PersonRounded sx={{ fontSize: 30, color: "white" }} />
              </Link> */}
=======
              <Link to="/login">
                <PersonRounded sx={{ fontSize: 30, color: "white" }} />
              </Link>
>>>>>>> 89969b6dc286dc80e7d449490cabb1fd5a609acd
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
