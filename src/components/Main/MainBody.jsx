import React from "react";
import PropTypes from "prop-types";
import MainFooter from "./MainFooter";

const MainBody = ({ data }) => (
  <div className="main-body">
    <div className="left-section">
      <div className="content-table">

      </div>
      <div className="footer-wrapper">
        <MainFooter />
      </div>
    </div>
    <div className="right-section"></div>
  </div>
);

MainBody.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired
};

export default MainBody;
