import React from 'react';
import ReactDOM from 'react-dom';

// Refactored to create modals in simpler way.
const GuidelinesModal = ({ restaurantID, handleGuidelinesCancelClick }) => (
  // Gray background
  <div className="modal-background">
    {/* White box */}
    <div className="modal-guidelines">
      {/* Cancel button */}
      <div className="modal-x-button" onClick={handleGuidelinesCancelClick}>&#x1F5D9;</div>
      {/* Box text */}
      <div className="guidelines-header">Before you post...</div>
      <div className="guidelines-subheader">Please keep in mind:</div>
      <ul>
        <li className="guidelines-list-element">Questions should be directly relevant to visiting Seattle.</li>
        <li className="guidelines-list-element">If you have a customer service issue, please contact the business directly. For questions about visiting a destination, check out <a href={`/${restaurantID}/`}>Tripadvisor Forums</a>.</li>
        <li className="guidelines-list-element">Answers should be objective and to the point.</li>
        <li className="guidelines-list-element">Links, contact information, and advertising are not permitted.</li>
        <li className="guidelines-list-element">Questions and answers must adhere to our <a href={`/${restaurantID}/`}>Questions and Answers Guidelines</a>.</li>
      </ul>
    </div>
  </div>
);


export default GuidelinesModal;
