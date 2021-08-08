// Modules
import React, { useState, useEffect, useCallback } from "react";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// Constants
import * as tp from "../../action-types";

// Selectors
import { selectedProduct } from "../../store/selectors";

// Components
import Select from "../../components/select/select";


// bootstrap
import { Row, Col, Container,Alert, Button } from "react-bootstrap";

// CSS
import "./detail.container.scss";

// Default values formain object
const basketObjectDefault = {
  id: null,
  colorCode: null,
  storageCode: null
}

// Object what will handler options to be ablle to launch the shoppping action
const basketObject = {}

// Container
const DetailContainer = () => {

  const [isButtonDisabled, setIsButtonDisabled] = useState(true)

  const productData = useSelector(selectedProduct);
  const dispatch = useDispatch();

  /**
   * Check if one value og tge objet is null to set as false, if all values are filled set to true
   */
  const checkButtonStatus = () => {

    let isNullDetect = false;
    Object.keys(basketObject).map((key) => {
     if(!basketObject[key]) {
      isNullDetect = true
     }
    })

    setIsButtonDisabled(isNullDetect ? true : false)
  }
  
  /**
   * Selects change handler
   * @param {*} e 
   */
  const onChangeSelect = (e) => {

    // if colors, key of object is colorCode
    // if storage, key of object is colorCode
    const codeTransformation = e.target.id === 'colors' ? 'colorCode' : 'storageCode';

    // If first option is -1 ('Select...') set to nullotherwise set number value
    const checkedValue = e.target.selectedOptions[0].id !== "-1" ? Number(e.target.selectedOptions[0].id) : null;
    
    // update object value
    doUpdate(codeTransformation, checkedValue)
    
  }

  /**
   * Check initial data options. If there is 1 element length, set as value for values object
   * @param {*} data 
   */
  const setInitialValueIfOneOption = useCallback((data) => {
      // init id key
      doUpdate('id', data.id)

      // init colorCode key or storageCode if there is 1 element
      for (const key in data.options) {
        if (Object.hasOwnProperty.call(data.options, key)) {
          // const element = object[key];
          if(data.options[key].length === 1) {
            const codeTransformation = key === 'colors' ? 'colorCode' : 'storageCode';
            doUpdate(codeTransformation, data.options[key][0]['code'])
          }
        }
      }
    },[],
  );




  /**
   * Update preparedobjet to send to the cart
   * @param {*} name 
   * @param {*} value 
   */
  const doUpdate = (name, value) => {
  
    Object.assign(basketObject, {[name]: value})
    checkButtonStatus()
  }

  /**
   * Effect, mounting component
   */
   useEffect(() => {
    
    // set default empty values to object
    Object.assign(basketObject, basketObjectDefault)

  }, [])


  /**
   * Effect loading data from productData
   */
   useEffect(() => {

    if(productData) {
      setInitialValueIfOneOption(productData)

      // console.info(productData.weight)
    }

  }, [productData, setInitialValueIfOneOption])



 /**
   * Update preparedobjet to send to the cart
   * @param {*} name 
   * @param {*} value 
   */
  const onClickHandler = () => {
    dispatch({ type: tp.ADD_TO_CART, payload: basketObject });
  }


  return (
    <Container>

      {/* {productData ( */}
      <Row className="">
      {productData && (
        <>
        <Col xs={12} md={6} sm={6} lg={6} className="imgDetail">
        
         <img src={productData.imgUrl} alt={productData.model} title={productData.model}  />
       
        </Col>
        
        <Col xs={12} md={6} sm={6} lg={6}>
          <Row lg={6}>
            <Col xs={12} md={12} sm={12} lg={12}>
             


              <ul className="detailWindow">
                <li><div className="name">Brand:</div> <div className="detail">{productData.brand}</div></li>
                <li><div className="name">Model:</div> <div className="detail">{productData.model}</div></li>
                <li><div className="name">Price:</div> <div className="detail">{productData.price}</div></li>
                <li><div className="name">CPU:</div> <div className="detail">{productData.cpu}</div></li>

                <li><div className="name">Ram:</div> <div className="detail">{productData.ram}</div></li>
                <li><div className="name">Os:</div> <div className="detail">{productData.os}</div></li>

                <li><div className="name">Display Size:</div> <div className="detail">{productData.displaySize}</div></li>
                <li><div className="name">Battery:</div> <div className="detail">{productData.battery}</div></li>

                <li><div className="name">Primary Camera:</div> <div className="detail">{productData.primaryCamera}</div></li>
                <li><div className="name">Secondary Camera:</div> <div className="detail">{productData.secondaryCmera}</div></li>

                <li><div className="name">Dimensions:</div> <div className="detail">{productData.dimentions}</div></li>
                <li><div className="name">Weight:</div> <div className="detail">{productData.weight}</div></li>

              </ul>
            </Col>

            <Col xs={12} md={12} sm={12} lg={12} className="mb-5">
              <Row className="select">

                { productData.price && Object.keys(productData.options).map((key) => {
                  return (
                    <Col key={key} xs={12} md={12} sm={12}>
                      <Select 
                      
                        label={key}
                        onChangeSelect={onChangeSelect}
                        options={productData.options[key]} 
                        />
                    </Col>  
                  )
                })}
           
              </Row>

              <Row>
                <Col className="d-grid gap-2">

                {productData.price && (
                  <Button 
                  variant="primary" 
                  size="sm" 
                  onClick={onClickHandler}
                  disabled={isButtonDisabled}
                  data-test-id="button-test-id"
                >
                  Comprar
                </Button>
                )}

                {!productData.price && (
                  <Alert variant="danger">
                    Product Not Available, because there is no price.
                  </Alert>
              
                )}
                
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        </>
        )}
      </Row>


    </Container>
  );
};

export default withRouter(DetailContainer);
