import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Home from "../saree/home";
import Scholarship from "../services/scholarship"
import Onlineapp from "../services/onlineapp"
import Online from "../services/online"
import Career from "../services/career"

const NavBarTop = () => {
  return (
    <Router>
      <Switch>
         <Route exact path="/" ><Home /></Route>
         <Route path="/scholarship"><Scholarship /></Route>
         <Route path="/Onlineapp"> <Onlineapp /></Route>
         <Route path="/Online"> <Online /></Route>
         <Route path="/Career"> <Career /></Route>

      </Switch>
    </Router>
  );
}

export default NavBarTop;