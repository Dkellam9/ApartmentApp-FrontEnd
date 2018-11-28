import React, { Component } from 'react';
import { FormControl, FormGroup } from 'react-bootstrap';
import '../App.css';

class Login extends Component {
  constructor(props) {
    super(props)
      this.state = {
        status: "LOADING",
        user: {
          email: '',
          encrypted_password: ''
        }
      }
    }

  render() {
    return(
      <form className='form-container'>
        <FormGroup>
          <FormControl
            name="email"
            type="text"
            value={this.state.email}
            placeholder="Enter Your Email"
          />
          <br />
          <FormControl
            name = "password"
            type="text"
            value={this.state.encrypted_password}
            placeholder="Enter Your Unique Password"
          />
          <br />
          <FormControl
            name="submit"
            type="submit"
            value="Log-In Now!"
          />
        </FormGroup>
      </form>
    )
  }
}

export default Login;
