import React, { useContext } from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "../screens/Home";
import Menu from "../screens/Menu";
import Contact from "../screens/Contact";
import Sign from "../screens/Sign";
import LinkRoutes from "../components/Link";

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
            <Route path="/sign">
              <Sign />
            </Route>
          </Switch>
    </Router>
  );
}

export default RouterComponent;
