// Modules
import React from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";


// Routes
import {
  ROUTE_HOME,
  ROUTE_DETAIL
} from "./constants/routes";


import './App.scss';



function App() {




  
  return (
    <>

      <Container className="App">
        <Row>
          <Col sm={12}>
            Header
          </Col>
        </Row>
       
        <Row>
          <Col sm={12}>
            <div className="content">
              <Switch>
                <Route path={ROUTE_HOME} exact />
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
