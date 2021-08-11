/* eslint-disable import/no-anonymous-default-export */
// Modules
import React from "react";
import { useSelector } from "react-redux";


// bootstrap
import { Row,Col, Container } from "react-bootstrap";

// Selectors
import { getCartCountSelector } from "../../store/selectors";


import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs";


// CSS
import "./header.scss";

import { ReactComponent as Logo } from "../../assets/icons/bag.svg";
import { ReactComponent as Cart } from "../../assets/icons/carts.svg";
import { Link } from "react-router-dom";

import { ROUTE_HOME } from "../../constants/routes";

// Component
export default ({
  title = "Mobile Shop",
  products = "Products"
}) => {

  const cartCount = useSelector(getCartCountSelector);
  
  

  return (    
    <Container className="header">
      <Row>
        <Col sm={8}>
          <div className="aligned">
            <Link to={ROUTE_HOME}>
              <Logo width="48px" />
              <h1>{title}</h1>
            </Link>
          </div>
        </Col>
        <Col sm={4} className="cart">

          <Cart width="24px" /> {cartCount ? cartCount : 0} {products}
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