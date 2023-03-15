import React from "react";
import Card from "./shared/Card";
import PropTypes from "prop-types";

function FeedbackItem({ item }) {
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedbackItem.PropType = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
