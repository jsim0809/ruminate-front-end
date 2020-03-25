import React from 'react';
import VoteSwitch from './VoteSwitch';

/**
 * Extendable answers box. Is passed a boolean representing whether to extend or not.
 * Parent: QWithAs
 * Children: VoteSwitch
 */
const AnswersBox = ({ extendAnswers, question, handleLoginClick }) => {
  const sortedAnswers = question.answers.sort((a, b) => b.votes - a.votes);
  const allAnswers = sortedAnswers.map((answer) => (
    <div className="answer-block" key={answer._id}>
      <div className="answer-left-line">
        <VoteSwitch votes={answer.votes} handleLoginClick={handleLoginClick} />
        {/* Uses an invisible <span> that becomes visible when the flag is hovered over. */}
        <div className="answer-header">
          {`Response from ${answer.author.username} | Reviewed this property | `}
          <span>
            <img className="large-flag" alt="Report this answer" src="https://jeremy-fec.s3-us-west-2.amazonaws.com/flag-icon.png" onClick={handleLoginClick} onKeyDown={handleLoginClick} />
            <span className="flag-tooltip">Problem with this answer?</span>
          </span>
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
