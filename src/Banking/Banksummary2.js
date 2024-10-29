import React, { useEffect, useState } from 'react';
import './Banksummary.scss';
import { IoIosArrowRoundBack, IoMdArrowDropdown } from "react-icons/io";
import { IoFunnelOutline } from "react-icons/io5";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { GrDownload } from "react-icons/gr";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdToggleOn } from "react-icons/md";
import { BsPencil } from "react-icons/bs";

const fetchTransactions = async (userId, accountType) => {
  try {
    const response = await fetch(`https://backend-av3s.onrender.com/api/auth/transactions/${userId}?accountType=${accountType}`);
    if (!response.ok) {
      throw new Error('Failed to fetch transactions');
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

const updateBalance = async (userId, amount, accountType) => {
  try {
    const response = await fetch("https://backend-av3s.onrender.com/api/auth/balance", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, amount, accountType }),
    });
    const data = await response.json();
    if (data.success) {
      return data.balance;
    } else {
      console.error("Failed to update balance:", data.message);
    }
  } catch (error) {
    console.error("Error updating balance:", error);
  }
};

const Banksummary2 = ({ userId, handleBack, balance, accountNumber }) => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentBalance, setCurrentBalance] = useState(balance || 0);
  const [error, setError] = useState(null);
  const [view, setView] = useState('transactions');

  const formattedBalance = new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(currentBalance);

  useEffect(() => {
    const fetchData = async () => {
      if (userId) {
        try {
          const transactionsData = await fetchTransactions(userId, 'savings');
          setTransactions(transactionsData);
        } catch (error) {
          setError('Error fetching transactions');
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };
    fetchData();
  }, [userId]);

  const handleTransaction = async (amount) => {
    try {
      const newBalance = await updateBalance(userId, amount, 'savings');
      if (newBalance !== undefined) {
        setCurrentBalance(newBalance);
      }
    } catch (error) {
      console.error("Error handling transaction:", error);
    }
  };

  return (
    <div>
      <p onClick={handleBack} style={{ cursor: "pointer", paddingBottom: "40px" }}>
        <IoIosArrowRoundBack /> Back
      </p>
      <h3 className='availableBalance'>Regular Share Savings: </h3>
      <p className='availableBalance'>Available Balance: ${formattedBalance}</p>
      <div style={{ display: "none" }}>
        <button className='Btn' onClick={() => handleTransaction(100)}>Deposit $100</button>
        <button className='Btn' onClick={() => handleTransaction(-50)}>Withdraw $50</button>
      </div>
      <div>
        <div className='TransactionsDetails'>
          <p
            onClick={() => setView('transactions')}
            style={{ cursor: "pointer", fontWeight: view === 'transactions' ? 'bold' : 'normal' }}
          >
            Transactions
          </p>
          <p
            onClick={() => setView('details')}
            style={{ cursor: "pointer", fontWeight: view === 'details' ? 'bold' : 'normal' }}
          >
            Details & Settings
          </p>
        </div>

        {view === 'transactions' ? (
          <>
            <div className='searchContainer'>
              <p>
                <span><IoFunnelOutline /></span>
                <span><FaMoneyBillTransfer /></span>
                <span><GrDownload /></span>
                <span><BsThreeDotsVertical /></span>
              </p>
              <input type='search' placeholder='Search' />
            </div>

            {loading && <p>Loading transactions...</p>}
            {error && <p>{error}</p>}
            {transactions.length > 0 ? (
              <div>
                <div className='DDA'>
                  <p>Date <IoMdArrowDropdown /></p>
                  <p>Description <IoMdArrowDropdown /></p>
                  <p>Amount <IoMdArrowDropdown /></p>
                </div>
                {transactions.map((transaction) => (
                  <React.Fragment key={transaction._id}>
                    <p className='transactionHistory'>
                      <span>{new Date(transaction.date).toLocaleDateString()}</span>
                      <span>${transaction.amount.toFixed(2)}</span>
                    </p>
                    <p className='transactionDescription'>{transaction.description}</p>
                  </React.Fragment>
                ))}
              </div>
            ) : (
              <p></p>
            )}
          </>
        ) : (
          <div className='detailsContainer'>
            <h4>DETAILS</h4>
            <p>Current Balance <span className='detailsTexts'>${formattedBalance}</span> </p>
            <p>Available Balance <span className='detailsTexts'>${formattedBalance}</span> </p>
            <p>Overdraft Privilege Limit <span className='detailsTexts'>$500,000.00</span> </p>
            <p>Dividend YTD <span className='detailsTexts'>$0.00</span> </p>
            <p>Dividend Prev Year <span className='detailsTexts'>$0.00</span> </p>
            <p>Account Number/Direct Deposit Number <span className='detailsTexts'>{accountNumber}</span> </p>
            <h4>SETTINGS</h4>
            <p className='settingsBoldText'>Online display Name</p>
            <p>MyChoice Premium Checking <BsPencil /></p>
            <p className='settingsBoldText'>Visibility on Home</p>
            <p>Control the Visibility of the account on the Home page <MdToggleOn /></p>
            <p className='settingsBoldText'>Visibility on Financial Tools</p>
            <p>Allow this account to show in your Budget, Spending, Networth, and Debt Tools. <MdToggleOn /></p>
            <h4>Text Banking</h4>
            <p>SMS/Text Enrollment <MdToggleOn /></p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Banksummary2;
