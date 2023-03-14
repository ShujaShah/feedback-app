import React from "react";
import propTypes from "prop-types";

function Header(props) {
  return (
    <header>
      <div className="container">
        <h2>{props.text}</h2>
      </div>
    </header>
  );
}
// Here we are using default props, which will set the default value of the props
Header.defaultProps = {
  text: "Feedback header",
};

//Here we are setting the prop type to string
Header.propTypes = {
  text: propTypes.string,
};

export default Header;
