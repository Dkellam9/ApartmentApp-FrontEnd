import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { getApartment } from '../api';
import '../App.css';

class Show extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apartment: {}
    }
  }
  render() {
    let { apartment } = this.state
    return(
      <div>
        <h3>More Info</h3>
        <Table responsive>
          <thead>
            <tr>
              <th>Address</th>
              <th></th>
              <th>Manager Name</th>
              <th>Manager Phone</th>
              <th>Manager Hours</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{apartment.address1} {apartment.address2}</td>
              <td>{apartment.city}, {apartment.state} {apartment.postalcode}</td>
              <td>{apartment.managername}</td>
              <td>{apartment.managerphone}</td>
              <td>{apartment.managerhours}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    )
  }

  componentWillMount() {
    const index = this.props.match.params.id
    getApartment(index)
    .then(APIapartment => {
      console.log(APIapartment)
      this.setState({
        apartment: APIapartment
      })
    })
  }
}

export default Show;
