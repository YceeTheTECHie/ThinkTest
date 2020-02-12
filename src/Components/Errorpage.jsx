import React from 'react';
import {Link} from 'react-router-dom'
import error from '../images/error.png';
const Errorpage = () => (
    document.title =  "Error page",
    <div className = "text-flow">
    <img src = {error} alt = "error" width = "120" className = "error"/>
    <h6 className = "errortext">  Go to <Link to = '/'>homepage</Link> </h6>
    </div>
)

export default Errorpage; 