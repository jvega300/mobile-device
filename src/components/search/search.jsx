/* eslint-disable import/no-anonymous-default-export */

// Modules
import React from "react";

import { useDispatch, useSelector } from "react-redux";

import * as tp from "../../action-types";

// Selectors
import { searchTermSelector } from "../../store/selectors";

// bootstrap
import { Row,Col, Form } from "react-bootstrap";

// CSS
import "./search.scss";

// Component
export default ({totalNumber= 0, searchNumber= 0}) => {

  const dispatch = useDispatch();

  const searchValue = useSelector(searchTermSelector);

  const onChangeHandler = (e) => {
    dispatch({ type: tp.DO_SEARCH, payload: e.target.value.trim()});
  }

  return (    
      <Row  className="search">
        <Col 
          sm={6} 
          md={6} 
          >
            <p>Watching {searchNumber} of {totalNumber} products</p>

        </Col>
        <Col 
          sm={6} 
          md={6} 
          >
          
        <Form>
          <Col sm={12}>
            <Form.Group className="mb-3" controlId="serachForm">
              <Form.Control type="text" value={searchValue ? searchValue : ''} placeholder="Serch values..." data-test-id="form-test-id" onChange={onChangeHandler} />
            </Form.Group>
          </Col>
        </Form>


        </Col>
      </Row>
    

  );
};