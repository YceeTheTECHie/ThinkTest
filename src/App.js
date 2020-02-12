import React from 'react';
import Welcome from './Components/Welcome';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Errorpage from './Components/Errorpage';
import './Components/App.css';
import 'materialize-css/dist/css/materialize.min.css';
import {BrowserRouter, Switch, Route } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <body>
        <Navbar/>
        <Switch>
        
        <Route path = "/" exact component = {Welcome} />
       <Route path = "/starttest" component = {Home} />
       
       <Route path = "/about" component = {About} />
      <Route component = {Errorpage}/>
       <Route path = "/about" component = {About} />


        </Switch>
      </body>
    </BrowserRouter>
    );
  } 

export default App;