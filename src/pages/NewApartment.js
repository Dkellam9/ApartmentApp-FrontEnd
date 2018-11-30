import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { FormGroup, FormControl } from 'react-bootstrap';
// import { newApartment } from '../api/index';
import AuthService from '../api/authentication'
import '../App.css';

class NewApartment extends Component {
  constructor(props) {
    super(props)
    this.auth = new AuthService()
    this.state = {
      status: "LOADING",
      form: {
        apartment: {
          address1: '420 Cool St.',
          address2: 'Apt. ',
          city: 'Weedsport',
          state: 'NJ',
          postalcode: '12345',
          managername: 'Alex',
          managerphone: '(123)456-7890',
          managerhours: '8am-5pm M-F',
        }
      }
    }
  }

  handleChange(event) {
    let { form } = this.state
    form.apartment[event.target.name] = event.target.value
    this.setState({ form: form })
  }

  handleNewApartment(event) {
    let { form } = this.state
    event.preventDefault()
    console.log(form.apartment)
    this.auth.newApartment(form.apartment)
    .then(json => {
      console.log(json)
      this.setState({status: "SAVED"})
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    let { form } = this.state
    return(
      <div>
        <h3>Add a New Apartment</h3>
        <form className='form-container'>
          <FormGroup>
            <FormControl
              name="address1"
              type="text"
              placeholder="Street Address"
              value={form.apartment.address1}
              onChange={this.handleChange.bind(this)}
            />
            <FormControl
              name="address2"
              type="text"
              placeholder="Apartment Number"
              value={form.apartment.address2}
              onChange={this.handleChange.bind(this)}
            />
            <FormControl
              name="city"
              type="text"
              placeholder="City"
              value={form.apartment.city}
              onChange={this.handleChange.bind(this)}
            />
            <FormControl
              name="state"
              type="text"
              placeholder="State"
              value={form.apartment.state}
              onChange={this.handleChange.bind(this)}
            />
            <FormControl
              name="postalcode"
              type="number"
              placeholder="Zip Code"
              value={form.apartment.postalcode}
              onChange={this.handleChange.bind(this)}
            />
          </FormGroup>

          <FormGroup>
            <FormControl
              name="managername"
              type="text"
              placeholder="Manager Name"
              value={form.apartment.managername}
              onChange={this.handleChange.bind(this)}
            />
            <FormControl
              name="managerphone"
              type="text"
              placeholder="Manager Phone"
              value={form.apartment.managerphone}
              onChange={this.handleChange.bind(this)}
            />
            <FormControl
              name="managerhours"
              type="text"
              placeholder="Manager Hours"
              value={form.apartment.managerhours}
              onChange={this.handleChange.bind(this)}
            />
            <br />
            <FormControl
              name="submit"
              type="submit"
              value="Submit New Apartment"
              onClick={this.handleNewApartment.bind(this)}
            />
          </FormGroup>
        </form>
        {this.state.status === "SAVED" && <Redirect to="/apartments" />}
      </div>
    )
  }
}

export default NewApartment;
