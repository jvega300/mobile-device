// Modules
import React from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";


// Containers
import HomeContainer from "./containers/home/home.container";

// Routes
import {
  ROUTE_HOME,
  ROUTE_DETAIL
} from "./constants/routes";

import Header from "./components/header/header"

import './App.scss';

import * as tp from "./action-types";


function App() {

  const dispatch = useDispatch();

  dispatch({ type: tp.LOAD_PRODUCTS });


  
  return (
    <>

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
              <Route path={ROUTE_DETAIL}  />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default withRouter(App);
