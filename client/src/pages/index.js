import React, { Fragment, lazy, Suspense, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createStructuredSelector } from "reselect";
import { Route, Switch, Redirect } from "react-router-dom";

import { selectCurrentUser } from "../redux/user/userSelectors";

import ErrorHandler from "../components/error-boundary/error-boundary.component";
import { SpinnerOne } from "../components/spinner/spinner-component";
import PrivateRouteUser from '../components/routing/PrivateRouteUser'
import { loadUser } from "../redux/user/userActions";

import NotFoundPage from './NotFound/NotFound'
import Login from './auth/Login'
import Register from './auth/Register'
import ContactPage from './contact/contact'
import CheckOutPage from './checkout/CheckOutPage'
import CompletedPage from './checkout/CompletedPage'
import ForgotPassword from './auth/ForgotPassword'
import ResetPassword from './auth/ResetPassword'

const HomePage = lazy(() => import("./home/homePage"));
const ProductDetails = lazy(() => import("./product/product"));
const ShopPage = lazy(() => import("./shop/Shop"));
const CartPage = lazy(() => import('./cart/CartPage'))

const User = lazy(() => import('./account/User'))
const Admin = lazy(() => import('./account/Admin'))


const Routes = ({ user: { isAuthenticated, user }, loadUser }) =>{
  useEffect(() => {
    loadUser();
  },[loadUser])

  return  (
  <Fragment>
     <ErrorHandler>
        <Suspense fallback={<SpinnerOne />}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            exact
            path="/login"
            render={() =>
              isAuthenticated && user ? <Redirect to="/account" /> : <Login />
            }
          />
          <Route
            exact
            path="/register"
            render={() =>
              isAuthenticated && user ? <Redirect to="/" /> : <Register />
            }
          />
          <Route exact  path="/resetpassword/:token" component={ResetPassword} />
          <Route exact path="/:id/:productname" component={ProductDetails} />
          <Route exact path="/shops" component={ShopPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/cart" component={CartPage} />
          <Route exact path="/checkout" component={CheckOutPage} />
          <Route exact path="/complete" component={CompletedPage} />
          <Route exact path="/forgotpassword" component={ForgotPassword} />
         
          {user && user.role === 'user' ? (
            <PrivateRouteUser exact path="/account" component={User}/>
            ) : (
              <PrivateRouteUser exact path="/account" component={Admin}/>
              )}
              
           <Route component={NotFoundPage} />
        </Switch>
        </Suspense>
    </ErrorHandler>
  </Fragment>
)};

Routes.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  loadUser: () => dispatch(loadUser()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
