import React from "react";
import PropTypes from "prop-types";
import { UserListItem } from "./list-item/UserListItem";

export const UserList = ({ items, className }) => {
  if (!items.length) {
    return <div> No data available. </div>;
  }

  return (
    <ul className={className}>
      {items.map((item, index) => (
        <UserListItem
          name={item.name}
          surname={item.surname}
          username={item.username}
          key={index}
          index={index + 1}
        />
      ))}
    </ul>
  );
};

UserList.propTypes = {
  items: PropTypes.object,
  className: PropTypes.string,
};
