import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <Container fluid className="bg-light border-top border-info mt-5">
      <Container className="mt-5 mb-3 sticky-footer">
        <Row className="font-small indigo ">
          <Col sm="12" md="3" className="mb-3">
            <h6 className="text-uppercase font-weight-bold text-center">
              <Link to="/">Accomodation</Link>
            </h6>
          </Col>
          <Col sm="12" md="3" className="mb-3">
            <h6 className="text-uppercase font-weight-bold text-center">
              <Link to="/about">Trvel Agencies</Link>
            </h6>
          </Col>
          <Col sm="12" md="3" className="mb-3">
            <h6 className="text-uppercase font-weight-bold text-center">
              <Link to="/user-login">Logga in</Link>
            </h6>
          </Col>
          <Col sm="12" md="3" className="mb-3 ">
            <h6 className="text-uppercase font-weight-bold text-center text-info">
              <Link to="/user-register">Facebook</Link>
            
            </h6>
          </Col>
        </Row>
        <hr className="rgba-white-light" />
        <Row>
          
        </Row>
        <hr
          className="clearfix d-md-none rgba-white-light"
          style={{ margin: "10% 15% 5%" }}
        />
      </Container>
      <Row className="text-center py-3 bg-info text-white mt-3">
        <Col md="12">© 2020 Clear BnB</Col>
      </Row>
    </Container>
  );
};

export default Footer;
