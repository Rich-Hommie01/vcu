import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar  from '../HomePage/Navbar'
import './BankSummary1.scss'
import { IoArrowBackCircleOutline, IoChevronForward } from "react-icons/io5"
import { CiSearch } from "react-icons/ci"
import { SiCoderwall } from "react-icons/si"
import { RiQuestionFill } from "react-icons/ri"

const BankSummary2 = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar className="accountHistory" />
      <div className='account-navigation'>
        <button className="accountBtn">Accounts</button>
        <button className="accountBtn">Bill Pay</button>
        <button className="accountBtn">Tools & Investing</button>
        <button className="accountBtn">Rewards & Deals</button>
        <button className="accountBtn">Security Center</button>
        <button className="accountBtn">Open an Account</button>
      </div>
        <div className='check5334'>
          <div className='account-details'>
            <p className='account-name'>Regular Share Savings<span className="account-span">x2543</span></p>
            <p className='account-name'>Available Balance: <span>$0.00</span></p>
          </div>
            <p className='return-link' onClick={() => navigate('/bankHome')}> <IoArrowBackCircleOutline /> Return to Account Summary</p>
        </div>
        <div className='accountHistorySum'>
          <div className='navsumacc'>
          <p className='navsumaccText'>Transaction History <IoChevronForward /> </p>
          <p className='navsumaccText'>Routing Details <IoChevronForward /> </p>
          <p className='navsumaccText'>Statements <IoChevronForward /> </p>
          <p className='navsumaccText'>Tax Documents <IoChevronForward /> </p>
          <p className='navsumaccText'>Alerts <IoChevronForward /> </p>
          <p className='navsumaccText'>View Another Account <IoChevronForward /> </p>
          <h2 className='navsumaccText'>I Would Like To:</h2>
          <p className='navsumaccText'>Quick Transfer From</p>
          <p className='navsumaccText'>Quick Transfer To</p>
          <p className='navsumaccText'>Pay A Bill</p>
          <p className='navsumaccText'>Edit Preferences</p>
          <p className='navsumaccText'>Send A Message</p>
          <p className='navsumaccText'>Download Transactions</p>
          </div>
        <div className='transhissum'>
          <p className='transText'>Your available balance is equal to the amount of the current balance, plus or minus any pending transactions, and is available for your immediate use. Some items, such as checks, may not be available immediately upon deposit and will not be included in the available balance calculation. Your available balance does not include checks that you may have written that have not been presented to the bank.</p>
          <p className='filter-text'>Transactions <span>All <SiCoderwall /></span></p>
          <div className="input-container">
            <CiSearch className="search-icon" />
            <input type="text" placeholder="Search" className="search-input" />
          </div>
        <div className='transactions-section'>
        <h2 className='section-title'>PENDING <RiQuestionFill /> </h2>
        <p className='no-pending-text'>No pending transaction.</p>
        </div>
        <div className='transactions-section'>
          <h2 className='section-title'>POSTED</h2>
          <p className='borderpx histext' style={{display: 'flex', justifyContent: 'center'}}>No recent transaction.</p>
        </div>
        </div>
        </div>
    </div>
  )
}

export default BankSummary2