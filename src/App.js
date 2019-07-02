import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import Landing from './components/Landing';
import limoImg from './assets/pics/black-sprinter-limo.jpg';

import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
      <header className="App-header">
        <img src="{limoImg}" alt="Palma Ceia Limo"/>
      </header>
      </Router>
    </div>
  );
}

export default App;
