import React from "react";
import { Link } from "react-router-dom";
import laptop from "../../assets/images/laptop.jpg";

export default function ProductCardComponents() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mt-5 mb-5">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={laptop}
                className="card-img-top"
                alt="Product Image"
                height="250"
              />
              <div className="card-body">
                <h5 className="card-title">Product title</h5>
                <p className="card-text"></p>
                <Link to="" className="btn btn-outline-primary">
                  View Product
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
