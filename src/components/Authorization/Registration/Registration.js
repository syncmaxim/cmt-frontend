import React from "react";
import TextInput from "../../Shared/TextInput";
import PrimaryButton from "../../Shared/PrimaryButton";
import { Link } from "react-router-dom";

import '../index.css';

const Registration = (props) => {

  function onSubmitClicked(event) {
    event.preventDefault();
    console.log('Submit clicked');
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
  };

  return (
    <div className='authorization-container'>
      <form>
        <h2> Sign up </h2>
        <div className='authorization-card'>
          <TextInput type='text' label='Email' name='email' onChange={handleChange} />
          <TextInput type='password' label='Password' name='password' onChange={handleChange} />
          <TextInput type='password' label='Repeat password' name='repeat-password' onChange={handleChange} />
          <div className='authorization-controls'>
            <PrimaryButton text={'Sign up'} onClick={onSubmitClicked} />
            <div className='signin-link'> Already have an account? <Link to='/login'> Sign in </Link> </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Registration;
