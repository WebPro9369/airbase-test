import React from "react";
import PropTypes from "prop-types";

const DataCell = ({label, content}) => (
  <div className="datacell-container">
    <div className="datacell-label">{label}</div>
    <div className="datacell-content">{content}</div>
  </div>
);

DataCell.propTypes = {
  label: PropTypes.string,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ])
};

DataCell.defaultProps = {
  label: "",
  content: ""
};

export default DataCell;
