import React from 'react';
import Answer from './Answer';

// TODO: Implement
class AnswersBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Answer />
        <Answer />
      </div>
    );
  }
}

export default AnswersBox;
