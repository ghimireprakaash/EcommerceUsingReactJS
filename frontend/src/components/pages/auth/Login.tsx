import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

export default function Login() {
  const [modal, setModal] = useState(false);

  return (
    <React.Fragment>
      <Modal size="lg" isOpen={modal} toggle={() => setModal(!modal)}>
        <ModalHeader toggle={() => setModal(!modal)}>
          <Login />
        </ModalHeader>
        <ModalBody>
          <div className="container">
            <div className="row mt-5">
              <div className="spContainer mx-auto">
                <div className="card px-4 py-5 border-0 shadow">
                  <div className="d-inline text-left mb-3">
                    <h3 className="font-weight-bold">Login</h3>
                  </div>
                  <div className="d-inline text-center mb-0">
                    <div className="form-group mx-auto">
                      <input
                        className="form-control inpSp"
                        type="text"
                        placeholder="username"
                      />
                    </div>
                  </div>
                  <div className="d-inline text-center mb-3">
                    <div className="form-group mx-auto">
                      <input
                        className="form-control inpSp"
                        type="password"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <div className="d-inline text-left mb-3">
                    <div className="form-group mx-auto">
                      <button className="btn btn-primary">Confirm</button>
                      <Link
                        className="small text-black-50 pl-2 ml-2 border-left"
                        to=""
                      >
                        Forgot Password ?
                      </Link>
                    </div>
                  </div>
                  <div className="d-inline text-left mt-3">
                    <div className="form-group mx-auto mb-0">
                      <h6>Don't have an account?</h6>
                      <a
                        className="text-black font-weight-bold regStr"
                        href="#"
                      >
                        <h3>Register here</h3>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
}
