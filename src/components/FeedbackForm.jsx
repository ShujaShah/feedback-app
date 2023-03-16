import React from "react";
import Card from "./shared/Card";
import { useState } from "react";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10);

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
  return (
    <Card>
      <form>
        <h2>How would you rate our Services?</h2>
        <RatingSelect select={(rating) => console.log(rating)} />
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
