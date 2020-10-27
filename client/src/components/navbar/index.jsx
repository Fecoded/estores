import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { Button } from '../button';

const Navbar = () => (
  <nav className='navbar navbar-expand-lg navbar-light bg-light'>
    <div className='container'>
      <Link className='navbar-brand' to='/'>
        <img src={logo} alt='' className='img' />
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNavDropdown'
        aria-controls='navbarNavDropdown'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarNavDropdown'>
        <form className='formNav'>
          <div className='input-group'>
            <input
              type='text'
              className='form-control'
              placeholder='Enter Product name'
              aria-label='Enter Product name'
              aria-describedby='button-addon2'
            />
            <div className='input-group-append'>
              <button
                className='btn bg-success text-light font-weight-bold'
                type='button'
                id='button-addon2'
              >
                Search
              </button>
            </div>
          </div>
        </form>

        <ul className='navbar-nav ml-auto'>
          <li className='nav-item'>
            <Link className='nav-link font-weight-bold' to='/'>
              Home <span className='sr-only'>(current)</span>
            </Link>
          </li>

          <li className='nav-item dropdown pr-3'>
            <Link
              className='nav-link dropdown-toggle font-weight-bold'
              to='#'
              id='navbarDropdownMenuLink'
              role='button'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
            >
              Login
            </Link>
            <div
              className='dropdown-menu'
              aria-labelledby='navbarDropdownMenuLink'
            >
              <Link className='dropdown-item' to='#'>
                <Button>Login</Button>
              </Link>
              <Link className='dropdown-item' to='#'>
                Another action
              </Link>
              <Link className='dropdown-item' to='#'>
                Something else here
              </Link>
            </div>
          </li>
          <li className='nav-item'>
            <Link to='/cart'>
              <div id='ex3'>
                <span className='fa-stack' data-count='3'>
                  <i className='fa fa-shopping-cart fa-2x'></i>
                </span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
