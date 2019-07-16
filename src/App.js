import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css';

import Landing from './components/Landing';
import Map from './components/Map';
import Pics from './components/Pics';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Route exact path="/" component={Landing}/>
          <Route exact path="/map" component={Map}/>
          <Route exact path="/pics" component={Pics}/>
        </div>
      </Router>

    );
  }
}

export default App;
