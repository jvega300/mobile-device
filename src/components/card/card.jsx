/* eslint-disable import/no-anonymous-default-export */

// Modules
import React from "react";

// bootstrap
import { Row, Col } from "react-bootstrap";

import { ReactComponent as InfoIcon } from "../../assets/icons/info.svg";

// CSS
import "./card.scss";

export default ({ data }) => {
  

  return (

    <div data-test-id="card-test-id" key="" className="card">
      <img src="" alt="model" />
      <p className="price">Price</p>

      <div className="card-body">
        <h2>Model</h2>
        <Row className="actions">
          <Col xs={12} md={12} lg={6} sm={12} className="textSmall">
            <span>Brand</span>
          </Col>
            
          <Col xs={12} md={12} lg={6} sm={12} className="textSmall">
            <InfoIcon className="icon" />

            Label
          </Col>
        </Row>
      </div>
    </div>

  );
};