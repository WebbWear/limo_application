import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Landing from './components/Landing';
import './App.css';

class App extends Component {
    render() {
        return (
          <Router>
            <div className="App">
                <Route/>
                </div>
          </Router>
            
        );
    }
}

export default App;