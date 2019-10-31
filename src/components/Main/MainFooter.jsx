import React from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";

const MainFooter = ({serviceName, instanceNumber, instanceOwner}) => (
  <div className="main-footer">
    <div className="description">
      Your company is already paying for {serviceName} on a recurring basis.
    </div>
    <div className="subdescription">
      ({instanceNumber} instance owned by {instanceOwner})
    </div>
    <div className="buttons-wrapper">
      <Button type="primary" label="Approve" />
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
