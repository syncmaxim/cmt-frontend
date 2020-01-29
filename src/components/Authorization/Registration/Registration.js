import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import { TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLastLocation } from "react-router-last-location";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import '../index.css';
import { openErrorSnackBar, signUp } from "../../../redux/actions";
import { emailValidate } from "../../../utils/helpers";
import ErrorHandler from "../../Shared/ErrorHandler/ErrorHandler";

const Registration = props => {
  const dispatch = useDispatch();
  const lastLocation = useLastLocation();
  const [isPassMatchError, setIsPassMatchError] = useState(false);

  const handleErrors = (values) => {
    const errors = {};
    setIsPassMatchError(false);

    if (!values.email) errors.email = 'Email address is required';
    if (!values.password) errors.password = 'Password is required';

    if (emailValidate(values.email)) errors.email = 'Invalid email address';

    return errors;
  };

  return (
    <div className='authorization-container'>
        <h2> Sign up </h2>
        <Formik
          initialValues={{ email: '', password: '', repeatPassword: '' }}
          validate={values => handleErrors(values)}
          onSubmit={data => {
            if (data.password !== data.repeatPassword) {
              setIsPassMatchError(true);
              dispatch(openErrorSnackBar(`Passwords doesn't match`));
              return;
            }

            dispatch(signUp({email: data.email, password: data.password}, lastLocation, props));
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
                  <Field error={(touched.password && !!errors.password) || isPassMatchError} type="password" name="password" label="Password" as={TextField} />
                  <ErrorMessage name="password" component={ErrorHandler} />
                </div>
                <div className='form-field'>
                  <Field error={(touched.repeatPassword && !!errors.repeatPassword) || isPassMatchError} type="password" name="repeatPassword" label="Repeat password" as={TextField} />
                  <ErrorMessage name="repeatPassword" component={ErrorHandler} />
                </div>
                <div className='authorization-controls'>
                  <Button variant="contained" color="primary" type="submit"> Sign Up </Button>
                  <div className='signup-link'> Already have an account? <Link to='/login'> Sign in </Link> </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
    </div>
  );
};

export default Registration;
