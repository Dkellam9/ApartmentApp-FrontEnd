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

  handleChange(event) {
    let { apartment } = this.state
    apartment[event.target.name] = event.target.value
    this.setState({ apartment: apartment })
  }

  handleNewApartment(event) {
    let { apartment } = this.state
    event.preventDefault()
    console.log(apartment)
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
              value={apartment.address1}
              onChange={this.handleChange.bind(this)}
            />
            <FormControl
              name="address2"
              type="text"
              placeholder="Apartment Number"
              value={apartment.address2}
              onChange={this.handleChange.bind(this)}
            />
            <FormControl
              name="city"
              type="text"
              placeholder="City"
              value={apartment.city}
              onChange={this.handleChange.bind(this)}
            />
            <FormControl
              name="state"
              type="text"
              placeholder="State"
              value={apartment.state}
              onChange={this.handleChange.bind(this)}
            />
            <FormControl
              name="postalcode"
              type="number"
              placeholder="Zip Code"
              value={apartment.postalcode}
              onChange={this.handleChange.bind(this)}
            />
          </FormGroup>

          <FormGroup>
            <FormControl
              name="managername"
              type="text"
              placeholder="Manager Name"
              value={apartment.managername}
              onChange={this.handleChange.bind(this)}
            />
            <FormControl
              name="managerphone"
              type="text"
              placeholder="Manager Phone"
              value={apartment.managerphone}
              onChange={this.handleChange.bind(this)}
            />
            <FormControl
              name="managerhours"
              type="text"
              placeholder="Manager Hours"
              value={apartment.managerhours}
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
