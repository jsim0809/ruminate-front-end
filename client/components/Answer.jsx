import React from 'react';
import Flag from './Flag';
import VoteSwitch from './VoteSwitch';

// TODO: Implement
class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <div>Here is the answerers info.</div>
        <div>Here is the answer text.</div>
        <Flag />
        <VoteSwitch />
      </div>
    );
  }
}

export default Answer;
