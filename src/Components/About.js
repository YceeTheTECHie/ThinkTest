import React  from 'react'
import './style.css'
import about from '../images/about.jpg'
const About = () => (
    
    document.title =  "About_us",
    <React.Fragment>
    <img src={about} alt="logo" width = "300" className = "about"/>
    <p className = "flow-text" > ThinkTest is a web application that measures intelligence quotient of a player by supplying players with tasking questions.</p> 
   </React.Fragment>
)

export default About;