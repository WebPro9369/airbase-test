import React from "react";
import PropTypes from "prop-types";

const RequestCard = ({
  number,
  avatarImg,
  name,
  email,
  status,
  date
}) => (
  <div className="request-card-container">
    <div className="number">{number}</div>
    <div className="avatar-wrapper">
      <img src={avatarImg} alt="" />      
    </div>
    <div className="content-wrapper">
      <div className="user-info-wrapper">
        <div className="name">{name}</div>
        <div className="email">({email})</div>
      </div>
      <div className="date-wrapper">{date}</div>
    </div>
    <div className="status-icon-wrapper">{status}</div>
  </div>
);

RequestCard.propTypes = {
  number: PropTypes.string,
  avatarImg: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
  status: PropTypes.string,
  date: PropTypes.string
};

RequestCard.defaultProps = {
  number: "1",
  avatarImg: "",
  name: "",
  email: "",
  status: "",
  date: ""
};

export default RequestCard;
