import React from "react";
import PropTypes from "prop-types";

import "./index.scss";

const ProfileCard = ({picture, name}) => (
  <div className="profile-card-container">
    <div className="picture-wrapper">
      <img src={picture} width="100%" alt="" />
    </div>
    <div className="name">{name}</div>
  </div>
);

ProfileCard.propTypes = {
  picture: PropTypes.string,
  name: PropTypes.string
};

ProfileCard.defaultProps = {
  picture: "",
  name: ""
};

export default ProfileCard;
