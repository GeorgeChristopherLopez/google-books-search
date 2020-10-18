import React from 'react';
import { Link} from "react-router-dom";



class HomePageResults extends React.Component {
    
    constructor(props) {
      super(props);
      this.fetchDataForHome= this.fetchDataForHome.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.state = {searchTearm: this.props.searchTearm, results: []};
      
      
  

    }
   
    componentWillMount() {
        console.log('mounted')
       
        console.log( this.fetchDataForHome())
       // this.props.onLoad(Promise.all([reduxagent.get.all()]));
      } 
      
   fetchDataForHome =  () => {
        console.log("fetching for the homepage")
        fetch(`https://www.googleapis.com/books/v1/volumes?q=javascript`)
        .then(response => response.json())
        .then(responseData => {
          let newResult = responseData.items;
          this.setState({
            results: newResult
          });
          
         this.props.onChange(newResult);
          
         console.log("results:", newResult)
        })
        .catch(error => {
          console.log('Error fetching and parsing data', error);
         
        });
    }
    handleClick=(key)=>{
        this.props.onChange(this.state.results[key]);
        console.log(this.state.results);
        console.log(key);
    }
   

      render() {
      return (
        <div className="results"> 
   


        {   
            
              this.state.results.length > 0  ?
              this.state.results.map(function(item, key) {
                let thumnail = (item.volumeInfo.imageLinks) ?  true : false;
                return <div className="book-card" style={{margin: '0 auto'}}  key={key}>
                  <Link to="/details" onClick={()=>this.handleClick(key)}>  
                  { thumnail ?  <img   src={(item.volumeInfo.imageLinks.thumbnail).toString()}/>: <div style={{border: '1px solid black', height: '100%', width:'100%'}} >`no image available`</div>   }  
                  
                  </Link>
              
                 
                </div>
              }, this) 
          : null
          
        
        
           
        
            
        }
          
        
        
        
         
        
         </div>
        
      );
    }
  }
  export default HomePageResults;
