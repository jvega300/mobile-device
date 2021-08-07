/* eslint-disable import/no-anonymous-default-export */
// Modules
import React from "react";


// bootstrap
import { Row,Col, Container } from "react-bootstrap";


import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs";


// CSS
import "./header.scss";

import { ReactComponent as Logo } from "../../assets/icons/bag.svg";
import { ReactComponent as Cart } from "../../assets/icons/carts.svg";
import { Link } from "react-router-dom";

import { ROUTE_HOME } from "../../constants/routes";


// Component
export default () => {
  
  

  return (    
    <Container className="header">
      <Row>
        <Col sm={8}>
          <div className="aligned">
            <Link to={ROUTE_HOME}>
              <Logo width="48px" />
              <h1>Mobile Shop</h1>
            </Link>
          </div>
        </Col>
        <Col sm={4} className="cart">

          <Cart width="24px" /> 0 Products
        </Col>
      </Row>
      <Row>
        <Col sm={12} className="breadcrums">
          <Breadcrumbs />
        </Col> 
      </Row>
    </Container>
    

  );
};