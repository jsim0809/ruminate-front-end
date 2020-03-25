import React from 'react';
import Moment from 'moment';
import AllQuestionsLink from './AllQuestionsLink';
import AskButton from './AskButton';
import AskForm from './AskForm';
import QsAndAsBox from './QsAndAsBox';
import GuidelinesModal from './GuidelinesModal';
import LoginModal from './LoginModal';

/**
 * The overall Questions & Answers component. Contains everything else.
 * Parent: none
 * Children: AskButton, AllQuestionsLink, AskForm, QsAndAsBox, GuidelinesModal, LoginModal
 */
class QA extends React.Component {
  constructor(props) {
    super(props);
    const { restaurantID } = this.props;
    this.state = {
      restaurantID,
      showAskForm: false,
      questions: [],
      showGuidelinesModal: false,
      showLoginModal: false,
      zeroQuestions: false,
    };
    this.handleAskButtonClick = this.handleAskButtonClick.bind(this);
    this.handleAskFormCancelClick = this.handleAskFormCancelClick.bind(this);
    this.handleGuidelinesClick = this.handleGuidelinesClick.bind(this);
    this.handleGuidelinesCancelClick = this.handleGuidelinesCancelClick.bind(this);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLoginCancelClick = this.handleLoginCancelClick.bind(this);
  }

  // When the component mounts, fetch questions data from the server and save it in state.
  componentDidMount() {
    const { restaurantID } = this.state;
    fetch(`http://localhost:3004/api/questions/${restaurantID}/`)
      .then((data) => data.json())
      .then((questions) => {
        questions.sort((a, b) => new Moment(b.date).diff(new Moment(a.date)));
        this.setState({
          questions,
        });
        if (questions.length === 0) {
          this.setState({
            showAskForm: true,
            zeroQuestions: true,
          });
        }
      });
  }

  handleAskButtonClick() {
    this.setState({
      showAskForm: true,
    });
  }

  handleAskFormCancelClick() {
    this.setState({
      showAskForm: false,
    });
  }

  handleGuidelinesClick() {
    this.setState({
      showGuidelinesModal: true,
    });
  }

  handleGuidelinesCancelClick() {
    this.setState({
      showGuidelinesModal: false,
    });
  }

  handleLoginClick() {
    this.setState({
      showLoginModal: true,
    });
  }

  handleLoginCancelClick() {
    this.setState({
      showLoginModal: false,
    });
  }

  render() {
    const {
      restaurantID,
      questions,
      showAskForm,
      showGuidelinesModal,
      showLoginModal,
      zeroQuestions,
    } = this.state;
    return (
      <div>
        {/* Header section */}
        <div id="block-header">
          {zeroQuestions ? null : <AskButton handleAskButtonClick={this.handleAskButtonClick} />}
          <div id="block-title">Questions & Answers</div>
          <AllQuestionsLink questionsCount={questions.length} restaurantID={restaurantID} />
          <div />
        </div>
        {/* AskForm -- only shows when button is clicked */}
        {showAskForm ? (
          <AskForm
            restaurantID={restaurantID}
            handleAskFormCancelClick={this.handleAskFormCancelClick}
            handleGuidelinesClick={this.handleGuidelinesClick}
            handleLoginClick={this.handleLoginClick}
            zeroQuestions={zeroQuestions}
          />
        ) : null}
        {/* Body section with lots of Qs and As */}
        <QsAndAsBox
          questions={questions}
          restaurantID={restaurantID}
          handleGuidelinesClick={this.handleGuidelinesClick}
          handleLoginClick={this.handleLoginClick}
        />
        {/* Modals */}
        {showGuidelinesModal
          ? (
            <GuidelinesModal
              restaurantID={restaurantID}
              handleGuidelinesCancelClick={this.handleGuidelinesCancelClick}
            />
          )
          : null}
        {showLoginModal
          ? (
            <LoginModal handleLoginCancelClick={this.handleLoginCancelClick} />
          )
          : null}
      </div>
    );
  }
}

export default QA;
