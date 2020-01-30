import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import './index.css';

import Login from './components/Login';
import Logout from './components/Logout';

import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Feedback from './components/Feedback';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path = "/" component= {Login} />
        <Route exact path = "/Logout" component= {Logout} />

        <Route exact path = "/Home" component= {Home} />        
        <Route exact path ="/About" component = {About} />
        <Route exact path ="/Gallery" component = {Gallery} />
        <Route exact path ="/Contact" component = {Contact} />
        <Route exact path ="/Feedback" component = {Feedback} />
      </Switch>
    </div>
  );
}

export default App;
