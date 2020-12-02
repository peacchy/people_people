import React from "react";
import PropTypes from "prop-types";
import { UserListItem } from "./list-item/UserListItem";

export const UserList = ({ users, className }) => {
  if (!users.length) {
    return <div> No data available. </div>;
  }

  return (
    <ul className={className}>
      {users.map((user, index) => (
        <UserListItem user={user} key={index} index={index + 1} />
      ))}
    </ul>
  );
};

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object),
  className: PropTypes.string,
};
