import React from "react";
import { useState } from "react";

function FeedbackItem() {
  const [rating, setRating] = useState(7);
  const [text, setText] = useState("This is an example of feedback item");

  //Change the state when you click on the click button
  const handleClick = () => {
    setRating((prev) => {
      return prev + 1;
    });
    
    //Here we are hardcoding the values of rating and text
    // setRating(10);
    // setText("This is an updated text");
  };

  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default FeedbackItem;
