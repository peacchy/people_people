import React from "react";
import PropTypes from "prop-types";
import "./UserListItem.css";

export const UserListItem = ({ index, name, surname, username }) => {
  return (
    <li className="list-item">
      <div className="list-item-light">{`${index}.`}</div>
      <div className="list-item-bold">{`${name} ${surname}`}</div>
      <div className="list-item-light">{`@${username}`}</div>
    </li>
  );
};

UserListItem.propTypes = {
  index: PropTypes.number,
  name: PropTypes.string,
  surname: PropTypes.string,
  username: PropTypes.string,
};
