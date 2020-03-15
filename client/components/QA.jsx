import React from 'react';
import AllQuestionsLink from './AllQuestionsLink';
import AskButton from './AskButton';
import AskForm from './AskForm';
import QsAndAsBox from './QsAndAsBox';

class QA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div id="fullblock">
        <div id="title">Questions & Answers</div>
        <AllQuestionsLink />
        <AskButton />
        <AskForm />
        <QsAndAsBox />
      </div>
    );
  }
}

export default QA;
