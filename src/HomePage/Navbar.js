import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CheckingSavingsContent, LoansCreditCardsContent, ToolsResourcesContent, SeasonsYouContent } from './HiddenContent';
import vfcu from '../img/vfcu.svg';
import vfcuLogo from '../img/bank.svg';
import { useAuth } from '../auth/AuthProvider'

const Navbar = ({ className }) => {
  const [activeItem, setActiveItem] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleClick = (e) => {
    if (e.target.closest('button')) {
      e.preventDefault();
      navigate('/register');
      return;
    }

    if (e.target.closest('a')) {
      return;
    }

    navigate('/');
  };

  const toggleItem = (item) => {
    setActiveItem(activeItem === item ? null : item);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    // Call the logout function from AuthProvider
    logout();
    // Redirect to login after logging out
    navigate('/login');
  };

  return (
    <>
      <header className={`headerContainer ${className}`}>
        <div className={`vfcuContainer ${className}`} onClick={handleClick}>
          <img className={`vfcuLogo ${className}`} src={vfcuLogo} alt="VFCU Logo" />
          <img src={vfcu} alt="vfcu" />
        </div>
        <nav className={`navContainer ${menuOpen ? 'open' : ''}`}>
        <button className={`navToggle ${className}`} onClick={toggleMenu}>
          </button>
          <ul className={`ulhead ${className}`}>
            <li onClick={() => toggleItem('checkingSavings')}>
              Checking & Savings
            </li>
            <li onClick={() => toggleItem('loansCreditCards')}>
              Loans & Credit Cards
            </li>
            <li onClick={() => toggleItem('toolsResources')}>
              Tools & Resources
            </li>
            <li onClick={() => toggleItem('seasonsYou')}>
              Seasons & You
            </li>
            <button type="button" className="btn btn-secondary register" onClick={handleClick}>Become a Member</button>
          </ul>
        </nav>
        <div className={`bankview ${className}`}>
          <p className={`notification ${className}`}>Notifications</p>
          <span className={`notification ${className}`}> | </span>
          <p className={`notification ${className}`}>My Settings</p>
          <span className={`notification ${className}`}> | </span>
          <p className={`notification ${className}`}>Help</p>
          <span className={`notification ${className}`}> | </span>
          <p className={`notification ${className}`}>Support</p>
          <button className={`logout ${className}`} onClick={handleLogout}>Log Out</button>
        </div>
      </header>

      <div className="contentContainer">
        {activeItem === 'checkingSavings' && <CheckingSavingsContent />}
        {activeItem === 'loansCreditCards' && <LoansCreditCardsContent />}
        {activeItem === 'toolsResources' && <ToolsResourcesContent />}
        {activeItem === 'seasonsYou' && <SeasonsYouContent />}
      </div>
    </>
  );
};

export default Navbar;
