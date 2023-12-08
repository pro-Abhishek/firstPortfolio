import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
const Card=(props)=>{

  return(<>
    
     <div>
 
     <div className="card" style={{width: "18rem"}}>
  <img src={props.imgsrc} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text">{props.text}</p>
    <NavLink to="/contact" className="btn btn-primary">Get Connected</NavLink>
  </div>
</div> 
         
     </div>
  
  </>)
};
export default Card;