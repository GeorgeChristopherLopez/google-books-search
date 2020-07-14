import React from 'react';
import Header from './components/Header';
import Results from './components/Results';
import Details from './components/Details';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
 
} from "react-router-dom";


function App() {
  return (
    <div className="App">
    <Router>
    <Header/>
    <Switch>
         
          <Route  exact path="/search">
            <Results />
          </Route>
          <Route exact path="/details">
            <Details />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
