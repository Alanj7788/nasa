import React from "react";
import Bgvideo from "../Bgvideo";
import Button from 'react-bootstrap/Button';
import CTA from "./CTA";
import "./header.css";

const Header = (props) => {
  return (
    <div className="header-container">
      <Bgvideo />
      <div className="content">
      <CTA />
      </div>
    </div>
  );
};

export default Header;
