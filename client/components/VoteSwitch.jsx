import React from 'react';

/**
* The upvote-downvote thing on the side of answers.
* Parent: AnswersBox
* Children: none
*/
const VoteSwitch = ({ votes, handleLoginClick }) => (
  <div className="vote-container float-right">
    <div className="upvote" onClick={handleLoginClick} onKeyDown={handleLoginClick} role="button">
      <span className="vote-tooltip">Helpful answer</span>
    </div>
    <div className="vote-counter">
      <div>{votes}</div>
      <div className="votes-word">{votes === 1 ? 'Vote' : 'Votes'}</div>
    </div>
    <div className="downvote" onClick={handleLoginClick} onKeyDown={handleLoginClick} role="button">
      <span className="vote-tooltip">Not as helpful</span>
    </div>
  </div>
);

export default VoteSwitch;
