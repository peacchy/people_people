import React from "react";
import PropTypes from "prop-types";
import "./Search.css";

export const Search = ({ onChange, placeholder }) => {
  const callOnChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <input placeholder={placeholder} onChange={callOnChange} />
    </div>
  );
};

Search.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};
