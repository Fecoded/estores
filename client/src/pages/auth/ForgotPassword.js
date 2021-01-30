import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from 'react-router-dom'

import logo from "../../assets/logo.png";

import {checkEmail} from '../../redux/forgotpassword/forgotpassword.action'
import { SpinnerTwo } from "../../components/spinner/spinner-component";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.userReducer);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(checkEmail({ email }));
  };

  return (
    <div id="main-content">
      <div className="login_register_wrap section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-md-10">
              <div className="login_wrap">
                <div className="padding_eight_all bg-white">
                  <div className="row justify-content-center">
                    <img className="auth-logo" src={logo} alt="logo" />
                  </div>
                  <form onSubmit={onSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        required
                        className="form-control"
                        value={email}
                        name="email"
                        placeholder="Email Address"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      {loading ? (
                        <SpinnerTwo />
                      ) : (
                        <button
                          type="submit"
                          className="btn btn-fill-out btn-block"
                          name="login"
                        >
                          Submit
                        </button>
                      )}
                    </div>
                  </form>
                  <div className="form-note text-center">
                    Remember Password?{" "}
                    <Link to="/login">Login</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
