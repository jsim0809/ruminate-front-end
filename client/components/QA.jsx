import React from 'react';
import AllQuestionsLink from './AllQuestionsLink';
import AskButton from './AskButton';
import AskForm from './AskForm';
import QsAndAsBox from './QsAndAsBox';

class QA extends React.Component {
  constructor(props) {
    super(props);
    const { restaurantID } = this.props;
    this.state = {
      restaurantID,
      showAskForm: false,
      questions: [],
    };
    this.handleAskButtonClick = this.handleAskButtonClick.bind(this);
  }

  componentDidMount() {
    const { restaurantID } = this.state;
    fetch(`http://localhost:3004/api/questions/${restaurantID}/`)
      .then((data) => data.json())
      .then((questions) => {
        this.setState((oldState) => {
          const newState = { ...oldState };
          newState.questions = questions;
          return newState;
        });
      });
  }

  handleAskButtonClick() {
    this.setState((oldState) => {
      const newState = { ...oldState };
      newState.showAskForm = true;
      return newState;
    });
  }

  render() {
    const { showAskForm } = this.state;
    return (
      <div>
        <div id="block-header">
          <AskButton buttonHandler={this.handleAskButtonClick} />
          <div id="block-title">Questions & Answers</div>
          <AllQuestionsLink questionsCount="12" />
          <div />
        </div>
        {showAskForm ? <AskForm /> : <div />}
        <QsAndAsBox />
      </div>
    );
  }
}

export default QA;
