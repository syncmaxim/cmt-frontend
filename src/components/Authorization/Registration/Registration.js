import React from "react";
import TextInput from "../../Shared/TextInput";
import AccentButton from "../../Shared/AccentButton";
import PrimaryButton from "../../Shared/PrimaryButton";

function onCancelClicked() {
  console.log('Cancel clicked');
}

function onSubmitClicked() {
  console.log('Submit clicked');
}

const handleChange = (event) => {
  const { name, value } = event.target;
  console.log(name, value);
};

const Registration = (props) => (
  <div className='authorization-container'>
    <form>
      <h2> Sign up </h2>
      <div className='authorization-card'>
        <TextInput label='Email' name='email' onChange={handleChange} />
        <TextInput label='Password' name='password' onChange={handleChange} />
        <TextInput label='Repeat password' name='repeat-password' onChange={handleChange} />
        <div className='authorization-controls'>
          <AccentButton text={'Cancel'} onClick={onCancelClicked} />
          <PrimaryButton text={'Sign up'} onClick={onSubmitClicked} />
        </div>
      </div>
    </form>
  </div>
);

export default Registration;
