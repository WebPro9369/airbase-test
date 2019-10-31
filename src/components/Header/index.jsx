import React from "react";
import logoImg from "../../assets/images/Airbase_Logo_RGB-02.svg";
import lockImg from "../../assets/images/Lock.svg";

import "./index.scss";

const Header = () => (
  <div className="header-container">
    <div className="logo-wrapper">
      <img className="logo" src={logoImg} alt="" />
    </div>
    <div className="security-wrapper">
      <div className="lock-icon-wrapper">
        <img className="logo" src={lockImg} alt="" />
        <div className="header-text text-orange">Security Message</div>
      </div>
      <div className="header-text text-grey">
        Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id
        elit non mi porta gravida at eget metus.
      </div>
    </div>
  </div>
);

export default Header;
