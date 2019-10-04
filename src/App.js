import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import BeforeFooter from './components/layout/BeforeFooter';
import Footer from './components/layout/Footer';

import Home from './components/pages/home/Home';
import Service from './components/pages/Service';
import Contact from './components/pages/Contact';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/services" component={Service} />
          <Route exact path="/contact" component={Contact} />
          <Route component={BeforeFooter} />
          <Route component={Footer} />
        </div>
      </Router>
    );
  }
}

export default App;
