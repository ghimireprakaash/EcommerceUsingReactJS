import React from "react";
import { Link } from "react-router-dom";

function FooterComponents() {
  return (
    <React.Fragment>
      <div className="">
        <footer className="text-center text-lg-start bg-light text-muted">
          {/* Section: Social media */}
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            {/* Left */}
            <div className="me-5 d-none d-lg-block">
              <span>Get connected with us on social networks:</span>
            </div>
            {/* Left */}
            {/* Right */}
            <div>
              <Link to="" className="me-4 text-reset">
                <i className="fa fa-facebook-f" />
              </Link>
              <Link to="" className="me-4 text-reset">
                <i className="fa fa-twitter" />
              </Link>
              <Link to="" className="me-4 text-reset">
                <i className="fa fa-google" />
              </Link>
              <Link to="" className="me-4 text-reset">
                <i className="fa fa-instagram" />
              </Link>
              <Link to="" className="me-4 text-reset">
                <i className="fa fa-linkedin" />
              </Link>
              <Link to="" className="me-4 text-reset">
                <i className="fa fa-github" />
              </Link>
            </div>
            {/* Right */}
          </section>
          {/* Section: Social media */}
          {/* Section: Links  */}
          <section className="">
            <div className="container text-center text-md-start mt-5">
              {/* Grid row */}
              <div className="row mt-3">
                {/* Grid column */}
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  {/* Content */}
                  <h6 className="text-uppercase fw-bold mb-4">
                    {/* <i className="fas fa-gem me-3" /> */}
                    E-commerce Website
                  </h6>
                  <p>
                    Here you can use rows and columns to organize your footer
                    content. Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                  <p>
                    <Link to="" className="text-reset">
                      Laptops
                    </Link>
                  </p>
                  <p>
                    <Link to="" className="text-reset">
                      Smartphones
                    </Link>
                  </p>
                  <p>
                    <Link to="" className="text-reset">
                      PC Components
                    </Link>
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                  <p>
                    <Link to="" className="text-reset">
                      Pricing
                    </Link>
                  </p>
                  <p>
                    <Link to="" className="text-reset">
                      Settings
                    </Link>
                  </p>
                  <p>
                    <Link to="" className="text-reset">
                      Orders
                    </Link>
                  </p>
                  <p>
                    <Link to="" className="text-reset">
                      Help
                    </Link>
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                  <p>
                    <i className="fa fa-home me-3" /> Kathmandu, Nepal
                  </p>
                  <p>
                    <i className="fa fa-envelope me-3" />
                    info@example.com
                  </p>
                  <p>
                    <i className="fa fa-phone me-3" /> + 977 ##########
                  </p>
                </div>
                {/* Grid column */}
              </div>
              {/* Grid row */}
            </div>
          </section>
          {/* Section: Links  */}
          {/* Copyright */}
          <div
            className="text-center p-4"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
          >
            © 2023 Copyright
          </div>
          {/* Copyright */}
        </footer>
      </div>
    </React.Fragment>
  );
}

export default FooterComponents;