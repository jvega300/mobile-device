/* eslint-disable import/no-anonymous-default-export */
// Modules
import React from "react";

// CSS
import "./modal.scss";

import { Modal, Button } from "react-bootstrap";


// Component
export default ({
  state, 
  handleModalClose,
  title = "Information for user",
  msg = "Your session has expired. Data will be reloaded.",
  ok = "Ok"
}) => {

  return (    
    <>
    <Modal 
      show={state} 
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      >
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {msg}
      </Modal.Body>
      <Modal.Footer>
        
        <Button variant="primary" onClick={handleModalClose}>
          {ok}
        </Button>
      </Modal.Footer>
    </Modal>
  </>

  );
};