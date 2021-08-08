/* eslint-disable import/no-anonymous-default-export */
// Modules
import React from "react";

// CSS
import "./modal.scss";

import { Modal, Button } from "react-bootstrap";


// Component
export default ({state, handleModalClose}) => {

  return (    
    <>
    <Modal 
      show={state} 
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      >
      <Modal.Header>
        <Modal.Title>Information for user</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Your session has expired. Data will be reloaded.
      </Modal.Body>
      <Modal.Footer>
        
        <Button variant="primary" onClick={handleModalClose}>
          Ok
        </Button>
      </Modal.Footer>
    </Modal>
  </>

  );
};