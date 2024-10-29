import React, { useState } from 'react';
import vfcu from '../img/vculogo.png';
import { CheckingSavingsContent, LoansCreditCardsContent, ToolsResourcesContent, SeasonsYouContent } from './HiddenContent';
import './Main.scss';
import { useNavigate } from 'react-router-dom';

const Nav = ({ className }) => {
  const [activeItem, setActiveItem] = useState(null);

  const navigate = useNavigate();

  const toggleItem = (item) => {
    setActiveItem((prevItem) => (prevItem === item ? null : item));
  };

  const renderContent = () => {
    switch (activeItem) {
      case 'checkingSavings':
        return <CheckingSavingsContent />;
      case 'loansCredit':
        return <LoansCreditCardsContent />;
      case 'toolsResources':
        return <ToolsResourcesContent />;
      case 'seasonsYou':
        return <SeasonsYouContent />;
      default:
        return null;
    }
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className='headContainer'>
      <div className='vcuContainer'>
        <img
          src={vfcu}
          alt="vfcu"
          onClick={() => handleNavigation("/")}
          style={{ width: "180px", height: "auto", borderRadius: '5px' }}
        />

        {className !== 'registerNav' && className !== 'loginNav' && (
          <>
            <ul className={`NavContainer ${className}`}>
              <li onClick={() => toggleItem('checkingSavings')}>
                Checking & Savings
              </li>
              <li onClick={() => toggleItem('loansCredit')}>
                Loans & Credit Cards
              </li>
              <li onClick={() => toggleItem('toolsResources')}>
                Tools & Resources
              </li>
              <li onClick={() => toggleItem('seasonsYou')}>
                Seasons & You
              </li>
              <button type="button" className="Btn" onClick={() => handleNavigation("/login")}>Login</button>
              <button type="button" className="Btn" onClick={() => handleNavigation("/register")}>Become a Member</button>
            </ul>
            <div className='mobileLogin'>
              <button type="button" className="Btn" onClick={() => handleNavigation("/login")}>Login</button>
            </div>
          </>
        )}

      </div>

      {className !== 'registerNav' && className !== 'loginNav' && (
        <div className="content-container">
          {renderContent()}
        </div>
      )}
    </div>
  );
};

export default Nav;
