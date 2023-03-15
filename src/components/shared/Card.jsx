import React from "react";
import PropTypes from "prop-types";

function Card({ children, reverse }) {
  // class level conditions
  // return <div className={`card ${reverse && "reverse"}`}>{children}</div>;

  //style level conditions, the below code will work as same as the above commented code
  return (
    <div
      className="card"
      style={{
        backgroundColor: reverse ? "rgba(0,0,0,0.4)" : "#fff",
        color: reverse ? "#fff" : "#000",
      }}
    >
      {children}
    </div>
  );
}

Card.defaultProps = {
  reverse: false, // set the dark mode of the card
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};
export default Card;
