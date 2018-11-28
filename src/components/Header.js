import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
// import '../App.css';

class Header extends Component {
  render() {
    return(
      <Navbar>

        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">Shelter Me</a>
          </Navbar.Brand>
        </Navbar.Header>

        <Nav>
          <NavItem eventKey={1} href="#">
            All Apartments
          </NavItem>
          <NavItem eventKey={2} href="#">
            New Apartment
          </NavItem>
          <NavItem eventKey={3} href="#">
            About Us
          </NavItem>
        </Nav>

        <Nav pullRight>
          <NavItem eventKey={4} href="#">
            Log-In
          </NavItem>
          <NavItem eventKey={5} href="#">
            Register
          </NavItem>
        </Nav>
        
      </Navbar>
    )
  }
}

export default Header;
