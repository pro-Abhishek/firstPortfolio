import React from "react";
import { fullname } from "./Contact";
import img from "./thankyou.png";
const Feedback=()=>{
 console.log("feedback");
    return(<>
           <div className="card text-center col-10 mx-auto ">
  <div className="card-header">
    Have a Good day!!
  </div>
  <div className="card-body">
    <img src={img} alt="thank you" />
    <h5 className="card-title">Your response has been recorded...</h5>
    <p className="card-text">For Any developing requirement build a connection to linked in!!</p>
    <a target="_blank" href="https://www.linkedin.com/in/abhishek-pandey-2a7174199/" className="btn btn-primary">visit</a>
  </div>
  <div className="card-footer text-muted">
    email:<strong>abhishekpandey25022001@gmail.com</strong>
  </div>
</div>  
    </>)
};
export default Feedback;