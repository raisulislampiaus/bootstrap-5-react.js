import React from 'react';

import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Home } from './Components/Home/Home';
import { About } from './Components/About/About';
import { Service } from './Components/Service/Service';
import { Contact } from './Components/Contact/Contact';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Redirect, Switch, } from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
     <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/service" component={Service}/>
    <Route exact path="/contact" component={Contact}/>
    <Redirect to="/" />
    </Switch>
    
    </BrowserRouter>
    </>
  );
}

export default App;
