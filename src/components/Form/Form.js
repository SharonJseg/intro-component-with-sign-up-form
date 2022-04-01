import React from 'react';
import { useFormik } from 'formik';
import errorIcon from '../../images/icon-error.svg';

import './Form.css';

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'First Name cannot be empty';
  } else if (values.firstName.length < 3) {
    errors.firstName = 'First Name must be at least 3 characters long';
  }

  if (!values.lastName) {
    errors.lastName = 'Last Name cannot be empty';
  } else if (values.lastName.length < 3) {
    errors.lastName = 'Last Name must be at least 3 characters long';
  }

  if (!values.email) {
    errors.email = 'Email cannot be empty';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Looks like this is not an email';
  }

  if (!values.password) {
    errors.password = 'Password cannot be empty';
  } else if (values.password.length < 3) {
    errors.password = 'Password must be at least 3 characters long';
  }

  return errors;
};

const onSubmitHandler = (values) => {
  console.log('form values:', values);
};

const Form = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    validate,
    onSubmit: (values) => {
      onSubmitHandler(values);
      formik.handleReset();
    },
  });

  return (
    <form className='signup__form' onSubmit={formik.handleSubmit}>
      <div className='signup__form-input-wrapper'>
        <input
          id='firstName'
          name='firstName'
          type='text'
          className={
            !formik.errors.firstName
              ? 'signup__form-input'
              : 'signup__form-input signup__form-input_error'
          }
          placeholder='First Name'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />

        {formik.errors.firstName && formik.touched.firstName ? (
          <img src={errorIcon} alt='error' className='signup__error-icon' />
        ) : null}
        {formik.errors.firstName && formik.touched.firstName ? (
          <p className='signup__error'>{formik.errors.firstName}</p>
        ) : null}
      </div>
      <div className='signup__form-input-wrapper'>
        <input
          id='lastName'
          name='lastName'
          type='text'
          className={
            !formik.errors.lastName
              ? 'signup__form-input'
              : 'signup__form-input signup__form-input_error'
          }
          placeholder='Last Name'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />

        {formik.errors.lastName && formik.touched.lastName ? (
          <img src={errorIcon} alt='error' className='signup__error-icon' />
        ) : null}
        {formik.errors.lastName && formik.touched.lastName ? (
          <p className='signup__error'>{formik.errors.lastName}</p>
        ) : null}
      </div>
      <div className='signup__form-input-wrapper'>
        <input
          id='email'
          name='email'
          type='email'
          className={
            !formik.errors.email
              ? 'signup__form-input'
              : 'signup__form-input signup__form-input_error'
          }
          placeholder='Email Address'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.errors.email && formik.touched.email ? (
          <img src={errorIcon} alt='error' className='signup__error-icon' />
        ) : null}
        {formik.errors.email && formik.touched.email ? (
          <p className='signup__error'>{formik.errors.email}</p>
        ) : null}
      </div>
      <div className='signup__form-input-wrapper'>
        <input
          id='password'
          name='password'
          type='password'
          autoComplete='none'
          className={
            !formik.errors.password
              ? 'signup__form-input'
              : 'signup__form-input signup__form-input_error'
          }
          placeholder='Password'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.errors.password && formik.touched.password ? (
          <img src={errorIcon} alt='error' className='signup__error-icon' />
        ) : null}
        {formik.errors.password && formik.touched.password ? (
          <p className='signup__error'>{formik.errors.password}</p>
        ) : null}
      </div>
      <button type='submit' className='signup__form-submit'>
        CLAIM YOUR FREE TRIAL
      </button>
      <p className='signup__terms'>
        By clicking the button, you are agreeing to our{' '}
        <a href='#' className='signup__terms-link'>
          Terms and Services
        </a>
      </p>
    </form>
  );
};

export default Form;
