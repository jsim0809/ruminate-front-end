import React from 'react';

// "Ask a question" button that pops up the AskForm when clicked.
const AskButton = ({ buttonHandler }) => (
  <button type="button" className="large-black-button float-right" onClick={buttonHandler}>Ask a question</button>
);

export default AskButton;
