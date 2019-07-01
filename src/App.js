import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import Landing from './components/Landing';

import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
      <header className="App-header">
        <img src="/assets/black-sprinter-limo.jpeg"/>
      </header>
      </Router>
    </div>
  );
}

export default App;
