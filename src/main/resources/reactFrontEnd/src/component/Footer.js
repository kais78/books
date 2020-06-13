import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <Container fluid className="bg-light border-top border-info mt-5">
     
      <Row className='navco'>
        <Col md="12">© 2020 Clear BnB</Col>
      </Row>
    </Container>
  );
};

export default Footer;
