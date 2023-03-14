import React from "react";
import propTypes from "prop-types";

function Header({ text, bgColor, color }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: color,
  };
  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}
// Here we are using default props, which will set the default value of the props
Header.defaultProps = {
  text: "Feedback header",
  bgColor: "rgba(0,0,0,0.4)",
  color: "#ff6a95",
};

//Here we are setting the prop type to string
Header.propTypes = {
  text: propTypes.string,
  bgColor: propTypes.string,
  color: propTypes.string,
};

export default Header;
