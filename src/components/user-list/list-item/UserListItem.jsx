import React from "react";
import PropTypes from "prop-types";
import "./UserListItem.css";

export const UserListItem = ({ user, index }) => {
  return (
    <li className="list-item">
      <div className="list-item--light">{`${index}.`}</div>
      <div className="list-item--bold">{`${user.name} ${user.surname}`}</div>
      <div className="list-item--light">{`@${user.username}`}</div>
    </li>
  );
};

UserListItem.propTypes = {
  user: PropTypes.objectOf({
    name: PropTypes.string,
    surname: PropTypes.string,
    userName: PropTypes.string,
  }),
  index: PropTypes.number,
};
