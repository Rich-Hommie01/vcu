import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Body.scss";
import { useNavigate } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import image from "../img/PrivateClient.png";

const Body = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <>
      <main className="homebody">
        <section className="HomeLogin">
          <div className="SecureLogin">
            <h2 className="icon">
              <FaLock />
              Online Banking
            </h2>
            <button
              type="button"
              className="btn btn-secondary secure"
              onClick={handleClick}
            >
              Secure Log in
            </button>
            <span className="ForgetUserPass" onClick={() => navigate('/forgetUserPass')}>Forget username / Password?</span>
            <span className="ForgetUserPass" onClick={() => navigate('/register')}>Enroll in Online Banking</span>
          </div>
        </section>
        <article className="HomeText">
          <h2 className="PersonalLoan">
            Cover any expense with a personal loan
          </h2>
          <p className="LoanText">
            Get approved in minutes for up to $50,000. Check if you are
            pre-qualified with no impact to your credit score.
          </p>
          <button type="button" className="explore btn btn-danger">
            Explore Personal Loans
          </button>
        </article>
        <div className="PrivateClient">
          <div className="Privatelient">
            <h2 className="VirginPC">
              Virgin Federal Credit Union® Private Client
            </h2>
            <p className="VirginPCText">
              A banking experience designed around your individual goals
            </p>
            <p className="VirginPCText">
              Your dedicated Relationship Banker can provide you with access to
              our best rates on deposits, as well as preferred pricing on
              lending and investment products*.
            </p>
            <button type="button" className="btn btn-danger">
              Learn More
            </button>
          </div>
          <div className="privateCard">
            <img src={image} alt="" />
          </div>
        </div>
      </main>
    </>
  );
};

export default Body;
