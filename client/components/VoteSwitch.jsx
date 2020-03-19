import React from 'react';

// THe upvote-downvote thing on the side of answers.
const VoteSwitch = ({ votes, handleLoginClick }) => (
  <div className="vote-container float-right">
    <div className="upvote" onClick={handleLoginClick} />
    <div className="vote-counter">
      <div>{votes}</div>
      <div className="votes-word">{votes === 1 ? 'Vote' : 'Votes'}</div>
    </div>
    <div className="downvote" onClick={handleLoginClick} />
  </div>
);

export default VoteSwitch;
