import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext(); //use context

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This item is from context",
      rating: 10,
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false, //set feedbak to false
  });

  //add a new feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    console.log(setFeedback);
    setFeedback([newFeedback, ...feedback]);
  };

  //delete the feedback
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?"));
    setFeedback(feedback.filter((item) => item.id !== id));
  };

  //set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true, //set edit feedback to true
    });
  };
  //update feedback item
  const updateFeedback = (id, upditem) => {
    setFeedback(feedback.map((item) => (item.id === id ? { ...item, ...upditem } : item)));
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit, // actual piece of state that holds the item in the boolean
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
