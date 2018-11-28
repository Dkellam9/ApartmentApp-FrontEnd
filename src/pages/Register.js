import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { FormControl, FormGroup } from 'react-bootstrap';
import { newUser } from '../api/index';
import '../App.css';

class Register extends Component {
constructor(props) {
  super(props)
    this.state = {
      status: "LOADING",
      user: {
        email: '',
        password: ''
      }
    }
  }

  handleChange(event) {
    let { user } = this.state
    user[event.target.name] = event.target.value
    this.setState({ user: user })
  }

  handleNewUser(event) {
    let { user } = this.state
    event.preventDefault()
    console.log(user)
    newUser(user)
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
              value={this.state.user.email}
              placeholder="Enter An Email"
            />
            <br />
            <FormControl
              name = "password"
              type="password"
              onChange={this.handleChange.bind(this)}
              value={this.state.user.password}
              placeholder="Enter A Unique Password"
            />
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
