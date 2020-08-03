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
const [results, setResults] = React.useState([]);
const [book, setBook] = React.useState(null);

function handleSearch(newValue) {
  setResults(newValue);
  console.log(newValue);
}
function handleBookSelect(newValue) {
  setBook(newValue);
 
}
  return (
    <div className="App">
    <Router>
    <Header  value={results} onChange={handleSearch}/>
    <Switch>
         
          <Route  exact path="/search">
            <Results  results={results} onChange={handleBookSelect}/>
          </Route>
          <Route exact path="/details">
            <Details results={book}  />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
