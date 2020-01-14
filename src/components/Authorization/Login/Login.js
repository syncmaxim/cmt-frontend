import React from "react";
import axios from 'axios';
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import PrimaryButton from "../../Shared/PrimaryButton";
import TextInput from "../../Shared/TextInput";
import { signIn } from "../../../redux/actions";

import '../index.css'

const apiUrl = 'http://localhost:4000/auth';

const Login = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  let state = {
    email: '',
    password: ''
  };

  function onSubmitClicked(event) {
    event.preventDefault();

    axios.post(`${apiUrl}/login`, {email: state.email, password: state.password})
      .then(response => {
        dispatch(signIn(response.data));
        history.goBack();
      })
      .catch(error => {
        console.log(error.response);
      });
  }

  const handleChange = (event) => {
    state = {...state, [event.target.name]: event.target.value};
  };

  return (
    <div className='authorization-container'>
      <form>
        <h2> Log in </h2>
        <div className='authorization-card'>
          <TextInput type='text' label='Email' name='email' onChange={handleChange} />
          <TextInput type='password' label='Password' name='password' onChange={handleChange} />
          <div className='authorization-controls'>
            <PrimaryButton text='Log In' onClick={onSubmitClicked} />
            <div className='signup-link'> Don't have an account? <Link to='/registration'> Sign up </Link> </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
