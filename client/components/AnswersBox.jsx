import React from 'react';
import VoteSwitch from './VoteSwitch';

// Extendable answers box. Is passed a boolean representing whether to extend or not.
const AnswersBox = ({ extendAnswers, question, handleLoginClick }) => {
  if (extendAnswers || !question.answers.length) {
    return (
      <div>
        {question.answers.map((answer) => (
          <div className="answer-block">
            <div className="answer-left-line">
              <VoteSwitch votes={answer.votes} handleLoginClick={handleLoginClick} />
              <div className="answer-header">
                Response from {answer.author.username} | Reviewed this property | <img className="large-flag" src="./images/flag-icon.png" onClick={handleLoginClick} />
              </div>
              <div className="answer-text">
                {answer.text}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="answer-block">
      <div className="answer-left-line">
        <VoteSwitch votes={question.answers[0].votes} handleLoginClick={handleLoginClick} />
        <div className="answer-header">
          Response from {question.answers[0].author.username} | Reviewed this property | <img className="large-flag" src="./images/flag-icon.png" onClick={handleLoginClick} />
        </div>
        <div className="answer-text">
          {question.answers[0].text}
        </div>
      </div>
    </div>
  );
};

export default AnswersBox;
