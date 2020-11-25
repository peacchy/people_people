import React from "react";
import "./Search.css";

export const Search = (props) => {
  const callOnChange = (event) => {
    props.onChange(event.target.value);
  };

  return (
    <div>
      <input placeholder="Search by user name..." onChange={callOnChange} />
    </div>
  );
};
