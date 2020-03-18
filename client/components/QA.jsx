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
    this.handleAskFormCancelClick = this.handleAskFormCancelClick.bind(this);
  }

  // When the component mounts, fetch questions data from the server and save it in state.
  componentDidMount() {
    const { restaurantID } = this.state;
    fetch(`/api/questions/${restaurantID}/`)
      .then((data) => data.json())
      .then((questions) => {
        console.log(questions);
        this.setState({
          questions,
        });
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

  render() {
    const { restaurantID, showAskForm, questions } = this.state;
    return (
      <div>
        {/* Header section */}
        <div id="block-header">
          <AskButton buttonHandler={this.handleAskButtonClick} />
          <div id="block-title">Questions & Answers</div>
          <AllQuestionsLink questionsCount={questions.length} restaurantID={restaurantID} />
          <div />
        </div>
        {/* AskForm -- only shows when button is clicked */}
        {showAskForm ? <AskForm restaurantID={restaurantID} handleAskFormCancelClick={this.handleAskFormCancelClick} /> : null}
        {/* Body section with lots of Qs and As */}
        <QsAndAsBox questions={questions} />
      </div>
    );
  }
}

export default QA;
