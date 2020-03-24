import React from 'react';
import VoteSwitch from './VoteSwitch';

// Extendable answers box. Is passed a boolean representing whether to extend or not.
const AnswersBox = ({ extendAnswers, question, handleLoginClick }) => {
  const allAnswers = question.answers.map((answer) => (
    <div className="answer-block" key={answer._id}>
      <div className="answer-left-line">
        <VoteSwitch votes={answer.votes} handleLoginClick={handleLoginClick} />
        {/* Uses an invisible <span> that becomes visible when the flag is hovered over. */}
        <div className="answer-header">
          Response from {answer.author.username} | Reviewed this property | <span><img className="large-flag" src="./images/flag-icon.png" onClick={handleLoginClick} /><span className="flag-tooltip">Problem with this answer?</span></span>
        </div>
        <div className="answer-text">
          {answer.text}
        </div>
      </div>
    </div>
  ));

  if (extendAnswers || !question.answers.length) {
    return (
      <div>
        {allAnswers}
      </div>
    );
  }

  return (
    <div>
      {allAnswers[0]}
    </div>
  );
};

export default AnswersBox;
