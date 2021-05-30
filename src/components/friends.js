import React from "react";
import PropTypes from "prop-types";

const Friends = ({ avatar, name, isOnline }) => (
  <div>
    <span>{isOnline}</span>
    <img src={avatar} alt="{name}" width="64" />
    <p>{name}</p>
  </div>
);

Friends.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default Friends;
