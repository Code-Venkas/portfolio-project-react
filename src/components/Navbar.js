import React from "react"
import Logo from "../images/logobrand.png";
import {Link} from "react-scroll";
// React Font Awesome Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons";
export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
    <div className="container">

        <a className="navbar-brand" href="#"><img className="logo" src={Logo} alt="My Logo"></img></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }}/>  
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <Link smooth={true} to="home" className="nav-link" href="#">Home</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="about" className="nav-link" href="#">About Me</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="skills" className="nav-link" href="#">Skills/Education</Link>
            </li>
           
            <li className="nav-item">
              <Link smooth={true}  to="github"className="nav-link" href="#">GitHub</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="contacts" className="nav-link" href="#">Contact Me</Link>
            </li>
            
          </ul>
        
        </div>

        </div>
      </nav>
    );
}

export default Navbar