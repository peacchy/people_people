import React from "react";
import "./List.css";
import PropTypes from "prop-types";

export const List = ({ items, className, onItemRender }) => {
  if (!items || !items.length) {
    return <div> No data available. </div>;
  }

  return (
    <ul className={className}>
      {items.map((item, index) => (
        <li className="list-item">{onItemRender(item, index + 1)}</li>
      ))}
    </ul>
  );
};

List.propTypes = {
  items: PropTypes.object,
  className: PropTypes.string,
  onItemRender: PropTypes.func,
};
