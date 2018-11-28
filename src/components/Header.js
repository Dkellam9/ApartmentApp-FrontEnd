import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import '../App.css';

class Header extends Component {
  render() {
    return(
      <Navbar>

        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Shelter Me</a>
          </Navbar.Brand>
        </Navbar.Header>

        <Nav>
          <NavItem eventKey={1} href="/apartments">
            All Apartments
          </NavItem>
          <NavItem eventKey={2} href="/apartments/new">
            New Apartment
          </NavItem>
          <NavItem eventKey={3} href="/about">
            About Us
          </NavItem>
        </Nav>

        <Nav pullRight>
          <NavItem eventKey={4} href="/login">
            Log-In
          </NavItem>
          <NavItem eventKey={5} href="/register">
            Register
          </NavItem>
        </Nav>

      </Navbar>
    )
  }
}

export default Header;
