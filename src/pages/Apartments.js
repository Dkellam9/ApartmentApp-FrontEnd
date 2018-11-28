import React, { Component } from 'react';
import '../App.css';
import { Grid, Col, Row, ListGroup, ListGroupItem } from 'react-bootstrap';
import { getApartments } from '../api';

class Apartments extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apartments: []
    }
  }

  render() {
    return(
      <Grid>
        <Row>
          <Col xs={12}>
            <ListGroup>
            {console.log(this.state.apartments)}
              {this.state.apartments.map((apartment, index) => {
                return (
                  <ListGroupItem
                    href={'/apartments/' + apartment.id}
                    key={index}
                    header={
                      <div>
                        <h4>
                          <span className='pull-left'>
                            {`${apartment.address1} ${apartment.address2}, ${apartment.city}, ${apartment.state}`}
                          </span>
                        </h4>
                        <p>
                          <span className='pull-right'>
                          {`${apartment.managername} ${apartment.managerphone}`}
                          </span>
                        </p>
                      </div>
                  }>
                  <br />
                </ListGroupItem>
                )
              })}
            </ListGroup>
          </Col>
        </Row>
      </Grid>
    );
  }

  componentWillMount() {
    getApartments()
    .then(APIapartments => {
      console.log(APIapartments)
      this.setState({
        apartments: APIapartments
      })
    })
  }
}

export default Apartments;
