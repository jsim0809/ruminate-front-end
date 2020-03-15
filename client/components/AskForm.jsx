import React from 'react';
import GuidelinesModal from './GuidelinesModal';

class AskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <div>Ask Form</div>
        <GuidelinesModal />
      </div>
    );
  }
}

export default AskForm;
