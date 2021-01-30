import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, withRouter } from 'react-router-dom'

import logo from "../../assets/logo.png";

import {changePassword} from '../../redux/forgotpassword/forgotpassword.action'
import { SpinnerTwo } from "../../components/spinner/spinner-component";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResetPassword = ({ match }) => {
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.userReducer);

  const { token } = match.params;
  const history = useHistory()

  const onSubmit = (e) => {
    e.preventDefault();
    if(password === confirmpassword) {
      dispatch(changePassword({ password, token, history }));
    } else {
      toast.error(`❤️ password does not match, try again`);
    }
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
                        className="form-control"
                        required
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        minLength="6"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        required
                        type="password"
                        name="confirmpassword"
                        placeholder="Confirm Password"
                        value={confirmpassword}
                        minLength="6"
                        onChange={(e) => setConfirmPassword(e.target.value)}
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default  withRouter(ResetPassword);
