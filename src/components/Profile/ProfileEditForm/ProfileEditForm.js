import React from 'react';
import {Field, Formik, Form} from 'formik';
import { TextField, Button } from "@material-ui/core";
import {emailValidate} from "../../../utils/helpers";

const ProfileEditForm = (props) => {

    const handleErrors = (values) => {
        const errors = {};

        if (props.purpose === 'email') {
            if (!values.email) errors.email = 'Email address is required';

            if (emailValidate(values.email)) errors.email = 'Invalid email address';
        }

        if (props.purpose === 'password') {
            if (!values.currentPassword) errors.currentPassword = 'Field has to has value';
            if (!values.newPassword) errors.newPassword = 'Field has to have value';
            if (!values.confirmNewPassword) errors.confirmNewPassword = 'Field has to have value';
        }

        return errors;
    };

    const handleInitialValues = (purpose) => {
        if (purpose === 'email'){
            return {
                email: props.value
            }
        }

        if (purpose === 'password') {
            return {
                currentPassword: '',
                newPassword: '',
                confirmNewPassword: ''
            }
        }
    };

    return (
        <Formik
            initialValues={handleInitialValues(props.purpose)}
            onSubmit={(values) => {
                props.handleSubmit(props.purpose, values);
            }}
            validate={values => handleErrors(values)}
        >
            {formProps => {
                const {errors, touched, values} = formProps;
                return (
                    <Form className='profile-form'>
                        {
                            props.purpose === 'email' ? (
                                <div className='profile-form-input'>
                                    <Field type="text"
                                           error={touched.email && !!errors.email}
                                           value={values.email}
                                           name='email'
                                           as={TextField}
                                           helperText={errors.email}
                                    />
                                </div>
                            ) : null
                        }
                        {
                            props.purpose === 'password' ? (
                                <div>
                                    <div className='profile-form-input'>
                                        <Field type="password"
                                               error={touched.currentPassword && !!errors.currentPassword}
                                               value={values.currentPassword}
                                               name='currentPassword'
                                               as={TextField}
                                               label='Current Password'
                                        />
                                    </div>
                                    <div className='profile-form-input'>
                                        <Field type="password"
                                               error={touched.newPassword && !!errors.newPassword}
                                               value={values.newPassword}
                                               name='newPassword'
                                               as={TextField}
                                               label='New Password'
                                        />
                                    </div>
                                    <div className='profile-form-input'>
                                        <Field type="password"
                                               error={touched.confirmNewPassword && !!errors.confirmNewPassword}
                                               value={values.confirmNewPassword}
                                               name='confirmNewPassword'
                                               as={TextField}
                                               label='Repeat New Password'
                                        />
                                    </div>
                                </div>
                            ) : null
                        }
                        <div className='profile-form-actions'>
                            <Button onClick={() => props.handleCancel(props.purpose)}>Cancel</Button>
                            <Button type="submit" color='primary' variant="contained">Save</Button>
                        </div>
                    </Form>
                )
            }}
        </Formik>
    );
};

export default ProfileEditForm;
