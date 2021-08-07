// Modules
import React, {useEffect, useState}  from "react";
import { withRouter } from "react-router-dom";

import { useSelector } from "react-redux";

// bootstrap
import { Row, Col, Container, Spinner } from "react-bootstrap";

// Selectors
import { 
  productSelector } from "../../store/selectors";

// Components
import ProductCard from "../../components/card/card"

// CSS
import "./home.container.scss";

// Container
const HomeContainer = () => {

  const allProductData = useSelector(productSelector);

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(false)
    console.info(allProductData)

  }, [allProductData])


  return (
    <Container>

    
      <Row lg={6}>
          {isLoading && (
            // <span>Loading</span>
            <div className="centered">
              <Spinner animation="border" variant="warning" />
            </div>

          )}
          {allProductData && allProductData.map((value, index) => (
            <Col key={index} xs={12} md={3} sm={6} className="mb-2">
              <ProductCard  data={value} />
            </Col>

          ))} 

       
      </Row>


    </Container>
  );
};

export default withRouter(HomeContainer);
