import React from "react";
import PropTypes from "prop-types";

function FeedbackStats({ feedback }) {
  //calculate average ratings
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;

  // show average to one decimal place and also with replace i am using regular expression to show decimal only when there is a float number

  average = average.toFixed(1).replace(/[.,]0$/, "");
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired,
};

export default FeedbackStats;
