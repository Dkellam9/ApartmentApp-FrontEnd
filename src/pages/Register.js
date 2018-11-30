import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { FormControl, FormGroup } from 'react-bootstrap';
import '../App.css';

import AuthService from '../api/authentication';

class Register extends Component {
constructor(props) {
  super(props)
    this.auth = new AuthService()
    this.state = {
      status: "LOADING",
      errors: "",
      form: {
        user: {
          email: '',
          password: ''
        }
      }
    }
  }

  handleChange(event) {
    let { user } = this.state.form
    user[event.target.name] = event.target.value
    this.setState({ user: user })
  }

  handleNewUser(event) {
    event.preventDefault()
    console.log(this.state.form)
    this.auth.register(this.state.form)
    .then(json => {
      console.log(json)
      if (json.errors) {
        console.log("ERROR:: ", json.errors)
        this.setState({
          errors: json.errors
        })
      } else {
        this.setState({status: "SAVED"})
      }
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    // let { email, password } = this.state.form.user
    return(
      <div>
        <form className="form-container">
          <FormGroup>
            <FormControl
              name="name"
              type="text"
              placeholder="Enter Your Name"
            />
            <br />
            <FormControl
              name="email"
              type="text"
              onChange={this.handleChange.bind(this)}
              // value={this.state.form.user.email}
              placeholder="Enter An Email"
            />
            {this.state.errors.email && <div>Error: Email  {this.state.errors.email[0]}</div>}
            <br />
            <FormControl
              name="password"
              type="password"
              onChange={this.handleChange.bind(this)}
              // value={this.state.form.user.password}
              placeholder="Enter A Unique Password"
            />
            {this.state.errors.password && <div>Error: Password  {this.state.errors.password[0]}</div>}
            <br />
            <FormControl
              name="submit"
              type="submit"
              value="Register Now!"
              onClick={this.handleNewUser.bind(this)}
            />
          </FormGroup>
        </form>
        {this.state.status === "SAVED" && <Redirect to="/apartments" />}
      </div>
    )
  }
}

export default Register;
