import React, { Fragment } from 'react';
import { Link} from "react-router-dom";

function Details(props) {
  const book = props.results;
  let thumbnail = false;
  return (
    
    <div className="details" style={{display: 'grid', gridTemplateColumns: '1fr', textAlign: 'center'}}> 
      { book ?   thumbnail = (book.volumeInfo.imageLinks) ?  true : false : null}

      { book ?
      <Fragment>
 
       { thumbnail ? <img style={{margin: '0 auto'}}  src={(book.volumeInfo.imageLinks.thumbnail).toString()}/>: <div>NO IMAGE</div> }
      <p><strong>Title: </strong>{(book.volumeInfo.title).toString()}</p> 
      <p><strong>Author(s): </strong>{(book.volumeInfo.authors).map(author=>{
        return author + " "
      })}</p>
      <p><strong>Publisher: </strong>{book.volumeInfo.publisher}</p>
      <p><strong>Date: </strong>{book.volumeInfo.publishedDate}</p>
      
      </Fragment>: <h1 style={{ height: '100%', width:'100%'}} >No Details Available...Search for something</h1>   }  
        
        
    </div>

  );

}

export default Details;
