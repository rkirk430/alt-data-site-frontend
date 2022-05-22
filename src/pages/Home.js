import React from "react";
import { Container, Row, Col } from "react-bootstrap"

const Home = (props) => {
    return(
      <div>
        <>
        <Container> 
          <Row className="homepage-header">
            <Col sm={8}></Col>
              <h4> Alternative Market Research for the Disruptive Economy. </h4>
            <Col sm={4}></Col>
              <h6> Quantstamp analyzes millions of datapoints to provide granular, actionable insights to underlying market sentiment </h6>
          </Row>
        </Container>
        <Container>
          <Row className="homepage-benefits-container">
            <Col sm={4}>API Model Integration
              <h6> but what does it mean? </h6>
            </Col>
            <Col sm={4}>Real Time Trade Alerts</Col>
            <Col sm={4}>Improving Risk-Adjusted Returns</Col>
          </Row>
        </Container>
        </>
      </div>
      
    ) 
  };
  
  export default Home;