import React from 'react';
import ReactDOM from 'react-dom';

// Creates a reference to the modal-root node, which is separate from the main root node.
const modalRoot = document.getElementById('modal-root');

class LoginModal extends React.Component {
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
    const { restaurantID, handleLoginCancelClick } = this.props;
    return ReactDOM.createPortal(
      // Gray background
      <div className="modal-background">
        <div className="modal-login">
          {/* Cancel button */}
          <div className="modal-x-button" onClick={handleLoginCancelClick}>&#x1F5D9;</div>
          {/* Fake login picture */}
          <img src="./images/login.png" />
        </div>
      </div>,
      this.modal,
    );
  }
}

export default LoginModal;
