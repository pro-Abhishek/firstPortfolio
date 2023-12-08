import React from "react";
import {Switch,Route,Redirect} from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Services from "./Services";
import About from "./About";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Navbar from "./Navbar";
import Feedback from "./Feedback";
const Main=()=>{

    return(<>
      <Navbar></Navbar>
      <Switch>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path="/service" component={Services}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/feedback" component={Feedback}></Route>
          <Redirect to="/home"></Redirect>
      </Switch>
    </>)
};
export default Main;