import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { BsFillCalculatorFill, BsFillAlarmFill, BsFillFileCodeFill } from "react-icons/bs";


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
                  <BsFillFileCodeFill size = "2em" />
                  <h5> API Model Integration </h5>
                  <p> Quickly integrate Quantstamp's proprietary datafeeds into your financial models. We provide three tiers of API service to suite the different needs of each of our clients. Enterprise data feeds are available on a customized basis. </p>
                </div>
              </div>
            </Col>
            <Col sm={4}>
              <div className="card-body">
                <div>
                  <BsFillAlarmFill size = "2em" />
                  <h5> Realtime Trade Alerts </h5>
                  <p> Our team provides alert feeds for all of our underling datafeeds that can be sent directly through your Bloomberg Terminal or Factset workstations. Customize them as you see fit. </p>
                </div>
              </div>
            </Col>
            <Col sm={4}>
              <div className="card-body">
                <div>
                <BsFillCalculatorFill size = "2em" />
                  <h5> Improving Risk-Adjusted Returns </h5>
                  <p> Quantstamp's realtime alerts and API software allows you to remain ahead of the curve. Our team will help you integrate our datasets into your financial models and provide specialized support for algorithmic trading integration</p>
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