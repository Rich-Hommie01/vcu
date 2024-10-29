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
      throw new Error(data.message || "Failed to update balance");
    }
  } catch (error) {
    throw error;
  }
};

const Banksummary1 = ({ userId, handleBack, balance: initialBalance, accountNumber }) => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [balance, setBalance] = useState(initialBalance);
  const [error, setError] = useState(null);
  const [updatingBalance, setUpdatingBalance] = useState(false);
  const [view, setView] = useState('transactions');

  const formattedBalance = new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(balance);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTransactions(userId, 'checking');
        setTransactions(data);
      } catch (error) {
        setError('Error fetching transactions');
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchData();
    } else {
      setLoading(false);
    }
  }, [userId]);

  const handleTransaction = async (amount) => {
    setUpdatingBalance(true);
    try {
      const updatedBalance = await updateBalance(userId, amount, 'checking');
      setBalance(updatedBalance);
    } catch (error) {
      setError(error.message);
    } finally {
      setUpdatingBalance(false);
    }
  };

  return (
    <div>
      <p onClick={handleBack} style={{ cursor: "pointer", paddingBottom: "40px" }}>
        <IoIosArrowRoundBack /> Back
      </p>
      <h3 className='availableBalance'>MyChoice Premium Checking: </h3>
      <p className='availableBalance'>Available Balance: ${formattedBalance}</p>
      <div style={{ display: "none" }}>
        <button className='Btn' onClick={() => handleTransaction(100)} disabled={updatingBalance}>
          {updatingBalance ? "Updating..." : "Deposit $100"}
        </button>
        <button className='Btn' onClick={() => handleTransaction(-50)} disabled={updatingBalance}>
          {updatingBalance ? "Updating..." : "Withdraw $50"}
        </button>
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
            {loading ? (
              <p>Loading transactions...</p>
            ) : error ? (
              <p style={{ color: "red" }}>{error}</p>
            ) : transactions.length > 0 ? (
              <div>
                <div className='DDA'>
                  <p>Date <IoMdArrowDropdown /></p>
                  <p>Description <IoMdArrowDropdown /></p>
                  <p>Amount <IoMdArrowDropdown /></p>
                </div>
                {transactions.map((transaction) => (
                  <div key={transaction._id}>
                    <p className='transactionHistory'>
                      <span>{new Date(transaction.date).toLocaleDateString()}</span>
                      <span>${transaction.amount.toFixed(2)}</span>
                    </p>
                    <p className='transactionDescription'>{transaction.description}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p>No transactions available.</p>
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

export default Banksummary1;
