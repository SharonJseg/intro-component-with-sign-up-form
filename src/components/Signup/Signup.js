import React from 'react';
import './Signup.css';
import bgimage from '../../images/bg-intro-desktop.png';
import bgMobileimage from '../../images/bg-intro-mobile.png';
import Form from '../Form/Form';

const Signup = () => {
  return (
    <section className='signup'>
      <div className='signup__wrapper'>
        <h1 className='signup__title'>Learn to code by watching others</h1>
        <p className='signup__subtitle'>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
      <div className='signup__form-warpper'>
        <p className='signup__banner'>
          <span className='signup__banner_bold'>Try it free 7 days </span>
          then $20/mo. thereafter
        </p>
        <Form />
      </div>
      <img src={bgimage} alt='background' className='signup__background' />
      <img
        src={bgMobileimage}
        alt='background'
        className='signup__background_mobile'
      />
    </section>
  );
};

export default Signup;
