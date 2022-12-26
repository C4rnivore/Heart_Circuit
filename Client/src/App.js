import {BrowserRouter as Router, Route, Switch, useLocation} from "react-router-dom";
import Header from './Header';
import Home from "./Home";
import DropArea from "./DropArea";
import Footer from "./Footer"
import Register from './Registration'
import Entrance from './Enterance'
import React, {useState,useEffect} from "react";


function App() {
  return (
      <Router>
          <div className="App">
              <Header/>
              <div className="Content">
                  <Switch>
                      <Router exact path="/">
                          <Home/>
                          <DropArea/>
                      </Router>
                      <Router exact path="/registration">
                          <Register/>
                      </Router>
                      <Router exact path="/entrance">
                          <Entrance/>
                      </Router>
                  </Switch>
              </div>
              <Footer/>
          </div>
      </Router>
  );
}

export default App;
