import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import brain2 from '../images/brain2.svg'
import Button from '@material-ui/core/Button';

const Welcome = () => {
  
  document.title =  "ThinkTest";
    return (
      
        <div>   
        <header className="App-header">
           <img src={brain2} alt="logo" width = "300" />
          <p>
            Care To Test Your  <code>Intelligence?</code> 
            </p>
            <ul>
            <Link to ="/starttest">
            <Button variant="contained" color="primary" size="extended">   
            TAKE TEST
          </Button>
             </Link>
          </ul>
        </header>
    </div>
    );
}
 
export default Welcome;