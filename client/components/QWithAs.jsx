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

    };
  }

  render() {
    return (
      <div>
        <Headshot />
        <div>Here is a question.</div>
        <Flag />
        <AnswerForm />
        <AnswersBox />
      </div>
    );
  }
}

export default QWithAs;
