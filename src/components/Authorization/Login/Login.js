import React, { useState } from "react";
import axios from 'axios';
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import PrimaryButton from "../../Shared/PrimaryButton";
import TextInput from "../../Shared/TextInput";
import { signIn } from "../../../redux/actions";

import '../index.css'

const Login = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function onLoginSubmit(event) {
    event.preventDefault();

    axios.post(`/auth/login`, {email: email, password: password})
      .then(response => {
        dispatch(signIn(response.data));
        history.goBack();
      })
      .catch(error => {
        console.log(error.response);
      });
  }

  return (
    <div className='authorization-container'>
      <form>
        <h2> Log in </h2>
        <div className='authorization-card'>
          <TextInput type='text' label='Email' name='email' onChange={e => setEmail(e.target.value)} />
          <TextInput type='password' label='Password' name='password' onChange={e => setPassword(e.target.value)} />
          <div className='authorization-controls'>
            <PrimaryButton text='Log In' onClick={onLoginSubmit} />
            <div className='signup-link'> Don't have an account? <Link to='/registration'> Sign up </Link> </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
