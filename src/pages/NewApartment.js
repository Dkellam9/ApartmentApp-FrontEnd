import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { FormGroup, FormControl } from 'react-bootstrap';
import { newApartment } from '../api/index';
import '../App.css';

class NewApartment extends Component {
  constructor(props) {
    super(props)
      this.state = {
        status: "LOADING",
        apartment: {
          address1: '',
          address2: '',
          city: '',
          state: '',
          postalcode: '',
          managername: '',
          managerphone: '',
          managerhours: '',
        }
      }
    }

  handleChange(event) {
    let { apartment } = this.state
    apartment[event.target.name] = event.target.value
    this.setState({apartment: apartment})
  }

  handleNewApartment(event) {
    let { apartment } = this.state
    event.preventDefault()
    newApartment(apartment)
    .then(json => {
      console.log(json)
      this.setState({status: "SAVED"})
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    let { apartment } = this.state
    return(
      <div>
        <h3>Add a New Apartment</h3>
        <form className='form-container'>
          <FormGroup>
            <FormControl
              name="address1"
              type="text"
              placeholder="Street Address"
              onChange={this.handleChange.bind(this)}
              value={apartment.address1}
            />
            <FormControl
              name="address2"
              type="text"
              placeholder="Apartment Number"
              onChange={this.handleChange.bind(this)}
              value={apartment.address2}
            />
            <FormControl
              name="city"
              type="text"
              placeholder="City"
              onChange={this.handleChange.bind(this)}
              value={apartment.city}
            />
            <FormControl
              name="state"
              type="text"
              placeholder="State"
              onChange={this.handleChange.bind(this)}
              value={apartment.state}
            />
            <FormControl
              name="postalcode"
              type="number"
              placeholder="Zip Code"
              onChange={this.handleChange.bind(this)}
              value={apartment.postalcode}
            />
          </FormGroup>

          <FormGroup>
            <FormControl
              name="managername"
              type="text"
              placeholder="Manager Name"
              onChange={this.handleChange.bind(this)}
              value={apartment.managername}
            />
            <FormControl
              name="managerphone"
              type="text"
              placeholder="Manager Phone"
              onChange={this.handleChange.bind(this)}
              value={apartment.managerphone}
            />
            <FormControl
              name="managerhours"
              type="text"
              placeholder="Manager Hours"
              onChange={this.handleChange.bind(this)}
              value={apartment.managerhours}
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
