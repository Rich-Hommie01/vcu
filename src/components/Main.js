import React from "react";
import "./Main.scss";
import Nav from "./Nav";
import Display from "./Display";
import Homepage from "./Homepage";
import Footer from "./Footer";

const NewPage = () => {
  return (
    <div>
      <Display>
        <Nav />
        <Homepage />
        <Footer />
      </Display>
    </div>
  );
};

export default NewPage;
