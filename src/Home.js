import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {NavLink} from "react-router-dom";
import img from "./coader.gif";
const Home=()=>{
  return (<>
       {/* <div className="container col-10 mx-auto">
       
         
       <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner" style={{height:"650px"}}>
    <div className="carousel-item active" data-bs-interval="10000" style={{marginTop:"50px"}}>
      <img src="../AbhishekDslr.jfif" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="../AbhishekDslr.jfif" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="../AbhishekDslr.jfif" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  

       </div> */}


       <section id="header"  style={{height:"700px", display:"flex",alignItems:"center"}}>
         <div className="container-fluid nav_bg">
          <div className="row">
           <div className="col-10 mx-auto">
            <div className="row">
            <div className="col-md-6 pt-5 pt-0 order-2 order-lg-1 d-flex justify-content-center flex-column " >
            <h1 style={{marginTop:"25px"}}>Grow your website with <strong>Abhishek</strong></h1>
            <h2 className="my-3"> we are the team of talented developer making websites </h2>       
            <div className="mt-3" style={{textAlign:"center"}}> 
            <NavLink to="/service" className="btn btn-primary "> Get started</NavLink> 
            </div>
            </div>
             <div className="col-lg-6 order-1 order-lg-2 header-img">
              <img src={img} alt="right img" className="img-fluid animated" /> 
              </div>
            </div>    
           </div>
          </div>
         </div>

       </section>
  </>)
};
export default Home;