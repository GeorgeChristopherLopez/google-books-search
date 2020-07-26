
import { Link} from "react-router-dom";
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';


function Header() {
    /* SENSITIVE INFO ***************************************************************************************************************
  remove before uploading */
  const API_KEY = 'api_key';
  /***********************************************************************************************************************************/

  const [searchTerm, setSearchTerm] = React.useState("");
  const [input, setInput] = React.useState("");
  const [results, setResults] = React.useState([]);

  const fetchData =  () => {
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${API_KEY}`)
      .then(response => response.json())
      .then(responseData => {
        let newResult = responseData.items;
       
        setResults(newResult);
        console.log(newResult);
      
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  };
 
 
  
  const handleChange = event => {
    setInput(event.target.value);
    let term = (event.target.value).split(" ");
    term = term.join('+');
    setSearchTerm(term);
   
  };


  const handleSearch = event => {
   console.log("searching for...."+searchTerm);
   fetchData();
  }
    
  return (
   
      <header className="App-header">
        <h1  className="App-logo" alt="google-logo"><Link to="/">
        Google <span className="sub-logo">Books API</span>
        
        </Link></h1> 
       <div>
       <input 
       className="search-bar" 
       type="text"
       placeholder="Search"
       value={input}
       onChange={handleChange}/><Link onClick={handleSearch} className="search-btn" to="/search">?</Link>
       </div>
    <p>Search the world's most comprehensive index of full-text books.</p>
    <a href="/">My library</a>
 <div> 
 <ul>

{results.map(function(item, key) {
      return <li key={key}>{item.volumeInfo.title}</li>;
    })}
  



  </ul>

 </div>

          </header>
  );
}

export default Header;
