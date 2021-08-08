// Modules
import React, {useEffect, useState}  from "react";
import { withRouter } from "react-router-dom";

import { useSelector } from "react-redux";

// bootstrap
import { Row, Col, Container, Spinner } from "react-bootstrap";

// Selectors
import { 
  productSelector,
  searchSelector
 } from "../../store/selectors";

// Components
import ProductCard from "../../components/card/card"

import Search from "../../components/search/search"

// CSS
import "./home.container.scss";

// Container
const HomeContainer = () => {

  const allProductData = useSelector(productSelector);
  const productData = useSelector(searchSelector);

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [productData])


  return (
    <Container>

      <Row>
        <Col sm={12}> 
        {allProductData && productData && (
          <Search totalNumber={allProductData.length} searchNumber={productData.length} />

        )}
        </Col>

      </Row>

      <Row lg={6}>
          {isLoading && (
            // <span>Loading</span>
            <div className="centered">
              <Spinner animation="border" variant="warning" />
            </div>

          )}
          {!isLoading && productData && productData.map((value, index) => (
            <Col key={index} lg={3} xs={12} md={3} sm={6} className="mb-2">
              <ProductCard  data={value} />
            </Col>

          ))} 

       
      </Row>


    </Container>
  );
};

export default withRouter(HomeContainer);
