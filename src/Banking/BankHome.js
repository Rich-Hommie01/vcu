import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../HomePage/Navbar'
import './BankHome.scss'
import image from '../img/fraud.jpg'
import img from '../img/investment.jpg'
import pic from '../img/score.png'
import ncua from '../img/ncua.png'
import externalacc from '../img/Capture.PNG'
import { GiChart } from "react-icons/gi"
import { TbReportMoney } from "react-icons/tb"
import { MdManageHistory } from "react-icons/md"
import { FaMoneyBillTransfer } from "react-icons/fa6"

const BankHome = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Extract name and lastLogin from location.state if available
  const { name: locationName, lastLogin: locationLastLogin } = location.state || {};

  // State to hold user information
  const [user, setUser] = useState({
    name: locationName || "",
    lastLogin: locationLastLogin || "",
  });

  useEffect(() => {
    // Check if user data is missing and retrieve from localStorage
    if (!user.name || !user.lastLogin) {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (storedUser) {
        setUser({
          name: storedUser.name,
          lastLogin: storedUser.lastLogin,
        });
      } else {
        // If no user data is available, redirect to login
        navigate("/login");
      }
    }
  }, [user, navigate]);

  return (
    <>
      <header><Navbar className={BankHome} /></header>
      <h1 className='h1'>Home</h1>
      <div className='account'>
        <button className='accountText'>Accounts</button>
        <button className='accountText'>Bill Pay</button>
        <button className='accountText'>Tools & Investing</button>
        <button className='accountText'>Rewards & Deals</button>
        <button className='accountText'>Security Center</button>
        <button className='accountText'>Open an Account</button>
      </div>
      <div className='userUpdate'>
      <h3 className='welcome'>Welcome, {user.name}!</h3>
      <p className='lastlog'>Last login: {new Date(user.lastLogin).toLocaleString()}</p>
    </div>

    <div className='accBal'>
      <div className='Bal'>
        <h2 className='Acc'>Bank Accounts <span className='transfer'>Transfer <FaMoneyBillTransfer /></span></h2>
        <p className='BalAcc'  onClick={() => navigate('/bankSummary1')}>MYCHOICE PREMIUM CHECKING (5334)</p>
        <div className='premiumcheck'  onClick={() => navigate('/bankSummary1')}>
        <p className='Balc'>Available ........................................................ **$765,900.94</p>
        <p className='Balc'>Current ............................................................. $765,900.94</p>
        </div>
        <div className='premiumcheckmobile'  onClick={() => navigate('/bankSummary1')}>
        <p className='Balc'>Available ........................................ **$765,900.94</p>
        <p className='Balc'>Current ............................................. $765,900.94</p>
        </div>
        <div className='premiumcheckSmallmobile'  onClick={() => navigate('/bankSummary1')}>
        <p className='Balc'>Available ............................. **$765,900.94</p>
        <p className='Balc'>Current ................................. $765,900.94</p>
        </div>
        <p className='BalAcc'  onClick={() => navigate('/bankSummary2')}>REGULAR SHARE SAVINGS (2543)</p>
        <div className='premiumcheck'  onClick={() => navigate('/bankSummary2')}>
        <p className='Balc'>Available ................................................................... **$0.00</p>
        <p className='Balc'>Current ........................................................................ $0.00</p>
        </div>
        <div className='premiumcheckmobile'  onClick={() => navigate('/bankSummary2')}>
        <p className='Balc'>Available ................................................... **$0.00</p>
        <p className='Balc'>Current ........................................................ $0.00</p>
        </div>
        <div className='premiumcheckSmallmobile'  onClick={() => navigate('/bankSummary2')}>
        <p className='Balc'>Available ................................... **$0.00</p>
        <p className='Balc'>Current ........................................ $0.00</p>
        </div>
        <h2 className='BalTo'>BALANCE TOTALS</h2>
        <p className='totaldepo'>Total Deposit Accounts ................................. $765,900.94</p>
        <p className='totaldepomobile'>Total Deposit Accounts .................... $765,900.94</p>
        <p className='totaldepoSmallmobile'>Total Deposit Accounts ............ $765,900.94</p>
        <p className='BalAc'>**This balance may include overdraft or line of credit funds.</p>
      </div>
      <div className='billPayment'>
        <div className='paybills'>
        <h2 className='paymentbill'>Bill Payment</h2>
        <p className='paymenttext'>Make paying bills fast and easy</p>
        <p className='paymenttext'>Pay your bills on one screen in seconds.</p>
        <button className='signpay'>Signup for payments</button>
        </div>
        <div className='toolbox'>
          <h2 className='ontool'>Online Toolbox</h2>
          <p className='ontext'>Buy Foreign Currency</p>
          <p className='ontext'>Stop Payment</p>
          <p className='ontext'>Redeem My Cash Back</p>
          <p className='ontext'>View Rates</p>
          <p className='ontext'>Wire Transfer</p>
        </div>
      </div>
      <>
      <img className='fraud' src={image} alt="fraud" style={{ width: '18em', marginTop: '30px', marginLeft: '60px', paddingRight: '60px', height: '50vh', border: 'rgba(185, 173, 149, 0.459)'}}  />
      </>
      <div className='creditfiscoscore'>
        <h3 className='creditsco'>Credit Score</h3>
        <img className='fiscorepic' src={pic} alt='score' style={{ width: '29em', height: '50vh'}} />
        <div className='fisco'>
        <p className='fiscoscore'>Score <GiChart /></p>
        <p className='fiscoscore'>Report <TbReportMoney /></p>
        <p className='fiscoscore'>Monitoring <MdManageHistory /></p>
        <p className='fiscoscore'>Savings <FaMoneyBillTransfer /></p>
        </div>
        <p className='tracking'>Start tracking your credit score and full credit report!</p>
        <button className='shoscore'>Show my Score</button>
      </div>
      <div className='externalacclink'>
        <p className='linkExternal'>Link External Accounts</p>
        <p className='linkExternal'>(Account Aggregation)</p>
        <img className='exacc' src={externalacc} alt='externalAccount' style={{ width: '23em', height: '20vh'}} />
        <button className='getstartb'>Get Started</button>
      </div>
    </div>

    <section className='fdic'>
        <h3 className='vfcuinvest'>Investment Accounts from VFCU Securities, Inc.<span>Not FDIC Insured*</span></h3>
        <div className='invest'>
          <img src={img} alt='invest' style={{ width: '100px', height: '100px', paddingRight: '10px'}} />
          <div>
          <p className='smallwin'>Small wins add up.</p>
          <p className='smallwin'>Start investment towards your future.</p>
          <p className='smallwin'>Low-cost, automated investing to help you reach your financial goals - SpeciFi Save & Grow™</p>
          <button className='smallwinbtn'>Learn More</button>
          </div>
        </div>
      </section>

      <footer className='footncua'>
        <div className='footncuawrap'>
        <p className='foottextnc'>Your savings federally insured to at least $250,000 and backed by the full faith and credit of the United States Government National Credit Union Administration, a U.S. Government Agency</p>
        <img className='ncuapic' src={ncua} alt='ncua' style={{ width: '7em', height: '6vh', paddingRight: '10px'}} /> 
        </div>
      </footer>
    </>
  )
}

export default BankHome