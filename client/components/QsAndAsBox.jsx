import React from 'react';
import QWithAs from './QWithAs';

// TODO: Implement
class QsAndAsBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <QWithAs />
        <QWithAs />
        <QWithAs />
        <div>Scroller</div>
      </div>
    );
  }
}

export default QsAndAsBox;
