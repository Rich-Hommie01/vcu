import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar  from '../HomePage/Navbar'
import './BankSummary1.scss'
import { IoArrowBackCircleOutline, IoChevronForward } from "react-icons/io5"
import { CiSearch } from "react-icons/ci"
import { SiCoderwall } from "react-icons/si"
import { RiQuestionFill } from "react-icons/ri"

const BankSummary1 = () => {
  const navigate = useNavigate();
  return (
    <div >
      <Navbar className="accountHistory" />
      <div className='account'>
        <button>Accounts</button>
        <button>Bill Pay</button>
        <button>Tools & Investing</button>
        <button>Rewards & Deals</button>
        <button>Security Center</button>
        <button>Open an Account</button>
      </div>
        <div className='check5334'>
          <div>
            <p className='check5334text'>MyChoice Premium Checking</p>
            <p className='check5334text'>x5334</p>
            <p className='check5334text backBanksum' onClick={() => navigate('/bankHome')}> <IoArrowBackCircleOutline /> Return to Account Summary</p>
          </div>
            <p className='check5334text'>Available Balance: <span>$765,900.94</span></p>
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
          <p className='alltransaction'>Transactions <span>All <SiCoderwall /></span></p>
          <div className="input-container">
            <CiSearch className="search-icon" />
            <input type="text" placeholder="Search" className="search-input" />
          </div>
        <div className='borderpx'>
        <h2 className='borderpx penpost'>PENDING <RiQuestionFill /> </h2>
        <p className='borderpx nopendtext'>No pending transaction.</p>
        </div>
        <div className='borderpx'>
          <h2 className='borderpx penpost'>POSTED</h2>
          <p className='transactDetail borderpx'>jul 26 <span>$765,900.94</span></p>
          <p className='borderpx histext'>Online scheduled transfer from CHK 4924 Confirmation# xxxxx90304</p>
          <p className='transactDetail borderpx'>jul 01 <span>$400</span></p>
          <p className='borderpx histext'>Deposit</p>
        </div>
        </div>
        </div>
    </div>
  )
}

export default BankSummary1