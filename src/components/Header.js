
import { Link} from "react-router-dom";
import React, { useState, useEffect, useRef, Fragment } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from "react-router-dom";


function Header(props) {
    /* SENSITIVE INFO ***************************************************************************************************************
  remove before uploading */
  const API_KEY = 'api_key';
  /***********************************************************************************************************************************/
  let history = useHistory();
  const [searchTerm, setSearchTerm] = React.useState("");
  const [input, setInput] = React.useState("");
  const [results, setResults] = React.useState([]);
  
  
  const fetchData =  () => {

      fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
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
  const handleKeyPress = (event) => {
    if(event.key == 'Enter')
    handleSearch()
    history.push('/search')
    
    
   }
    
  return (
 
   <header value={props.results} className="App-header">
        <h1  className="App-logo" alt="google-logo"><Link style={{ textDecoration: 'none', color: '#333' }}    to="/">
        Google <span className="sub-logo">Books API</span>
        
        </Link></h1> 
       <div className="search-bar-container"> 
       <input autoFocus={true}
       onKeyPress={handleKeyPress}
       className="search-bar" 
       type="text"
       placeholder="Search"
       value={input}
       onChange={handleChange}/><Link onClick={handleSearch}  className="search-btn" to="/search"><SearchIcon/></Link>
       </div>
   
          </header>
         


   
  );
}

export default Header;
