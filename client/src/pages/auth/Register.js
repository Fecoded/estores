import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { register } from "../../redux/user/userActions";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      dispatch(
        register({
          firstName,
          lastName,
          displayName,
          email,
          password,
        })
      );
    } else {
      toast.error(`❤ Password does not match, Try again`);
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
                        type="text"
                        required
                        className="form-control"
                        name="firstName"
                        placeholder="Firstname"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        required
                        className="form-control"
                        name="lastName"
                        placeholder="Lastname"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        required
                        className="form-control"
                        name="displayName"
                        placeholder="Username"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        required
                        className="form-control"
                        name="email"
                        placeholder="Email Address"
                        value={email}
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
                        minLength="6"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        required
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        minLength="6"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </div>
                    <div className="login_footer form-group">
                      <div className="chek-form">
                        <label
                          className="form-check-label"
                          htmlFor="exampleCheckbox2"
                        >
                          <span>
                            By signing up, you agree to Terms &amp; Policy.
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        className="btn btn-fill-out btn-block"
                        name="register"
                      >
                        Register
                      </button>
                    </div>
                  </form>
                  {/* <div className="different_login">
                    <span> or</span>
                  </div>
                  <ul className="btn-login list_none text-center">
                    <li>
                      <a
                        href="http://localhost:4000/api/auth/google"
                        className="btn btn-google"
                      >
                        <i className="ion-social-googleplus"></i>Log in with
                        Google
                      </a>
                    </li>
                  </ul> */}
                  <div className="form-note text-center">
                    Already have an account? <Link to="/login">Log in</Link>
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

export default Register;
