import React from "react";
import {NavLink} from "react-router-dom";
import './index.css';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
const Navbar=()=>{


    return(<>

    <div className="container-fluid nav_bg " style={{zIndex:1,position:"fixed"}}>
        <div className="row">
            <div className="col-10 mx-auto">

    
           
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/home"><img className="logo" src="../abhishek1.png"/></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav  mb-2 mb-lg-0" style={{marginLeft:"auto"}}>
        <li className="nav-item" >
          <NavLink activeClassName="menu_item" className="nav_tag" to="/home">Home</NavLink>
        </li>
        <li className="nav-item" >
          <NavLink activeClassName="menu_item" className="nav_tag"  to="/about">About</NavLink>
        </li>
        
        <li className="nav-item"  >
          <NavLink activeClassName="menu_item" className="nav_tag"  to="/contact">Contact</NavLink>
        </li>
        
        <li className="nav-item" >
          <NavLink activeClassName="menu_item" className="nav_tag"  to="/service">Services</NavLink>
        </li>

        <li className="nav-item dropdown links" style={{marginTop:"-8px"}}>
          <a className="nav-link dropdown-toggle nav_tag" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Links
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a target="_blank"  className="dropdown-item" href="https://www.instagram.com/yes_here_is_abhishek/">Instagram</a></li>
            <li><a target="_blank" className="dropdown-item" href="https://github.com/pro-Abhishek">github</a></li>
            <li><a target="_blank" className="dropdown-item" href="https://www.linkedin.com/in/abhishek-pandey-2a7174199/">linked in..</a></li>
          </ul>
        </li>
        
        
      </ul>
      
    </div>
    </div>
  </nav>
  </div>
         
 </div> 
</div>
    </>)
};
export default Navbar;