import React, { useState, useEffect } from "react";
import {
  FaSquareFacebook,
  FaXTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";

const Footer = ({ className }) => {

  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    // Get the current date
    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-US", {
      year: "numeric"
    });
    setCurrentDate(formattedDate);
  }, []);

  return (
    <div className="FooterContainer">
      <div className={`FooterTopContainer ${className}`}>
        <div className={`innerFooterContainer ${className}`}>
          <h2 className="innerFooterH2TextContent">ABOUT</h2>
          <ul>
            <li className="li-hover">About Vaylx</li>
            <li className="li-hover">Newsroom</li>
            <li className="li-hover">Investor Relations</li>
            <li className="li-hover">Careers</li>
            <li className="li-hover">Global Network</li>
            <li className="li-hover">Contact Us</li>
          </ul>
        </div>
        <div className={`innerFooterContent ${className}`}>
          <h2 className="innerFooterH2TextContent">PRODUCTS & SERVICES</h2>
          <ul>
            <li className="li-hover">Credit Cards</li>
            <li className="li-hover">Business Credit Cards</li>
            <li className="li-hover">Corporate Programs</li>
            <li className="li-hover">View All Gift Cards</li>
            <li className="li-hover">Savings Accounts & CDs</li>
            <li className="li-hover">Download the App</li>
          </ul>
        </div>

        <div className={`innerFooterContent ${className}`}>
          <h2 className="innerFooterH2TextContent">LINKS YOU MAY LIKE</h2>
          <ul>
            <li className="li-hover">Membership Rewards</li>
            <li className="li-hover">FICO® Score and Insights</li>
            <li className="li-hover">CreditSecure®</li>
            <li className="li-hover">Accept Amex Cards</li>
            <li className="li-hover">Refer A Friend</li>
          </ul>
        </div>

        <div className={`innerFooterContent ${className}`}>
          <h2 className="innerFooterH2TextContent">ADDITIONAL INFORMATION</h2>
          <ul>
            <li className="li-hover">
              Credit Intel - Financial Education Center
            </li>
            <li className="li-hover">Supplier Diversity</li>
            <li className="li-hover">Credit Score 101</li>
            <li className="li-hover">US Newcomers</li>
            <li className="li-hover">Frequently Asked Questions</li>
          </ul>
        </div>
      </div>
      <div className={`footerMiddleContainer ${className}`}>
        <ul className="ulFooterText">
          <li className="liHover">Terms of Service</li>

          <li className="liHov">|</li>

          <li className="liHover">Privacy Center</li>

          <li className="liHov">|</li>

          <li className="liHover">
            Do Not Sell or Share My Personal Information
          </li>

          <li className="liHov">|</li>

          <li className="liHover">AdChoices</li>

          <li className="liHov">|</li>

          <li className="liHover">Security Center</li>

          <li className="liHov">|</li>

          <li className="liHover">Card Agreements</li>

          <li className="liHov">|</li>

          <li className="liHover">Servicemember Benefits</li>

          <li className="liHov">|</li>

          <li className="liHover">Site Map</li>
        </ul>
      </div>
      <div className="vfcurn">
        <p>
          &nbsp;&nbsp;&nbsp;© {currentDate} Vaylx Credit Union. All rights
          reserved.
        </p>
        <span className="footerIcon">
          <FaSquareFacebook className="reactIcon" />
          <FaXTwitter className="reactIcon" />
          <FaInstagram className="reactIcon" />
          <FaLinkedin className="reactIcon" />
          <FaYoutube className="reactIcon" />
        </span>
        <p>&nbsp;&nbsp;&nbsp;Routing Number: 197298915</p>
      </div>
    </div>
  );
};

export default Footer;
