import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import vfcu from '../img/vculogo.png';
import './Bankhome.scss';
import Banksummary1 from './Banksummary1';
import Banksummary2 from './Banksummary2';
import fraud from '../img/fraud.jpg';
import "./ToggleSwitch.css";
import { IoHomeOutline, IoMenuOutline, IoChevronDownOutline } from "react-icons/io5";
import { SlEnvolopeLetter, SlCreditCard } from "react-icons/sl";
import { FcCellPhone } from "react-icons/fc";
import { CiSettings } from "react-icons/ci";
import { FiHelpCircle, } from "react-icons/fi";
import { IoIosLogOut } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa6";

const Bankhome = () => {
    const [user, setUser] = useState({ firstName: "", lastLogin: "", accounts: {}, balance: {} });
    const [subItemsVisibility, setSubItemsVisibility] = useState({});
    const [showSummary, setShowSummary] = useState(false);
    const [showSummary2, setShowSummary2] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1081);
    const [activeSection, setActiveSection] = useState(null);
    
    const [alerts, setAlerts] = useState({
        externalTransfer: false,
        computerRegistered: false,
        Registered: false,
        // add more alerts as needed
    });
    
    const handleAlertToggle = (alertKey) => {
        setAlerts(prev => ({
            ...prev,
            [alertKey]: !prev[alertKey],
        }));
    };
    
    
    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1081);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");

        if (storedUser) {
            try {
                const parsedUser = JSON.parse(storedUser);
                setUser(parsedUser);
            } catch (error) {
                console.error("Error parsing stored user:", error);
            }
        } else {
            console.warn("No user data found in localStorage.");
        }
    }, []);

    const toggleSubItems = (itemIndex) => {
        setSubItemsVisibility((prev) => ({
            ...prev,
            [itemIndex]: !prev[itemIndex],
        }));
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/login");
    };


    const userId = user.id;
    const { checking: checkingAccount, savings: savingsAccount } = user.accounts;
    const { checking: checkingBalance, savings: savingsBalance } = user.balance;

    const handleHomeClick = () => {
        setShowSummary(false);
        setShowSummary2(false);
        setActiveSection(null);
    };

    const handleBack = () => {
        setShowSummary(false);
        setShowSummary2(false);
        setActiveSection(null);
    };


    const formatBalance = (balance) => {
        return balance ? `$${balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}` : "$0.00";
    };

    const formattedCheckingBalance = formatBalance(checkingBalance);
    const formattedSavingsBalance = formatBalance(savingsBalance);
    const totalBalance = (checkingBalance || 0) + (savingsBalance || 0);
    const formattedTotalBalance = formatBalance(totalBalance);

    return (
        <>
            <div className="header">
                <img
                    src={vfcu}
                    alt="vfcu"
                    style={{ width: "180px", height: "auto", borderRadius: '5px' }}
                />

                {isMobile && (
                    <div className="Navmenu">
                        <button className="Btn" onClick={toggleMobileMenu}>
                            {isMobileMenuOpen ? 'Close Menu' : 'Menu'}
                        </button>
                    </div>
                )}
            </div>

            <div className={`menu-container ${isMobileMenuOpen ? 'show' : ''}`}>
                <ul className={`ulcontainer ${isMobileMenuOpen ? 'show' : ''}`}>
                    <li onClick={handleHomeClick}><IoHomeOutline /> Home</li>
                    <li><SlEnvolopeLetter /> Messages</li>
                    <li><IoMenuOutline /> Bill Pay</li>
                    <li onClick={() => toggleSubItems(4)}>
                        <SlCreditCard /> Transactions
                        {subItemsVisibility[4] && (
                            <ul className="sub-items">
                                <li>Funds Transfer</li>
                                <li>Member to Member</li>
                                <li>Send Money</li>
                                <li>Activity Center</li>
                            </ul>
                        )}
                    </li>
                    <li onClick={() => toggleSubItems(5)}>
                        <FcCellPhone /> Services
                        {subItemsVisibility[5] && (
                            <ul className="sub-items">
                                <li>Account List</li>
                                <li>Add External Account</li>
                                <li>Verify External Account</li>
                                <li onClick={() => setActiveSection('alert')}>Alerts</li>
                            </ul>
                        )}
                    </li>
                    <li onClick={() => toggleSubItems(6)}>
                        <CiSettings /> Settings
                        {subItemsVisibility[6] && (
                            <ul className="sub-items">
                                <li>Account Preferences</li>
                                <li>Security Preferences</li>
                                <li>Themes</li>
                                <li>Statement Preferences</li>
                                <li>Accessibility</li>
                            </ul>
                        )}
                    </li>
                    <li><FiHelpCircle /> Help</li>
                    <li onClick={handleLogout}><IoIosLogOut /> Log Off</li>
                </ul>
            </div>

            <div className="welcomeContainer">
                <p>VCU Routing & Transit #: {user.routingNumber || "N/A"}</p>
                <div className="userUpdate">
                    <h3 className="welcome">Welcome, {user.firstName || "User"}</h3>
                    <p className="lastlog">Last login: {user.lastLogin ? new Date(user.lastLogin).toLocaleString() : "N/A"}</p>
                </div>
            </div>

            <div className="grid-container">
                <div className="grid-item leftnav">
                    <div className="sidebar">
                        <ul>
                            <li onClick={handleHomeClick}><IoHomeOutline /> Home</li>
                            <li><SlEnvolopeLetter /> Messages</li>
                            <li><IoMenuOutline /> Bill Pay</li>
                            <li onClick={() => toggleSubItems(4)}>
                                <SlCreditCard /> Transactions <IoChevronDownOutline />
                                {subItemsVisibility[4] && (
                                    <ul className="sub-items">
                                        <li>Funds Transfer</li>
                                        <li>Member to Member</li>
                                        <li>Send Money</li>
                                        <li>Activity Center</li>
                                    </ul>
                                )}
                            </li>
                            <li onClick={() => toggleSubItems(5)}>
                                <FcCellPhone /> Services <IoChevronDownOutline />
                                {subItemsVisibility[5] && (
                                    <ul className="sub-items">
                                        <li>Account List</li>
                                        <li>Add External Account</li>
                                        <li>Verify External Account</li>
                                        <li onClick={() => setActiveSection('alert')}>Alerts</li>
                                    </ul>
                                )}
                            </li>
                            <li onClick={() => toggleSubItems(6)}>
                                <CiSettings /> Settings <IoChevronDownOutline />
                                {subItemsVisibility[6] && (
                                    <ul className="sub-items">
                                        <li onClick={() => setActiveSection('accountPreferences')}>Account Preferences</li>
                                        <li>Security Preferences</li>
                                        <li>Themes</li>
                                        <li>Statement Preferences</li>
                                        <li>Accessibility</li>
                                    </ul>
                                )}
                            </li>
                            <li><FiHelpCircle /> Help</li>
                            <li onClick={handleLogout}><IoIosLogOut /> Log Off</li>
                        </ul>
                    </div>
                </div>

                <div className="grid-item">
                    {activeSection === 'accountPreferences' ? (
                        <div className="AccountPreferences">
                            <p>Change online Account Nicknames, enable Text Banking by suffix, or hide suffix's you don't wish to see on the homepage here.</p>
                            <h1>Account Preferences</h1>
                            <p>Click anywhere on the account row if you woukd like to add/edit an account nickname, enable SMS/TEXT banking or view account details Group and sort accounts as they are displayed on the homepage</p>
                            <h2>Accounts</h2>
                            <h1>PERSONAL CHECKING</h1>
                            <p>Details</p>
                            <p>SMS/Text</p>
                            <p>Online Display Name</p>
                            <h2>PERSONAL CHECKING</h2>
                            <p>Current Account Group</p>
                            <p>Account Visibility</p>
                            <p>Home</p>
                            <p>Financial Tools</p>
                            <button onClick={handleBack}>Back</button>
                        </div>
                    ) : activeSection === 'alert' ? (
                        <div>
                            <p className='Ealert'>E-Alert set up and modification, Receive notification to your email, by phone, Text, or online banking. To stay on top of your VCU Account.</p>
                            <h1>SECURITY ALERTS(18)</h1>
                            <div className='alertContainer'>
                            <div className='hitman'>
    <p>Edit Delivery Preferences</p>
    <label className="switch">
        <input
            type="checkbox"
            checked={alerts.externalTransfer}
            onChange={() => handleAlertToggle('externalTransfer')}
        />
        <span className="slider"></span>
    </label>
</div>

<div className='hitman'>
    <p>Alert me when an external transfer is authorized.</p>
    <label className="switch">
        <input
            type="checkbox"
            checked={alerts.computerRegistered}
            onChange={() => handleAlertToggle('computerRegistered')}
        />
        <span className="slider"></span>
    </label>
</div>
<div className='hitman'>
                            <p>Alert me when a computer/brower is succesfully registered.</p>
                            <label className="switch">
        <input
            type="checkbox"
            checked={alerts.Registered}
            onChange={() => handleAlertToggle('Registered')}
        />
        <span className="slider"></span>
    </label>
</div>
                            <p>Alert me when my password is changed.</p>
                            <p>Alert me when secure access code contact information is changed.</p>
                            <p>Alert me when when my login ID is changed.</p>
                            <p>Alert me when the process to add an external account is started.</p>
                            <p>Alert me when forgot password is attempted for my login ID.</p>
                            <p>Alert me when invalid password for my login ID is submitted.</p>
                            <p>Alert me when the forgot password process is attempted unsucessfully.</p>
                            <p>Alert me when invalid secure access code submitted.</p>
                            <p>Alert me when my login ID is disabled.</p>
                            <p>Alert me when my login ID is locked out.</p>
                            <p>Alert me when new user is created.</p>
                            <p>Alert me when my Security Preferences are changed.</p>
                            <p>Alert me when my my user profile is updated.</p>
                            <p>Alert me when a valid password for my login ID is submitted.</p>
                            <p>Alert me when the forgot password process is succesfully completed.</p>
                            <p>Alert me when a valid secure access code is submitted.</p>
                            </div>
                        </div>
                    ) : !showSummary && !showSummary2 ? (
                        <div className="AccountBalance">
                            <h2 className="accountsh2" onClick={() => setShowSummary(true)}>ACCOUNTS <span><BsThreeDotsVertical /></span></h2>
                            <div className="bankaccount1" onClick={() => setShowSummary(true)}>
                                <p className="BalAcc">
                                    MYCHOICE PREMIUM CHECKING ({checkingAccount ? `***${checkingAccount.slice(-4)}` : "N/A"})
                                </p>
                                <p className="availablecurrent">Available Balance <span>{formattedCheckingBalance}</span></p>
                                <p className="availablecurrent">Current Balance <span>{formattedCheckingBalance}</span></p>
                            </div>
                            <div className="bankaccount2" onClick={() => setShowSummary2(true)}>
                                <p className="BalAcc">
                                    REGULAR SHARE SAVINGS ({savingsAccount ? `***${savingsAccount.slice(-4)}` : "N/A"})
                                </p>
                                <p className="availablecurrent">Available Balance <span>{formattedSavingsBalance}</span></p>
                                <p className="availablecurrent">Current Balance <span>{formattedSavingsBalance}</span></p>
                            </div>

                            <h2 className="accountsh2" onClick={() => setShowSummary2(true)}>BALANCE TOTALS</h2>
                            <p className="totaldeposit">Total Deposit Accounts: <span>{formattedTotalBalance}</span></p>
                            <p className="totaldeposit">**This Balance does not include loans</p>
                        </div>
                    ) : showSummary ? (
                        <Banksummary1 handleBack={handleBack} userId={userId}
                            balance={checkingBalance}
                            accountNumber={checkingAccount} />
                    ) : showSummary2 ? (
                        <Banksummary2 handleBack={handleBack} userId={userId}
                            balance={savingsBalance}
                            accountNumber={savingsAccount} />
                    ) : null}
                </div>

                <div className="grid-item rigthNav">
                    <div className='rightText'>
                        <p>Transfer Money Now <FaAngleRight /></p>
                        <p>View All Bills Now <FaAngleRight /></p>
                        <p>Remote Deposit Checks</p>
                    </div>
                    <div className='searchdiv'>
                        <input type='search' placeholder='Search transactions' />
                        <p className='Ptext'>All <span className='submitted'>Submitted</span><span>Accepted</span></p>
                        <p>No History Available</p>
                    </div>
                    <img className="fraudimg" src={fraud} alt="fraud" style={{ marginTop: "90px", width: "250px", height: "50vh" }} />
                </div>
            </div>
        </>
    );
};

export default Bankhome;
