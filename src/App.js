import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/home/Home';
import './App.css';

import 'mdbootstrap/css/bootstrap.min.css';
import 'mdbootstrap/css/mdb.min.css';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Route exact path='/' component={Home} />
      </div>
    </Router>
  );
};

export default App;
