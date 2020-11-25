import React from "react";
import { UserListItem } from "./list-item/UserListItem";

export const UserList = (props) => {
  if (!props.items.length) {
    return <div> No data available. </div>;
  }

  return (
    <div className={props.className}>
      {props.items.map((item, index) => (
        <UserListItem
          name={item.name}
          surname={item.surname}
          username={item.username}
          key={index}
          index={index + 1}
        />
      ))}
    </div>
  );
};
