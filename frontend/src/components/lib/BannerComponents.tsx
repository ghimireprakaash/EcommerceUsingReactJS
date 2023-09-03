import React from "react";
import a from "../../assets/images/a.jpg";
import b from "../../assets/images/b.jpeg";
import c from "../../assets/images/c.jpeg";
import d from "../../assets/images/d.jpg";
import "../../assets/scss/frontend.scss";

export default function BannerComponents() {
  return (
    <React.Fragment>
      <div className="banner-items">
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={a} className="d-block w-100" alt="First Image" />
            </div>
            <div className="carousel-item">
              <img src={b} className="d-block w-100" alt="Second Image" />
            </div>
            <div className="carousel-item">
              <img src={c} className="d-block w-100" alt="Third Image" />
            </div>
            <div className="carousel-item">
              <img src={d} className="d-block w-100" alt="Fourth Image" />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}
