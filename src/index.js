import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import './index.css';
import App from './App';
import Landing from'./components/Landing';
import Map from './components/Map';
import Pics from './components/Pics';

import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
      <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/landing">Landing</Link>
        </li>
        <li>
          <Link to="/map">Map</Link>
        </li>
        <li>
          <Link to="/pics">Pics</Link>
        </li>
      </ul>
        <Route path="/" component={App} />
        <Route path="/landing" component={Landing} />
        <Route path="/map" component={Map} />
        <Route path="/pics" component={Pics} />
      </div>
    </Router>
  )

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

