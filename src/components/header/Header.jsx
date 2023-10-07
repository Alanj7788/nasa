import React from "react";
import Bgvideo from "../Bgvideo";
import Button from 'react-bootstrap/Button';

import "./header.css";

const Header = (props) => {
  return (
    <div className="header-container">
      <Bgvideo />
      <div className="content">
        <Button variant="outline-primary" className="custom-button">Download EMIT.apk</Button>
      </div>
    </div>
  );
};

export default Header;
