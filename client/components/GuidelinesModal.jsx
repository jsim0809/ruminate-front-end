import React from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal-root');

class GuidelinesModal extends React.Component {
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
    const { restaurantID } = this.props;
    return ReactDOM.createPortal(
      <div className="modal-background">
        <div className="modal-guidelines">
          <div className="modal-x-button">&#x1F5D9;</div>
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
      this.el,
    );
  }
}

export default GuidelinesModal;
