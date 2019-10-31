import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";

const MainFooter = ({serviceName, instanceNumber, instanceOwner}) => (
  <div className="main-footer">
    <div className="buttons-wrapper">
      <Button type="primary" label="Approve" />
      <Button type="secondary" label="Deny" />
    </div>
  </div>
);

MainFooter.propTypes = {
  serviceName: PropTypes.string,
  instanceNumber: PropTypes.number,
  instanceOwner: PropTypes.string,
};

MainFooter.defaultTypes = {
  serviceName: "",
  instanceNumber: 0,
  instanceOwner: "",
};

export default MainFooter;
