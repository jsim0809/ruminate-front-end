import React from 'react';

// The upvote-downvote thing on the side of answers.
class VoteSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showHelpfulTooltip: false,
      showUnhelpfulTooltip: false,
    };
  }

  render() {
    const { votes, handleLoginClick } = this.props;
    return (
      <div className="vote-container float-right">
        <div className="upvote" onClick={handleLoginClick}>
          <span className="vote-tooltip">Helpful answer</span>
        </div>
        <div className="vote-counter">
          <div>{votes}</div>
          <div className="votes-word">{votes === 1 ? 'Vote' : 'Votes'}</div>
        </div>
        <div className="downvote" onClick={handleLoginClick}>
          <span className="vote-tooltip">Not as helpful</span>
        </div>
      </div>
    );
  }
}

export default VoteSwitch;
