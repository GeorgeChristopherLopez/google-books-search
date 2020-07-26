import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';


/* remove before uploading */
const APIKEY = 'AIzaSyDUON-mFOfHhu8iRH585Kfjx_Sv-ZkMznI';
const keyParam = 'key=API_KEY';
/************************/
/*
fetch('https://www.googleapis.com/books/v1/volumes?q=head+first+javascript&key=AIzaSyDUON-mFOfHhu8iRH585Kfjx_Sv-ZkMznI')
  .then(response => response.json())
  .then(data => console.log(data));

*/
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
