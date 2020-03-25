import React from 'react';

/**
 * The "Answer a question" form that pops up when the Answer button is clicked.
 * Parent: QWithAs
 * Children: none
 */
const AnswerForm = ({ handleAnswerFormCancelClick, handleGuidelinesClick, handleLoginClick, zeroAnswers }) => (
  <div className="answer-form">
    {/* Prompt text */}
    <div className="answer-form-header">WHAT IS YOUR ANSWER?</div>
    {/* Text field */}
    <textarea autoFocus className="answer-form-textfield" placeholder="Can you answer this question? Enter your answer here." />
    {/* Posting guidelines -- pops up a modal. */}
    <div className="guidelines float-right" onClick={handleGuidelinesClick} onKeyDown={handleGuidelinesClick} role="button">Posting guidelines</div>
    <div className="answer-form-buttonbar">
      {/* Submit button -- pops up a fake login modal. */}
      <button type="button" className="small-black-button" onClick={handleLoginClick}>Submit</button>
      {/* Cancel button -- closes the form. */}
      {zeroAnswers ? null : <button type="button" className="small-white-button" onClick={handleAnswerFormCancelClick}>Cancel</button>}
    </div>
  </div>
);

export default AnswerForm;
