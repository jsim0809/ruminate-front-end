import React from 'react';

/**
 * "Ask a question" button that pops up the AskForm when clicked.
 * Parent: QA
 * Children: none
 */
const AskButton = ({ handleAskButtonClick }) => (
  <button type="button" className="large-black-button float-right" onClick={handleAskButtonClick}>Ask a question</button>
);

export default AskButton;
