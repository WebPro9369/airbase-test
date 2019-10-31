import React from "react";
import MainHeader from "../components/Main/MainHeader";
import MainBody from "../components/Main/MainBody";

import data from "../data/request1.json";

console.log("data: ", data);

export default class MainContainer extends React.Component {
  constructor(props) {
    super(props);

    // This should be data from some APIs etc
    // For now, we use dummy data from a JSON
    this.state = {
      data
    };
  }
  render() {
    const { data } = this.state;
    const { service } = data;
    return (
      <div className="main-container">
        <MainHeader
          logo={service.logo}
          name={service.name}
          usageCount={service.usage_count}
        />
        <MainBody
          data={data}
        />
      </div>
    );
  }
}
