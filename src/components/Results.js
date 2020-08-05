import React from 'react';
import { Link} from "react-router-dom";

function Results(props) {
  const results = props.results;
  const handleClick=(key)=>{
    props.onChange(results[key]);
    console.log(results);
    console.log(key);
  }
  return (
    <div className="results" style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', textAlign: 'center'}}> 
   


{   
    
      results.length > 0  ?
      results.map(function(item, key) {
        let thumnail = (item.volumeInfo.imageLinks) ?  true : false;
        return <div className="book-card" style={{margin: '0 auto'}}  key={key}>
          <Link to="/details" onClick={()=>handleClick(key)}>  
          { thumnail ?  <img   src={(item.volumeInfo.imageLinks.thumbnail).toString()}/>: <div style={{border: '1px solid black', height: '100%', width:'100%' }} >NO IMAGE</div>   }  
          
          </Link>
      
         
        </div>
      }) 
  : null
  


   

    
}
  



 

 </div>

  );
}

export default Results;
