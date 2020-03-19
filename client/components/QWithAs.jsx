import React from 'react';
import moment from 'moment';
import Headshot from './Headshot';
import AnswerForm from './AnswerForm';
import AnswersBox from './AnswersBox';
import LoginModal from './LoginModal';

class QWithAs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAnswerForm: false,
      extendAnswers: false,
      showLoginModal: false,
    };
    this.handleAnswerButtonClick = this.handleAnswerButtonClick.bind(this);
    this.handleAnswerFormCancelClick = this.handleAnswerFormCancelClick.bind(this);
    this.handleExtendAnswersClick = this.handleExtendAnswersClick.bind(this);
  }

  handleAnswerButtonClick() {
    this.setState({
      showAnswerForm: true,
    });
  }

  handleAnswerFormCancelClick() {
    this.setState({
      showAnswerForm: false,
    });
  }

  handleExtendAnswersClick() {
    this.setState({
      extendAnswers: true,
    });
  }

  render() {
    const { question, restaurantID, handleGuidelinesClick, handleLoginClick } = this.props;
    const { showAnswerForm, extendAnswers } = this.state;
    return (
      <div key={question._id} className="container">
        <div className="headshot">
          <Headshot username={question.author.username} avatarUrl={question.author.avatarUrl} />
        </div>
        <div className="question-with-answers">
          <a className="question-text no-color-link" href={`/${restaurantID}/`}>{question.text}</a>
          <div className="question-date">{moment(question.date).format('MMMM D, YYYY')} | <span><img className="small-flag" src="./images/flag-icon.png" onClick={handleLoginClick} /><span className="flag-tooltip">Problem with this question?</span></span></div>
          <button type="button" className="small-black-button" onClick={this.handleAnswerButtonClick}>Answer</button>
          {question.answers.length > 1 ? <button type="button" className="small-white-button" onClick={this.handleExtendAnswersClick}>Show all {question.answers.length} answers</button> : null}
          {showAnswerForm ? <AnswerForm restaurantID={restaurantID} handleAnswerFormCancelClick={this.handleAnswerFormCancelClick} handleGuidelinesClick={handleGuidelinesClick} handleLoginClick={handleLoginClick} /> : null}
          <AnswersBox extendAnswers={extendAnswers} question={question} handleLoginClick={handleLoginClick} />
        </div>
      </div>
    );
  }
}

export default QWithAs;
