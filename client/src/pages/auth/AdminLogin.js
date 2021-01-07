import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import logo from "../../assets/logo.png";

import { login } from "../../redux/user/userActions";
import { SpinnerTwo } from "../../components/spinner/spinner-component";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.userReducer);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
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
                        placeholder="Your Email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        required
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
                          Log in
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

export default AdminLogin;
