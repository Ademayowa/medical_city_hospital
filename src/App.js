import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import BeforeFooter from './components/layout/BeforeFooter';
import Footer from './components/layout/Footer';
import Home from './components/pages/home/Home';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import './App.css';

import 'mdbootstrap/css/bootstrap.min.css';
import 'mdbootstrap/css/mdb.min.css';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Route exact path='/' component={Home} />

        {/* <Route exact path='/services' component={Services} />
        <Route exact path='/contact' component={Contact} />
        <Route component={BeforeFooter} />
        <Route component={Footer} /> */}
      </div>
    </Router>
  );
};

export default App;
