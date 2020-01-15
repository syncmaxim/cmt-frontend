import React, { useEffect, useState } from "react";
import TextInput from "../../Shared/TextInput";
import PrimaryButton from "../../Shared/PrimaryButton";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import '../index.css';
import axios from "axios";
import { signIn } from "../../../redux/actions";

const Registration = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [isPasswordsMatches, setIsPasswordsMatches] = useState(false);

  useEffect(() => {
    if (password && password === repeatPassword) {
      setIsPasswordsMatches(true);
    } else {
      setIsPasswordsMatches(false);
    }
  }, [password, repeatPassword]);

  function onRegisterSubmit(event) {
    event.preventDefault();

    if (isPasswordsMatches) {
      axios.post(`/auth/register`, {email: email, password: password})
        .then(response => {
          dispatch(signIn(response.data));
          history.goBack();
        })
        .catch(error => {
          console.log(error.response);
        });
    }
  }

  return (
    <div className='authorization-container'>
      <form>
        <h2> Sign up </h2>
        <div className='authorization-card'>
          <TextInput type='text' label='Email' name='email' onChange={e => setEmail(e.target.value)} />
          <TextInput type='password' label='Password' name='password' onChange={e => setPassword(e.target.value)} />
          <TextInput type='password' label='Repeat password' name='repeat-password' onChange={e => setRepeatPassword(e.target.value)} />
          <div className='authorization-controls'>
            <PrimaryButton text={'Sign up'} onClick={onRegisterSubmit} />
            <div className='signup-link'> Already have an account? <Link to='/login'> Sign in </Link> </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Registration;
