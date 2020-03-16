import React from 'react';

const AskButton = ({ buttonHandler }) => (
  <button type="button" className="large-black-button float-right" onClick={buttonHandler}>Ask a question</button>
);

export default AskButton;
