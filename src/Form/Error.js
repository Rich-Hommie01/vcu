import React from 'react';
import { useNavigate } from 'react-router-dom';
import flag from '../img/flag.svg';

const Error = () => {
  const navigate = useNavigate(); 

  const handleBackToHome = () => {
    navigate('/'); 
  };

  return (
    <div className="success-container">
      <img className='successFlag' src={flag} alt="flag" />
      <h2 className='successH2'>It looks like this isn't working right now.</h2>
      <p  className='successText'>We may need additional verification to process your application. To return to VCU.com, please choose "Close."</p>
      <p className='successText'>Thanks for your patience.</p>
      <button  className='Btn'onClick={handleBackToHome}>Close</button>
    </div>
  );
};

export default Error;
