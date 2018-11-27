import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';

import Apartments from './pages/Apartments';
import Show from './pages/Show';
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
          <Router>
              <Switch>
                <Route exact path="/apartments" component={Apartments} />
                <Route exact path="/apartments/:id" component={Show} />
                <Route exact path="/" component={Home} />
              </Switch>
          </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
