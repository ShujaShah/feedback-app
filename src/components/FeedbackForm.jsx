import React from "react";
import Card from "./shared/Card";
import { useState } from "react";
import Button from "./shared/Button";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const handleTextChange = (e) => {
    if (text === "") {
      //condition to check if there is no text inputted, set the button to disabled
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("Text Must be atleast 10 Characters");
       setBtnDisabled(true);
    } else {
      setMessage(null);
       setBtnDisabled(false);
    }

    setText(e.target.value);
  };
  return (
    <Card>
      <form>
        <h2>How would you rate our Services?</h2>

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
