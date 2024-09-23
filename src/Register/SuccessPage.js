import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SuccessPage.scss';
import flag from '../img/flag.svg';

const SuccessPage = () => {
  const navigate = useNavigate(); // useNavigate hook inside the function

  const handleBackToHome = () => {
    navigate('/'); // Navigate to the homepage
  };

  return (
    <div className="success-container">
      <img className='successFlag' src={flag} alt="flag" />
      <h2 className='successH2'>It looks like this isn't working right now.</h2>
      <p  className='successText'>We may need additional verification to process your application. To return to VFCU.com, please choose "Close."</p>
      <p className='successText'>Thanks for your patience.</p>
      <button  className='successBtn'onClick={handleBackToHome}>Go to Homepage</button>
    </div>
  );
};

export default SuccessPage;
