import React from "react";
import PropTypes from "prop-types";

import "./index.scss";

const Button = ({ label, type, onClick }) => (
  <button className={`button button-${type}`} onClick={onClick}>
    {label}
  </button>
);

Button.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func
};

Button.defaultProps = {
  label: "",
  type: "primary",
  onClick: () => {}
};

export default Button;
