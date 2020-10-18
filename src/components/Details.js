import React, { Fragment } from 'react';
import { Link} from "react-router-dom";

function Details(props) {
  const book = props.results;
  const printData=()=>{
    console.log(book);
  }

  return (
    
    <div className="details" style={{display: 'grid', gridTemplateColumns: '1fr', textAlign: 'center'}}> 
      { book ? <Fragment>
        <h1>{(book.volumeInfo.title).toString()}</h1> <img style={{margin: '0 auto'}}  src={(book.volumeInfo.imageLinks.thumbnail).toString()}/>
        </Fragment>: <h1 style={{ height: '100%', width:'100%'}} >No Details Available...Search for something</h1>   }  
        
    </div>

  );

}

export default Details;
