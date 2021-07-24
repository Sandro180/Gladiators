import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../../views/Home";
import AboutUs from "../../views/AboutUs";
import Member from "../../views/Member";

const Navigation: React.FC<{}> = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/member">
            <Member />
          </Route>
          <Route exact path="/about">
            <AboutUs />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Navigation;
