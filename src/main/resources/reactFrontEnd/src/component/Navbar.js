import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,Card, Row,Col,CardImg,FormGroup,Label ,Input
} from "reactstrap";

const TopNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">MAIN LISTA</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
        
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="./new">ADD BOOK</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">Contact Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">Create Account</NavLink>
              </NavItem>
            </Nav>
          
        </Collapse>
      </Navbar>
      <br/>
      <Row>
      <Col xs="6" sm="4">best Medical books</Col>
        <Col sm={{ size: 'auto', offset: 6 }}> 
        <UncontrolledDropdown>
      <DropdownToggle caret>
        Sort By
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Old Date to new</DropdownItem>
        <DropdownItem>New Date to Old</DropdownItem>
        <DropdownItem disabled>Avg. Customer Review</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
      </Col>
      </Row>
    </div>
  );
};

export default TopNavbar;
