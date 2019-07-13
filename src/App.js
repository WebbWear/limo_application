import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import './App.css';

import Landing from'./components/Landing';
import Map from './components/Map';
import Pics from './components/Pics';

class App extends Component {
    render() {
        return (
          <Router>
      <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        
        <li>
          <Link to="/map">Map</Link>
        </li>
        <li>
          <Link to="/pics">Pics</Link>
        </li>
      </ul>
        <Route exact path="/" component={Landing} />
        <Route exact path="/map" component={Map} />
        <Route exact path="/pics" component={Pics} />
      </div>
    </Router>
            
        );
    }
}

export default App;