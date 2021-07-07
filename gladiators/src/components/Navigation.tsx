import React from "react";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import Home from "../views/Home";
import UeberUns from "../views/UeberUns";

const Navigation: React.FC<{}> = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/"><Home /></Route>
            <Route exact path="/ueber"><UeberUns /></Route>
        </Switch>
        </BrowserRouter>
    );
};

export default Navigation;