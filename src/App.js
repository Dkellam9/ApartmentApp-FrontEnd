import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css'

import Header from './components/Header';
import Footer from './components/Footer';

import Login from './pages/Login';
import Register from './pages/Register';

import About from './pages/About';
import Apartments from './pages/Apartments';
import NewApartment from './pages/NewApartment.js';
import Show from './pages/Show';
import Home from './pages/Home';

import AuthService from './api/authentication';
let auth = new AuthService()

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
          <Router>
            {(auth.loggedIn())
              // registered user
              ? <Switch>
                <Route exact path="/apartments/new" component={NewApartment} />
                <Route exact path="/apartments/:id" component={Show} />
                <Route exact path="/apartments" component={Apartments} />
                <Route exact path="/about" component={About} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/" component={Home} />
              </Switch>
              // guest user
              : <Switch>
                <Redirect from="/apartments/new" to="/register" />
                <Redirect from="/apartments/:id" to="/register" />
                <Route exact path="/apartments" component={Apartments} />
                <Route exact path="/about" component={About} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/" component={Home} />
              </Switch>}
          </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
