import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../screens/Home";
import Menu from "../screens/Menu";
import Contact from "../screens/Contact";

function RouterComponent(props) {
  return (
    <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/menu">
              <Menu />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
    </Router>
  );
}

export default RouterComponent;
