import React from "react";
import PropTypes from "prop-types";
import DataCell from "../DataCell";
import ProfileCard from "../ProfileCard";

const ContentTable = ({
  requestedBy,
  cost,
  renewalFreq,
  annualCost,
  expenseAccount,
  file,
  description
}) => (
  <div className="content-table-container">
    <div className="datacell-wrapper">
      <DataCell
        label="Requested By"
        content={
          <ProfileCard
            picture={requestedBy.profile_picture}
            name={`${requestedBy.first_name} ${requestedBy.last_name}`}
          />
        }
      />
    </div>
    <div className="datacell-wrapper">
      <DataCell label="Cost" content={`$${cost}`} />
    </div>
    <div className="data-half-cells">
      <div className="datacell-wrapper half-width">
        <DataCell label="Renewal Frequency" content={`${renewalFreq} month`} />
      </div>
      <div className="datacell-wrapper half-width">
        <DataCell label="Annual Cost" content={`$${annualCost}`} />
      </div>
    </div>
    <div className="datacell-wrapper">
      <DataCell label="Expense Account" content={expenseAccount} />
    </div>
    <div className="datacell-wrapper">
      <DataCell label="File" content={file.split("/").pop()} />
    </div>
    <div className="datacell-wrapper">
      <DataCell label="Description" content={description} />
    </div>
  </div>
);

ContentTable.propTypes = {
  requestedBy: PropTypes.instanceOf(Object),
  cost: PropTypes.number,
  renewalFreq: PropTypes.number,
  annualCost: PropTypes.number,
  expenseAccount: PropTypes.string,
  file: PropTypes.string,
  description: PropTypes.string
};

ContentTable.defaultProps = {
  requestedBy: {},
  cost: 0,
  renewalFreq: 0,
  annualCost: 0,
  expenseAccount: "",
  file: "",
  description: ""
};

export default ContentTable;
