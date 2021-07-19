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
        <NavLink to="/member">Teams</NavLink>
        <NavLink to="/about">Über Uns</NavLink>
      </Header>

      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <UeberUns />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Navigation;
