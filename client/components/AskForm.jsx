import React from 'react';
import GuidelinesModal from './GuidelinesModal';
import LoginModal from './LoginModal';

// "Ask a question" form that pops up when the button is clicked.
const AskForm = ({ restaurantID, handleAskFormCancelClick, handleGuidelinesClick, handleLoginClick }) => (
  <div id="ask-form">
    {/* Prompt text */}
    <div id="ask-form-header">
      {`Get quick answers from Restaurant ${restaurantID} staff and past visitors.`}
    </div>
    <div id="ask-form-subheader">Note: your question will be posted publicly on the Questions & Answers page.</div>
    {/* Text field */}
    <textarea autoFocus id="ask-form-textfield" placeholder="Hi, what would you like to know about this restaurant?" />
    {/* Posting guidelines -- pops up a modal. */}
    <div className="guidelines float-right" onClick={handleGuidelinesClick}>Posting guidelines</div>

    {/* Submit button -- pops up a fake login modal. */}
    <button type="button" className="large-black-button" onClick={handleLoginClick}>Submit</button>

    {/* Cancel button -- closes the form. */}
    <button type="button" className="large-white-button" onClick={handleAskFormCancelClick}>Cancel</button>
  </div>
);

export default AskForm;
