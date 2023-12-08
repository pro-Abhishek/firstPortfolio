import React from "react";
import { useState } from "react";
import {NavLink} from "react-router-dom";

const Contact=()=>{

  const [name,setName]=useState("");

  const inputEvent=(event)=>{
 let text=event.target.value;
 setName(text);
//  console.log(fullname);
//  console.log(document.getElementById('user').value);

  }

//   const passdata=()=>{
//  console.log("called");
//   return(  <Feedback name={name}></Feedback>)

//   }

return (<>
       <div className="container col-10 mx-auto">
         <h1 style={{textAlign:"center"}}>welcome Contact page</h1>

         <form  className="row g-3 " style={{marginTop:"15px"}}>
         <div className="col-md-6" >
    <label for="inputEmail4" className="form-label">Name</label>
    <input id="user" type="text" onChange={inputEvent} name="fname" value={name} placeholder="enter your full name" className="form-control"/>
  </div>
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">Email</label>
    <input type="email" placeholder="abc@123gmail.com" className="form-control" id="inputEmail4"/>
  </div>
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">contact</label>
    <input type="number" placeholder="enter your contact number" className="form-control" id="inputEmail4"/>
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label">Password</label>
    <input type="password" placeholder="alpha numeric(strong password)" className="form-control" id="inputPassword4"/>
  </div>
  <div className="col-12">
    <label for="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div className="col-12">
    <label for="inputAddress2" className="form-label">Address 2</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  
  <div className="col-md-6">
    <label for="inputCity" className="form-label">City</label>
    <input type="text" className="form-control" id="inputCity"/>
  </div>
  <div className="col-md-4">
    <label for="inputState" className="form-label">State</label>
    <select id="inputState" className="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div className="col-md-2">
    <label for="inputZip" className="form-label">Zip</label>
    <input type="text" className="form-control" id="inputZip"/>
  </div>
  <div className="col-12">
    <label for="inputAddress2" className="form-label">Feedback</label>
    <textarea type="text" className="form-control" id="inputAddress2" placeholder="Any messages..."/>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div className="col-12">
    {/* <input type="submit" className="btn btn-primary"  style={{width:"100%"}}/> */}
    <NavLink to="/feedback" style={{width:"100%"}} type="submit" className="btn btn-primary"><button className="btn btn-primary">lets go!!!</button></NavLink>
  </div>
</form> 

       </div>
  </>)
  
};

export default Contact;