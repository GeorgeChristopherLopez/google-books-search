
import { Link} from "react-router-dom";
import React, { useState, useEffect, useRef, Fragment } from 'react';
import axios from 'axios';


function Header() {
    /* SENSITIVE INFO ***************************************************************************************************************
  remove before uploading */
  const API_KEY = 'apikey';
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
 <Fragment>
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
 
          </header>
          <div className="results" style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', textAlign: 'center'}}> 


{    
    results.length > 0 ?
    results.map(function(item, key) {
      let thumnail = (item.volumeInfo.imageLinks) ?  true : false;
      return <div className="book-card" style={{margin: '0 auto'}}  key={key}>
        
    
        { thumnail ?  <img   src={(item.volumeInfo.imageLinks.thumbnail).toString()}/>: <div style={{border: '1px solid black', height: '100%', width:'100%'}} >`no image available`</div>   }  
        
        
       
      </div>
    }) 
: null
}
  



 

 </div>



 </Fragment>  
   
  );
}

export default Header;
