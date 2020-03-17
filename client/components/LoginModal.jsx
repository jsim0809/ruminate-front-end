import React from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal-root');

class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.el = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    const { restaurantID, handleLoginCancelClick } = this.props;
    return ReactDOM.createPortal(
      <div className="modal-background">
        <div className="modal-login">
          <div className="modal-x-button" onClick={handleLoginCancelClick}>&#x1F5D9;</div>
          <img src="./images/login.png" />
        </div>
      </div>,
      this.el,
    );
  }
}

export default LoginModal;
