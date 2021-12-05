import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Home from "../saree/home";
import Scholarship from "../services/scholarship"

const NavBarTop = () => {
  return (
    <Router>
      <Switch>
         <Route exact path="/" ><Home /></Route>
         <Route path="/scholarship"><Scholarship /></Route>


      </Switch>
    </Router>
  );
}

export default NavBarTop;