
import { Link} from "react-router-dom";
import React, { useState, useEffect, useRef, Fragment } from 'react';
import axios from 'axios';


function Header(props) {
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
        props.onChange(newResult);
      
      
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
   if(searchTerm)
   fetchData();
   
  }
    
  return (
 
   <header value={props.results} className="App-header">
        <h1  className="App-logo" alt="google-logo"><Link to="/">
        Google <span className="sub-logo">Books API</span>
        
        </Link></h1> 
       <div>
       <input 
       className="search-bar" 
       type="text"
       placeholder=""
       value={input}
       onChange={handleChange}/><Link onClick={handleSearch} className="search-btn" to="/search">Search</Link>
       </div>
    <p>Search the world's most comprehensive index of full-text books.</p>
    <a href="/">My library</a>
 
          </header>
         


   
  );
}

export default Header;
