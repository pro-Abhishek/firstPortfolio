import React, { useState } from "react";
import Card from "./Card";
const Services=()=>{

   const [data,setData]=useState([
    {
       img:"../developers1.jpeg",
       name:"Html" ,
       cardtext:"Bachelor’s degree in computer science, information technology, programming languages, web services, or another related field Excellent knowledge of HTML5 and CSS3"
    },
    {
      img:"../developers2.jpeg",
      name:"Css" ,
      cardtext:"Experience using CSS tools and frameworks such as Bootstrap and Semantic UI"
   },
   {
    img:"../pexels-photo-574080.jpeg",
    name:"Java" ,
    cardtext:"A Java project is a small or large-scale programming endeavour for achieving a specific purpose, such as automating repetitive tasks, testing functionality and creating recreational or informative"
 },
 {
  img:"../pexels-photo-1181244.webp",
  name:"React Js",
  cardtext:"React is a JavaScript library for building user interfaces. React is used to build single-page applications. React allows us to create reusable UI components." 
},
{
  img:"../photo-1522252234503-e356532cafd5.avif",
  name:"My-Sql" ,
  cardtext:"MySQL Cluster enables users to meet the database challenges of next generation web, cloud, and communications services with uncompromising scalability, uptime ..."
},
   ])

  return (<>
       <h1 style={{textAlign:"center"}}>welcome Services page</h1>
       
       <div className="container col-10 mx-auto">
       <div className="row">
        {
             
             data.map((val,index)=>{
              return(<>
                <div className="col-lg-4" style={{marginTop:"15px"}}>
                <Card imgsrc={val.img} name={val.name} text={val.cardtext}></Card>
                </div>
              </>)      
            
        })
  
      }
       </div>

       </div>

  </>)
};
export default Services;