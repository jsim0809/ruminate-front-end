import React from 'react';

const AskButton = ({ buttonHandler }) => (
  <button type="button" id="ask-button" onClick={buttonHandler}>Ask a question</button>
);

export default AskButton;
