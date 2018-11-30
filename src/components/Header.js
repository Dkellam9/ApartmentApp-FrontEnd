import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import '../App.css';

import AuthService from '../api/authentication';
let auth = new AuthService()

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      logged: auth.loggedIn()
    }
  }
  determineButton = () => {
    if(!auth.loggedIn()) {
      return(
        <Nav pullRight>
          <NavItem eventKey={4} href="/login">
            Log-In
          </NavItem>
          <NavItem eventKey={5} href="/register">
            Register
          </NavItem>
        </Nav>
      )
    } else {
      return (
        <Nav pullRight>
          <NavItem eventKey={4} href="/" onClick={auth.logout}>
            Log-Out
          </NavItem>
        </Nav>
      )
    }
  }

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

        {this.determineButton()}

      </Navbar>
    )
  }
}

export default Header;
