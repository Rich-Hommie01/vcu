import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../HomePage/Navbar';
import './BankSummary1.scss';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import { CiSearch } from 'react-icons/ci';
import { SiCoderwall } from 'react-icons/si';
import { RiQuestionFill } from 'react-icons/ri';

// Function to fetch transactions from the backend
const fetchTransactions = async (userId) => {
  try {
    const response = await fetch(`https://backend-av3s.onrender.com/api/auth/transactions/${userId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch transactions');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

const BankSummary1 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { balance, userId } = location.state || { balance: 0, userId: null };

  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  // Format balance to include commas and two decimal places
  const formattedBalance = new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(balance);

  // Fetch transactions when the component mounts
  useEffect(() => {
    if (userId) {
      fetchTransactions(userId)
        .then((data) => {
          setTransactions(data); // Set fetched transactions to state
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error in fetching transactions:', error);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [userId]);

  // Filter transactions based on search term
  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bank-summary1-container">
      <Navbar className="accountHistory" />

      <div className="account">
        <button className="accountBtn">Accounts</button>
        <button className="accountBtn">Bill Pay</button>
        <button className="accountBtn">Tools & Investing</button>
        <button className="accountBtn">Rewards & Deals</button>
        <button className="accountBtn">Security Center</button>
        <button className="accountBtn">Open an Account</button>
      </div>

      <div className="account-details">
        <p className="account-name">
          MyChoice Premium Checking <span className="account-span">x5334</span>
        </p>
        <p className="available-balance">
          Available Balance: <span>${formattedBalance}</span>
        </p>
      </div>
      
      <div className="transaction-header">
            <p className="return-link" onClick={() => navigate('/bankHome')}>
              <IoArrowBackCircleOutline /> Return to Account Summary
            </p>
          </div>
          
      <div className="transaction-history">
        <div className="accountHistorySum">
          <div className="transaction-description">
            <p className="transText">
            Your available balance is equal to the amount of the current balance, plus or minus any pending transactions, and is available for your immediate use. Some items, such as checks, may not be available immediately upon deposit and will not be included in the available balance calculation. Your available balance does not include checks that you may have written that have not been presented to the bank.
            </p>
          </div>
        </div>

        <div className="transactions-filter">
          <p className="filter-text">
            Transactions <span>All <SiCoderwall /></span>
          </p>
          <div className="search-container">
            <CiSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search"
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Loading State */}
        {loading ? (
          <p className="loading-text">Loading transactions...</p>
        ) : (
          <>
            {/* Pending Transactions */}
            <div className="transactions-section">
              <h2 className="section-title">
                PENDING <RiQuestionFill />
              </h2>
              <p className="no-pending-text">No pending transactions.</p>
            </div>

            {/* Posted Transactions */}
            <div className="transactions-section">
              <h2 className="section-title">POSTED</h2>
              {filteredTransactions.length === 0 ? (
                <p className="no-transactions-text">No transactions found.</p>
              ) : (
                filteredTransactions.map((transaction) => {
                  // Format the transaction amount with commas and two decimal places
                  const formattedTransactionAmount = new Intl.NumberFormat('en-US', {
                    style: 'decimal',
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }).format(transaction.amount);

                  return (
                    <div key={transaction._id} className="transaction-item">
                      <p className="transaction-date">
                        {new Date(transaction.date).toLocaleDateString()}{' '}
                        <span className="transaction-amount">${formattedTransactionAmount}</span>
                      </p>
                      <p className="transaction-history-text">{transaction.description}</p>
                    </div>
                  );
                })
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BankSummary1;
