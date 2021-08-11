// Modules
import React, { useEffect, useState } from "react";
import { withRouter, Route, Switch, useHistory } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import { useDispatch } from "react-redux";

// Containers
import HomeContainer from "./containers/home/home.container";
import DetailContainer from "./containers/detail/detail.container";


// Component
import Header from "./components/header/header"
import Modal from "./components/modal/modal";

// Routes
import {
  ROUTE_HOME,
  ROUTE_DETAIL
} from "./constants/routes";

import * as tp from "./action-types";

import * as CONSTANTS from "./constants/constants";

import './App.scss';



function App() {

  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const selectProduct = () => {
    dispatch({ type: tp.LOAD_PRODUCTS });
  };

  const handleModalClose = () => {
    localStorage.setItem(CONSTANTS.TIMESTAMP, JSON.stringify(objectTimestamp));
    selectProduct()
    history.push(ROUTE_HOME);
    setShowModal(false)
    dispatch({ type: tp.EMPYT_CART });


  } 


  const objectTimestamp = {value: "value", timestamp: new Date().getTime()}
  const actualTimeStamp = localStorage.getItem(CONSTANTS.TIMESTAMP)

  
  useEffect(() => {

    if(!actualTimeStamp) {
      
      localStorage.setItem(CONSTANTS.TIMESTAMP, JSON.stringify(objectTimestamp));
      selectProduct()

    } else {
      
      const savedTimestamp = JSON.parse(localStorage.getItem(CONSTANTS.TIMESTAMP)),
      dateString = savedTimestamp.timestamp,
      now = new Date().getTime().toString();
      
      if(Math.abs((dateString - now)/1000/60) > 60) {
        setShowModal(true)
      }
    }
   
  }, [objectTimestamp])

  return (
    <>
      <Modal state={showModal} handleModalClose={handleModalClose} />

      <Container className="App">
        <Row>
          <Col sm={12}>
            <Header />
          </Col>
        </Row>
       
        <Row>
          <Col sm={12}>
            <div className="content">
              <Switch>
                <Route path={ROUTE_HOME} exact component={HomeContainer} />
                <Route path={ROUTE_DETAIL} component={DetailContainer} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default withRouter(App);
