import React, { useContext } from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "../screens/Home";
import Menu from "../screens/Menu";
import Contact from "../screens/Contact";
import LinkRoutes from "../components/LinkRoutes";

function RouterComponent(props) {
  return (
    <Router>
        <LinkRoutes />
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
