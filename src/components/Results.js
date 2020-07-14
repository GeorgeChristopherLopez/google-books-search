import React from 'react';
import {Link} from 'react-router-dom';


function Results() {
  return (
    <div className="results-section">
     <h1>Results....</h1>
     <ul className="books">
         <li className="book"><Link to="/details">book</Link></li>
         <li className="book"><Link to="/details">book</Link></li>
         <li className="book"><Link to="/details">book</Link></li>
    
    </ul>
    </div>
  );
}

export default Results;
