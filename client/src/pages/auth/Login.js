import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png'


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
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
                              <img className="auth-logo" src={logo} alt='logo' />
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
                              <div className="login_footer form-group">
                                  <div className="chek-form">
                                      <div className="custome-checkbox">
                                          <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox1" value="" defaultChecked/>
                                          <label className="form-check-label" htmlFor="exampleCheckbox1"><span>Remember me</span></label>
                                      </div>
                                  </div>
                                  <Link to="/forgotpassword">Forgot password?</Link>
                              </div>
                              <div className="form-group">
                                  <button type="submit" className="btn btn-fill-out btn-block" name="login">Log in</button>
                              </div>
                          </form>
                          <div className="different_login">
                              <span> or</span>
                          </div>
                          <ul className="btn-login list_none text-center">
                              <li><a href="http://localhost:4000/api/auth/google" className="btn btn-google"><i className="ion-social-googleplus"></i>Log in with Google</a></li>
                          </ul>
                          <div className="form-note text-center">Don't Have an Account? <Link to="/register">Sign up now</Link></div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>       
  );
};

export default Login;
