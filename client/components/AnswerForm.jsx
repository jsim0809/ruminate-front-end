import React from 'react';
import GuidelinesModal from './GuidelinesModal';
import LoginModal from './LoginModal';

// "Answer a question" form that pops up when the button is clicked.
const AnswerForm = ({ restaurantID, handleAnswerFormCancelClick, handleGuidelinesClick, handleLoginClick }) => (
  <div className="answer-form">
    {/* Prompt text */}
    <div className="answer-form-header">WHAT IS YOUR ANSWER?</div>
    {/* Text field */}
    <textarea autoFocus className="answer-form-textfield" placeholder="Can you answer this question? Enter your answer here." />
    {/* Posting guidelines -- pops up a modal. */}
    <div className="guidelines float-right" onClick={handleGuidelinesClick}>Posting guidelines</div>
    <div className="answer-form-buttonbar">
      {/* Submit button -- pops up a fake login modal. */}
      <button type="button" className="small-black-button" onClick={handleLoginClick}>Submit</button>
      {/* Cancel button -- closes the form. */}
      <button type="button" className="small-white-button" onClick={handleAnswerFormCancelClick}>Cancel</button>
    </div>
  </div>
);

export default AnswerForm;
