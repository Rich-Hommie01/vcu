import React from "react";
import Taxid from '../img/taxId.svg'
import driverliecense from '../img/driversLicense.svg'
import './Register.scss';

const IntroContent = () => {

  return (
    <div className="intro-content">
      <h2>Let's open your VCU Private Client Checking℠ account</h2>
      <div className="taxIconText">
        <p>Before you start, you'll need your:</p>
        <ul className="TaxId">
          <li className="TaxIdcon">
            <span>Social Security number</span>
            <img src={Taxid} alt="Taxid" />
          </li>

          <li className="TaxIdcon">
            <span>Driver's license or state ID</span>
            <img src={driverliecense} alt="driverlicense" />
          </li>
        </ul>

        <p>You can only open individual accounts online. To add a joint owner, schedule a meeting to talk with a VCU banker in person.</p>
      </div>
      <h2>Are you an existing VCU customer?</h2>
      <p>If you're a VCU customer, sign in for faster, prefilled application.</p>
    </div>
  );
};

export default IntroContent;