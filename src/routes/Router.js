import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../screens/Home";
import Menu from "../screens/Menu";
import Contact from "../screens/Contact";

const RouterComponent = () => {
  return (
    <Router>
      <Switch>

        <Route exact path="/menu">
          <Home />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Menu />
        </Route>
      </Switch>
    </Router>
  );
};

export default RouterComponent;
