import React from "react";
import "./Footer.scss";
import {
  FaSquareFacebook,
  FaXTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";

const Footer = ({ className }) => {
  return (
    <section className="FooterContainer">
      <div className={`FooterCo ${className}`}>
        <div className={`innerContent ${className}`}>
          <h2 className="innerTextContent">ABOUT</h2>
          <ul>
            <li className="li-hover">About American Express</li>
            <li className="li-hover">Newsroom</li>
            <li className="li-hover">Investor Relations</li>
            <li className="li-hover">Careers</li>
            <li className="li-hover">Global Network</li>
            <li className="li-hover">Contact Us</li>
          </ul>
        </div>
        <div className={`innerContent ${className}`}>
          <h2 className="innerTextContent">PRODUCTS & SERVICES</h2>
          <ul>
            <li className="li-hover">Credit Cards</li>
            <li className="li-hover">Business Credit Cards</li>
            <li className="li-hover">Corporate Programs</li>
            <li className="li-hover">View All Gift Cards</li>
            <li className="li-hover">Savings Accounts & CDs</li>
            <li className="li-hover">Download the App</li>
          </ul>
        </div>

        <div className={`innerContent ${className}`}>
          <h2 className="innerTextContent">LINKS YOU MAY LIKE</h2>
          <ul>
            <li className="li-hover">Membership Rewards</li>
            <li className="li-hover">FICO® Score and Insights</li>
            <li className="li-hover">CreditSecure®</li>
            <li className="li-hover">Accept Amex Cards</li>
            <li className="li-hover">Refer A Friend</li>
          </ul>
        </div>

        <div className={`innerContent ${className}`}>
          <h2 className="innerTextContent">ADDITIONAL INFORMATION</h2>
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
      <div className={`footerInnerText ${className}`}>
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
          &nbsp;&nbsp;&nbsp;© 2024 Virgin Federal Credit Union. All rights
          reserved.
        </p>
        <span>
          <FaSquareFacebook className="reactIcon" />
          <FaXTwitter className="reactIcon" />
          <FaInstagram className="reactIcon" />
          <FaLinkedin className="reactIcon" />
          <FaYoutube className="reactIcon" />
        </span>
        <p>&nbsp;&nbsp;&nbsp;Routing Number: 211170282</p>
      </div>
    </section>
  );
};

export default Footer;
