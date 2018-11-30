import React, { Component } from 'react';
import { FormControl, FormGroup } from 'react-bootstrap';
import { Redirect } from 'react-router-dom'
import '../App.css';

import AuthService from '../api/authentication';
let auth = new AuthService()

class Login extends Component {
  constructor(props) {
    super(props)
      this.state = {
        status: "LOADING",
        form: {
          user: {
            email: '',
            password: ''
          }
        }
      }
    }

  handleChange(event) {
    let { form } = this.state
    form.user[event.target.name] = event.target.value
    this.setState({ form })
  }

  handleLogin(event) {
    event.preventDefault()
    console.log(this.state.form)
    auth.login(this.state.form)
    .then(json => {
      console.log(json)
      this.setState({status: "SAVED"})
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    return(
      <div>
        <form className='form-container'>
          <FormGroup>
            <FormControl
              name="email"
              type="text"
              onChange={this.handleChange.bind(this)}
              placeholder="Enter Your Email"
            />
            <br />
            <FormControl
              name="password"
              type="password"
              onChange={this.handleChange.bind(this)}
              placeholder="Enter Your Unique Password"
            />
            <br />
            <FormControl
              name="submit"
              type="submit"
              onClick={this.handleLogin.bind(this)}
              value="Log-In Now!"
            />
          </FormGroup>
        </form>
        {this.state.status === "SAVED" && <Redirect to="/" />}
      </div>
    )
  }
}

export default Login;
