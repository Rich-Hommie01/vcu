import React from "react";
import "./Main.scss";
import Navbar from "../HomePage/Navbar";
import Display from "../HomePage/Display";
import Body from "./Body";
import Footer from "../HomePage/Footer";

const NewPage = () => {
  return (
    <div>
      <Display>
        <Navbar />
        <Body />
        <Footer />
      </Display>
    </div>
  );
};

export default NewPage;
