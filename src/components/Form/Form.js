import React from 'react';
import errorIcon from '../../images/icon-error.svg';

import './Form.css';

const Form = () => {
  return (
    <form className='signup__form'>
      <div className='signup__form-input-wrapper'>
        <input
          type='text'
          className='signup__form-input'
          placeholder='First Name'
        />
        <img src={errorIcon} alt='error' className='signup__error-icon' />
      </div>
      <p className='signup__error'>First Name cannot be empty</p>
      <div className='signup__form-input-wrapper'>
        <input
          type='text'
          className='signup__form-input'
          placeholder='Last Name'
        />
        <img src={errorIcon} alt='error' className='signup__error-icon' />
      </div>
      <p className='signup__error'>First Name cannot be empty</p>
      <div className='signup__form-input-wrapper'>
        <input
          type='email'
          className='signup__form-input'
          placeholder='Email Address'
        />
        <img src={errorIcon} alt='error' className='signup__error-icon' />
      </div>
      <p className='signup__error'>First Name cannot be empty</p>
      <div className='signup__form-input-wrapper'>
        <input
          type='password'
          className='signup__form-input'
          placeholder='Password'
        />
        <img src={errorIcon} alt='error' className='signup__error-icon' />
      </div>
      <p className='signup__error'>First Name cannot be empty</p>
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
