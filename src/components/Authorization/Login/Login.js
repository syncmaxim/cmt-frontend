import React from "react";
import AccentButton from "../../Shared/AccentButton";
import PrimaryButton from "../../Shared/PrimaryButton";
import TextInput from "../../Shared/TextInput";

import './index.css'

function onCancelClicked(event) {
  event.preventDefault();
  console.log('Cancel clicked');
}

function onSubmitClicked(event) {
  event.preventDefault();
  console.log('Submit clicked');
}

const handleChange = (event) => {
  const { name, value } = event.target;
  console.log(name, value);
};

const Login = (props) => (
  <div className='authorization-container'>
      <form>
        <h2> Log in </h2>
        <div className='authorization-card'>
          <TextInput label='Email' name='email' onChange={handleChange} />
          <TextInput label='Password' name='password' onChange={handleChange} />
          <div className='authorization-controls'>
            <AccentButton text={'Cancel'} onClick={onCancelClicked} />
            <PrimaryButton text={'Log In'} onClick={onSubmitClicked} />
          </div>
        </div>
      </form>
  </div>
);

export default Login;
