import React from 'react'
import vcubalance from '../img/vcubalance.webp'
import memberperks from '../img/memberperks.jpg'
import digitalbank from '../img/digitalbank.jpg'
import surchgfree from '../img/surchgfree.jpg'
import { useNavigate } from 'react-router-dom'

const Homepage = () => {

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="HomePageContainer">
      <div className="HomeContainer">
        <div className="TopHomeContainer">
          <h2 className="TopHomeH2">Welcome to Valyx Credit Union</h2>
          <p>A better way of banking with a Credit Union that is immersed in the community, featuring the latest in
            technology, innovative products and services, and easy access to all of your accounts.</p>
          <p>The Safest Plan is Often the Smartest One</p>
          <button type="button" className="Btn" onClick={() => handleNavigation("/register")}>Become a Member</button>
        </div>
        <img src={vcubalance} alt='vcubalance' style={{ width: "500px", height: "auto" }} />
      </div>
      <div className='middleContainer'>
        <h1>It’s an easy choice</h1>
        <p>We can help you get a clear picture of where you are today and help you plan for the future you want.</p>
      </div>

      <div className='downContainer'>
        <div class="overlay"></div>
        <div className='downtext'>
          <h1 class="heading">Making Good Happen</h1>
          <p class="description">Make today the day you take the next step toward your financial goals.</p>
          <p class="description">Enjoy cash back benefits that are absolutely clear.</p>
          <p class="description">Earn 1% cash back on debit!</p>
          <button className='Btn'>Learn More</button>
        </div>
      </div>

      <div className='centerContainer'>
        <div className='centerInnerContainer'>
          <img src={memberperks} alt='memberperks' style={{ width: "260", height: "auto" }} />
          <h2 className='centerH2Container'>Membership Perks</h2>
          <p className='centerInnerTextr'>At Valyx, we want you to meet your financial goals. There’s no fee to join and your membership includes a savings account with $1 deposited to get you started.</p>
          <button className='Btn'>Learn More</button>
        </div>
        <div className='centerInnerContainer'>
          <img src={digitalbank} alt='digitalbank' style={{ width: "260", height: "auto" }} />
          <h2 className='centerH2Container'>Digital Bankings</h2>
          <p className='centerInnerTextr'>Ease. Convenience. Anytime. Anywhere. Learn more about how our digital banking tools can help you manage your accounts conveniently.</p>
          <button className='Btn'>Learn More</button>
        </div>
        <div className='centerInnerContainer'>
          <img src={surchgfree} alt='surchgfree' style={{ width: "260", height: "auto" }} />
          <h2 className='centerH2Container'>Surcharge-Free ATMs</h2>
          <p className='centerInnerTextr'>Boundless access to ATMs. Surcharge-free access to over 30,000 ATMs nationwide within the CO-OP Network assuring your cash is always within reach.</p>
          <button className='Btn'>ATM Locations</button>
        </div>
      </div>
    </div>
  )
}

export default Homepage