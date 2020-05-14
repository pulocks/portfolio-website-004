import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';


function App() {
  return (
    <div className="container">
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/home">
            <AboutMe></AboutMe>
          </Route>
          <Route path="/projects">
            <Projects></Projects>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route exact path="/">
            <AboutMe></AboutMe>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
