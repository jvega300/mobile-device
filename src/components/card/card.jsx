/* eslint-disable import/no-anonymous-default-export */

// Modules
import React from "react";
import { push } from "connected-react-router";

import { useDispatch } from "react-redux";

// bootstrap
import { Row, Col } from "react-bootstrap";

import { ReactComponent as InfoIcon } from "../../assets/icons/info.svg";

// CSS
import "./card.scss";

// Routes
import {  ROUTE_DETAIL } from "../../constants/routes";

import * as tp from "../../action-types";



export default ({ data }) => {

  const dispatch = useDispatch();

  const textLabel = "Details";

  const clickHandler = (id) => {
    dispatch(push(`${ROUTE_DETAIL}/${id}`));
    dispatch({ type: tp.CLEAR_SELECTED_PRODUCT, payload: id});
    dispatch({ type: tp.SELECTED_PRODUCT, payload: id});
  }


  const checkPriceValue = (price) => {
    return price !== "" ? `${price}€` : "Not available";
  }

  return (

    <div data-test-id="card-test-id" key={data.id} onClick={() => clickHandler(data.id)} className="card">
      <img src={data.imgUrl} alt={data.model} />
      <p className="price">{checkPriceValue(data.price)}</p>

      <div className="card-body">
        <h2>{data.model}</h2>
        <Row className="actions">
          <Col xs={12} md={12} lg={6} sm={12} className="textSmall">
            <span>{data.brand}</span>
          </Col>
            
          <Col xs={12} md={12} lg={6} sm={12} className="textSmall">
            <InfoIcon className="icon" />

            {textLabel}
          </Col>
        </Row>
      </div>
    </div>

  );
};