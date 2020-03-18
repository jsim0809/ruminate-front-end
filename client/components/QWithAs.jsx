import React from 'react';
import Headshot from './Headshot';
import Flag from './Flag';
import AnswerForm from './AnswerForm';
import AnswersBox from './AnswersBox';

// TODO: Implement
class QWithAs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAnswerForm: false,
    };
  }

  render() {
    const { question } = this.props;
    return (
      <div key={question._id} className="container">
        <div className="headshot">
          <Headshot username={question.author.username} avatarUrl={question.author.avatarUrl} />
        </div>
        <div className="question-with-answers">
          <div>{question.text}</div>
          <div>{question.date}</div>
          <Flag />
          <div>Answer</div>
          <div>See all X answers</div>
          <AnswerForm />
          <AnswersBox />
        </div>
      </div>
    );
  }
}

export default QWithAs;
