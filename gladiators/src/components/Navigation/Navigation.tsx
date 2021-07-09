import React from "react";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import Home from "../../views/Home";
import UeberUns from "../../views/UeberUns";

const Navigation: React.FC<{}> = () => {
  return (
    <div>
      <Header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/teams">Teams</NavLink>
        <NavLink to="/ueber">Über Uns</NavLink>
      </Header>

      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/ueber">
            <UeberUns />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Navigation;
