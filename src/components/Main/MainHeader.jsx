import React from "react";
import PropTypes from "prop-types";

const MainHeader = ({ logo, name, usageCount }) => (
  <div className="header">
    <div className="request-avatar">
      <img src={logo} width="100%" alt="" />
    </div>
    <div className="request-for">
      Request for {name} (#{usageCount})
    </div>
  </div>
);

MainHeader.propTypes = {
  logo: PropTypes.string,
  name: PropTypes.string,
  usageCount: PropTypes.number
};

MainHeader.defaultProps = {
  logo: "",
  name: "",
  usageCount: 0
};

export default MainHeader;
