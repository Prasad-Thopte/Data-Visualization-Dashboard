import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";


import HomePage from "./home";
import Polar from "./polar";
import Line from "./line";
import Bar from "./bar";
import Pie from "./pie";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
       <Route path="/bar">
          <Bar />
        </Route>
        <Route path="/polar">
          <Polar />
        </Route>
        <Route path="/line">
          <Line />
        </Route>
        <Route path="/pie">
          <Pie />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
