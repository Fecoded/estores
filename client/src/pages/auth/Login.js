import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { FormInput } from '../../components/inputField/inputField';
import { Form } from '../../components/form/form-style';
import { Button } from '../../components/button';
import {
  Container,
  Card,
  ImageContainer,
  Image,
  FormControl,
  CheckBoxContainer,
} from './login-&-register-style';

// Styles
import img from '../../assets/img.jpg';
import GoogleImg from '../../assets/google.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Card>
        <ImageContainer>
          <Image src={img} />
        </ImageContainer>
        <Form onSubmit={onSubmit}>
          <Button isGoogleSignIn type='button'>
            <img src={GoogleImg} alt='' />
            <a href='http://localhost:4000/api/auth/google'>
              Log in with Google
            </a>
          </Button>

          <small>or</small>

          <FormControl>
            <FormInput
              type='email'
              name='email'
              value={email}
              placeholder='Email Address'
              handleChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>

          <FormControl>
            <FormInput
              type='password'
              name='password'
              value={password}
              placeholder='Password'
              handleChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>

          <CheckBoxContainer>
            <div>
              <label>
                <input type='checkbox' className='filled-in' />
                <span>Remember me</span>
              </label>
            </div>

            <Link to='/forgotpassword'>Forgot Password</Link>
          </CheckBoxContainer>

          <Button>Login</Button>

          <small>
            Don't have an account? <Link to='/register'>Sign Up</Link>
          </small>
        </Form>
      </Card>
    </Container>
  );
};

export default Login;
