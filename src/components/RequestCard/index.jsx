import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import imgChecked from "../../assets/images/Checked.svg";
import imgUnhecked from "../../assets/images/Unchecked.svg";

import "./index.scss";

const RequestCard = ({
  number,
  approver: { first_name, last_name, email, profile_picture },
  status,
  last_notified_time
}) => {
  const actionStr = status === "accepted" ? "Approved" : "Last notified";
  return (
    <div className="request-card-container">
      <div className="number">{number}</div>
      <div className="avatar-wrapper">
        <img src={profile_picture} width="100%" alt="" />
      </div>
      <div className="content-wrapper">
        <div className="user-info-wrapper">
          <div className="name">{`${first_name} ${last_name}`}</div>
          <div className="email">({email})</div>
        </div>
        <div className="date-wrapper">
          {actionStr}
          {" "}
          {moment(last_notified_time).format("MMM D, YYYY")}
        </div>
      </div>
      <div className="status-icon-wrapper">
        <img src={status === "accepted" ? imgChecked : imgUnhecked} width="100%" alt="" />
      </div>
    </div>
  );
};

RequestCard.propTypes = {
  number: PropTypes.number,
  approver: PropTypes.instanceOf(Object).isRequired,
  status: PropTypes.string,
  last_notified_time: PropTypes.string
};

RequestCard.defaultProps = {
  number: 0,
  status: "",
  last_updated_date: ""
};

export default RequestCard;
