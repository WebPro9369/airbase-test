import React from "react";
import PropTypes from "prop-types";
import RequestCard from "../RequestCard";

import "./index.scss";

const apprverListBuilder = approvers => {
  if (!approvers) {
    return {};
  }

  const approversObj = approvers.reduce((acc, current, index) => {
    const { status } = current;

    if (!acc[status]) {
      acc[status] = [];
    }

    acc[status].push({ number: index + 1, ...current });
    return acc;
  }, {});

  console.log("Approver object: ", approversObj);

  return Object.keys(approversObj).map(key => (
    <div key={key} className="request-list">
      <div className="list-label">{key.charAt(0).toUpperCase() + key.substr(1)}</div>
      {approversObj[key].map((item, index) => (
        <RequestCard key={index} {...item} />
      ))}
    </div>
  ));
};

const ApproverList = ({ approvers }) => (
  <div className="request-list-container">{apprverListBuilder(approvers)}</div>
);

ApproverList.propTypes = {
  list: PropTypes.instanceOf(Array)
};

ApproverList.defaultProps = {
  list: []
};

export default ApproverList;
