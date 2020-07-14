import React from 'react';
import { Link} from "react-router-dom";
  
import '../App.css';

function App() {
  return (
   
      <header className="App-header">
        <h1  className="App-logo" alt="google-logo"><Link to="/">
        Google <span className="sub-logo">Books API</span>
        
        </Link></h1> 
       <div>
       <input className="search-bar"></input><Link className="search-btn" to="/search">Search</Link>
       </div>
    <p>Search the world's most comprehensive index of full-text books.</p>
    <a href="/">My library</a>
          </header>

  );
}

export default App;
