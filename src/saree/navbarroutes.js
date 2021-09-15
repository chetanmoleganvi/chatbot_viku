import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Home from "../saree/home";


const NavBarTop = () => {
  return (
    <Router>
      <Switch>
         <Route exact path="/" ><Home /></Route>

      </Switch>
    </Router>
  );
}

export default NavBarTop;