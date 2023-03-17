import React from "react";
import Card from "./shared/Card";
import { useState, useContext } from "react";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10);

  const {addFeedback} = useContext(FeedbackContext)

  const handleTextChange = (e) => {
    if (text === "") {
      //condition to check if there is no text inputted, set the button to disabled
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      //condition to check if the text is not empty, however the text is less than 10 characters
      setMessage("Text Must be atleast 10 Characters");
      setBtnDisabled(true);
    } else {
      //condition to check if the text is above 10 characters
      setMessage(null);
      setBtnDisabled(false);
    }

    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      addFeedback(newFeedback);
      setText(""); //To clear the input field after the feedback is added
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate our Services?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input onChange={handleTextChange} type="text" placeholder="Write your review" value={text}></input>
          <Button type="submit" isDisabled={btnDisabled}>
            Submit
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
