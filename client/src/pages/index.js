import React, { Fragment, lazy, Suspense } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createStructuredSelector } from "reselect";
import { Route, Switch, Redirect } from "react-router-dom";

import { selectCurrentUser } from "../redux/user/userSelectors";

import ErrorHandler from "../components/error-boundary/error-boundary.component";
import { SpinnerOne } from "../components/spinner/spinner-component";
// import PrivateRouteUser from '../components/routing/PrivateRouteUser'

const Login = lazy(() => import("./auth/Login"));
const Register = lazy(() => import("./auth/Register"));
const HomePage = lazy(() => import("./home/homePage"));
const ProductDetails = lazy(() => import("./product/product"));
const ShopPage = lazy(() => import("./shop/Shop"));

const Routes = ({ user: { isAuthenticated, user } }) => (
  <Fragment>
    <Switch>
      <ErrorHandler>
        <Suspense fallback={<SpinnerOne />}>
          <Route exact path="/" component={HomePage} />
          <Route
            exact
            path="/login"
            render={() =>
              isAuthenticated && user ? <Redirect to="/" /> : <Login />
            }
          />
          <Route
            exact
            path="/register"
            render={() =>
              isAuthenticated && user ? <Redirect to="/" /> : <Register />
            }
          />
          <Route exact path="/show-detail" component={ProductDetails} />
          <Route exact path="/shops" component={ShopPage} />
        </Suspense>
      </ErrorHandler>
    </Switch>
  </Fragment>
);

Routes.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
});

export default connect(mapStateToProps)(Routes);
