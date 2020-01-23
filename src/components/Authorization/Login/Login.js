import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button, TextField } from '@material-ui/core';
import { useLastLocation } from "react-router-last-location";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { signIn } from "../../../redux/actions";
import '../index.css';
import { emailValidate } from "../../../utils/helpers";
import ErrorHandler from "../../shared/ErrorHandler/ErrorHandler";

const Login = props => {
  const dispatch = useDispatch();
  const lastLocation = useLastLocation();

  const handleErrors = (values) => {
    const errors = {};

    if (!values.email) errors.email = 'Email address is required';
    if (emailValidate(values.email)) errors.email = 'Invalid email address';

    if (!values.password) errors.password = 'Password is required';

    return errors;
  };

  return (
    <div className='authorization-container'>
      <h2> Log in </h2>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => handleErrors(values)}
        onSubmit={data => {
          dispatch(signIn(data, lastLocation, props))
        }}
      >
        {({ handleSubmit, errors, touched }) => (
          <Form onSubmit={handleSubmit}>
            <div className='authorization-card'>
              <div className='form-field'>
                <Field error={touched.email && !!errors.email} type="email" name="email" label="Email" as={TextField} />
                <ErrorMessage name="email" component={ErrorHandler} />
              </div>
              <div className='form-field'>
                <Field error={touched.password && !!errors.password} type="password" name="password" label="Password" as={TextField} />
                <ErrorMessage name="password" component={ErrorHandler} />
              </div>
              <div className='authorization-controls'>
                <Button variant="contained" color="primary" type="submit"> Log In </Button>
                <div className='signup-link'> Don't have an account? <Link to='/registration'> Sign up </Link> </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
