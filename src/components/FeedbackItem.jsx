import React from "react";
import Card from "./shared/Card";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
function FeedbackItem({ item }) {
  const { deleteFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color="purple"></FaTimes>
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedbackItem.PropType = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
