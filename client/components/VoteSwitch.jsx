import React from 'react';

// THe upvote-downvote thing on the side of answers.
class VoteSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { votes } = this.props;
    return (
      <div className="vote-container float-right">
        <div className="upvote" />
        <div className="vote-counter">
          <div>{votes}</div>
          <div className="votes-word">{votes === 1 ? 'Vote' : 'Votes'}</div>
        </div>
        <div className="downvote" />
      </div>
    );
  }
}

export default VoteSwitch;
