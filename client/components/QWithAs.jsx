import React from 'react';
import moment from 'moment';
import Headshot from './Headshot';
import AnswerForm from './AnswerForm';
import AnswersBox from './AnswersBox';

/**
 * Contains one question, the answer form, and all answers to that question.
 * Parent: QsAndAsBox
 * Children: Headshot, AnswerForm, AnswersBox
 */
class QWithAs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAnswerForm: false,
      extendAnswers: false,
      zeroAnswers: false,
    };
    this.handleAnswerButtonClick = this.handleAnswerButtonClick.bind(this);
    this.handleAnswerFormCancelClick = this.handleAnswerFormCancelClick.bind(this);
    this.handleExtendAnswersClick = this.handleExtendAnswersClick.bind(this);
  }

  componentDidMount() {
    const { question } = this.props;
    if (question.answers.length === 0) {
      this.setState({
        showAnswerForm: true,
        zeroAnswers: true,
      });
    }
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
    const { extendAnswers } = this.state;
    this.setState({
      extendAnswers: !extendAnswers,
    });
  }

  render() {
    const {
      question,
      restaurantID,
      handleGuidelinesClick,
      handleLoginClick,
    } = this.props;
    const { showAnswerForm, extendAnswers, zeroAnswers } = this.state;
    return (
      <div key={question._id} className="container">
        <div className="headshot">
          <Headshot username={question.author.username} avatarUrl={question.author.avatarUrl} />
        </div>
        <div className="question-with-answers">
          <a className="question-text no-color-link" href={`/${restaurantID}/`}>{question.text}</a>
          {/* Uses an invisible <span> that becomes visible when the flag is hovered over. */}
          <div className="question-date">
            {`${moment(question.date).format('MMMM D, YYYY')} | `}
            <span>
              <img className="small-flag" src="http://localhost:3004/images/flag-icon.png" onClick={handleLoginClick} onKeyDown={handleLoginClick} alt="Report flag" />
              <span className="flag-tooltip">Problem with this question?</span>
            </span>
          </div>
          {zeroAnswers ? null : <button type="button" className="small-black-button" onClick={this.handleAnswerButtonClick}>Answer</button>}
          {question.answers.length > 1
            ? (
              <button type="button" className="small-white-button" onClick={this.handleExtendAnswersClick}>
                {extendAnswers ? 'Hide all answers' : `Show all ${question.answers.length} answers`}
              </button>
            )
            : null}
          {showAnswerForm
            ? (
              <AnswerForm
                handleAnswerFormCancelClick={this.handleAnswerFormCancelClick}
                handleGuidelinesClick={handleGuidelinesClick}
                handleLoginClick={handleLoginClick}
                zeroAnswers={zeroAnswers}
              />
            )
            : null}
          <AnswersBox
            extendAnswers={extendAnswers}
            question={question}
            handleLoginClick={handleLoginClick}
          />
        </div>
      </div>
    );
  }
}

export default QWithAs;
