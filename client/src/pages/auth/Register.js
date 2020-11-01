import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png'

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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
                                  name="name" 
                                  placeholder="Name"
                                  value={name}
                                  onChange={(e) => setName(e.target.value)}
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
                                  onChange={(e) => setPassword(e.target.value)}
                                  />
                            </div>
                            <div className="form-group">
                                <input 
                                  className="form-control" 
                                  required 
                                  type="password" 
                                  name="password" 
                                  placeholder="Confirm Password"
                                  value={confirmPassword}
                                  onChange={(e) => setConfirmPassword(e.target.value)}
                                  />
                            </div>
                            <div className="login_footer form-group">
                                <div className="chek-form">
                                    <div className="custome-checkbox">
                                        <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox2"  required/>
                                        <label className="form-check-label" htmlFor="exampleCheckbox2"><span>I agree to terms &amp; Policy.</span></label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-fill-out btn-block" name="register">Register</button>
                            </div>
                        </form>
                        <div className="different_login">
                            <span> or</span>
                        </div>
                        <ul className="btn-login list_none text-center">
                            <li><a href="http://localhost:4000/api/auth/google" className="btn btn-google"><i className="ion-social-googleplus"></i>Log in with Google</a></li>
                        </ul>
                        <div className="form-note text-center">Already have an account? <Link to="/login">Log in</Link></div>
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
