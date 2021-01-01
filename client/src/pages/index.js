import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import Login from "./auth/Login";
import Register from "./auth/Register";
import HomePage from "./home/homePage";
import ProductDetails from "./product/product";
import ShopPage from "./shop/Shop";

const Routes = () => (
  <Fragment>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/show-detail" component={ProductDetails} />
      <Route exact path="/shops" component={ShopPage} />
    </Switch>
  </Fragment>
);

export default Routes;
