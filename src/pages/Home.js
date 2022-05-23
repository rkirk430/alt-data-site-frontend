import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap"

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
          <Row className="benefits-title">
            <Col sm= {12}>
              <h6> How to Leverage Quantstamp's Data Feeds: </h6>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="homepage-benefits-container">
            <Card>
              <Card.Body>
                <h4>How to Leverage Quantstamp's Data Feeds:</h4>
              </Card.Body>
            </Card>
          </Row>
          <Row>
            <Col sm={4} className="benefit_cards">
              <div className="card-body">
                <div>
                  <h5> API Model Integration </h5>
                  <p> Some example quickly </p>
                </div>
              </div>
            </Col>
            <Col sm={4}>
              <div className="card-body">
                <div>
                  <h5> Realtime Trade Alerts </h5>
                  <p> Some example quickly </p>
                </div>
              </div>
            </Col>
            <Col sm={4}>
              <div className="card-body">
                <div>
                  <h5> Improving Risk-Adjusted Returns </h5>
                  <p> Some example quickly </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        </>
              {/* <Col sm={4}>API Model Integration
                <h6> but what does it mean? </h6>
              </Col>
              <Col sm={4}>Real Time Trade Alerts</Col>
              <Col sm={4}>Improving Risk-Adjusted Returns</Col> */}
      </div>
      
    ) 
  };
  
  export default Home;