import React, { useState } from "react";
import { Modal, ModalHeader } from "reactstrap";

export default function PopUpLoginComponent() {
  const [modal, setModal] = useState(false);
  return (
    <React.Fragment>
      <Modal size="lg" isOpen={modal} toggle={() => setModal(!modal)}>
        <ModalHeader toggle={() => setModal(!modal)}>Login</ModalHeader>
      </Modal>
    </React.Fragment>
  );
}
