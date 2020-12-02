import React from "react";
import PropTypes from "prop-types";

export const renderUser = (user, index) => {
  const lightItemStyle = {
    fontWeight: "lighter",
    fontSize: "smaller",
    marginTop: 2,
    padding: 5,
  };

  const boldItemStyle = {
    fontWeight: "bold",
    padding: 5,
  };

  return (
    <>
      <div style={lightItemStyle}>{`${index}.`}</div>
      <div style={boldItemStyle}>{`${user.name} ${user.surname}`}</div>
      <div style={lightItemStyle}>{`@${user.username}`}</div>
    </>
  );
};

renderUser.propTypes = {
  user: PropTypes.objectOf({
    name: PropTypes.string,
    surname: PropTypes.string,
    userName: PropTypes.string,
  }),
  index: PropTypes.number,
};
