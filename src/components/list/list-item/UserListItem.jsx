import React from "react";
import "./UserListItem.css";

export const UserListItem = (props) => {
  return (
    <div className="list-item">
      <div className="list-item-light">{`${props.index}.`}</div>
      <div className="list-item-bold">{`${props.name} ${props.surname}`}</div>
      <div className="list-item-light">{`@${props.username}`}</div>
    </div>
  );
};
