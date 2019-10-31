import React from "react";
import PropTypes from "prop-types";
import MainFooter from "./MainFooter";
import ContentTable from "./ContentTable";
import ApproverList from "../ApproverList";

import "./index.scss";

const MainBody = ({
  data: {
    service: { name: serviceName, usage_count },
    requested_by,
    cost,
    renewal_frequency_in_months,
    annual_cost,
    expense_account,
    files,
    description,
    approvers
  }
}) => (
  <React.Fragment>
    <div className="main-body">
      <div className="left-section">
        <div className="content-table">
          <ContentTable
            requestedBy={requested_by}
            cost={cost}
            renewalFreq={renewal_frequency_in_months}
            annualCost={annual_cost}
            expenseAccount={expense_account}
            file={files[0]}
            description={description}
          />
        </div>
        <div className="table-footer">
          <div className="description">
            Your company is already paying for {serviceName} on a recurring
            basis.
          </div>
          <div className="subdescription">
            ({usage_count} instance{usage_count > 1 ? "s" : ""} owned by{" "}
            {`${requested_by.first_name} ${requested_by.last_name}`})
          </div>
        </div>
      </div>
      <div className="border-section" />
      <div className="right-section">
        <ApproverList approvers={approvers} />
      </div>
    </div>
    <div className="footer-wrapper">
      <MainFooter />
    </div>
  </React.Fragment>
);

MainBody.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired
};

export default MainBody;
