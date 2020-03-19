import React from 'react';
import ReactDOM from 'react-dom';

// Creates a reference to the modal-root node, which is separate from the main root node.
const modalRoot = document.getElementById('modal-root');

class GuidelinesModal extends React.Component {
  constructor(props) {
    super(props);

    // Creates a new div node object to constructed on.
    this.modal = document.createElement('div');
  }

  // When this React component initializes, mount this.modal to the modal root.
  componentDidMount() {
    modalRoot.appendChild(this.modal);
  }

  // When this React component is deinitialized, remove this.modal from the modal root.
  componentWillUnmount() {
    modalRoot.removeChild(this.modal);
  }

  // Constructs the new div object defined as this.modal.
  // (It's passed as the second argument to ReactDOM.createPortal.)
  render() {
    const { restaurantID, handleGuidelinesCancelClick } = this.props;
    return ReactDOM.createPortal(
      // Gray background
      <div className="modal-background">
        {/* White box */}
        <div className="modal-guidelines">
          {/* Cancel button */}
          <div className="modal-x-button" onClick={handleGuidelinesCancelClick}>&#x1F5D9;</div>
          {/* Box text */}
          <div className="guidelines-header">Before you post...</div>
          <div className="guidelines-subheader">Please keep in mind:</div>
          <ul>
            <li className="guidelines-list-element">Questions should be directly relevant to visiting Seattle.</li>
            <li className="guidelines-list-element">If you have a customer service issue, please contact the business directly. For questions about visiting a destination, check out <a href={`/${restaurantID}/`}>Tripadvisor Forums</a>.</li>
            <li className="guidelines-list-element">Answers should be objective and to the point.</li>
            <li className="guidelines-list-element">Links, contact information, and advertising are not permitted.</li>
            <li className="guidelines-list-element">Questions and answers must adhere to our <a href={`/${restaurantID}/`}>Questions and Answers Guidelines</a>.</li>
          </ul>
        </div>
      </div>,
      this.modal,
    );
  }
}

export default GuidelinesModal;
