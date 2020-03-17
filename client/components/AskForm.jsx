import React from 'react';
import GuidelinesModal from './GuidelinesModal';
import LoginModal from './LoginModal';

class AskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showGuidelinesModal: false,
      showLoginModal: false,
    };
    this.textfield = React.createRef();
    this.handleGuidelinesClick = this.handleGuidelinesClick.bind(this);
    this.handleGuidelinesCancelClick = this.handleGuidelinesCancelClick.bind(this);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLoginCancelClick = this.handleLoginCancelClick.bind(this);
  }

  // Set the keyboard's focus on the text field.
  componentDidMount() {
    this.textfield.current.focus();
  }

  handleGuidelinesClick() {
    this.setState({
      showGuidelinesModal: true,
    });
  }

  handleGuidelinesCancelClick() {
    this.setState({
      showGuidelinesModal: false,
    });
  }

  handleLoginClick() {
    this.setState({
      showLoginModal: true,
    });
  }

  handleLoginCancelClick() {
    this.setState({
      showLoginModal: false,
    });
  }


  render() {
    const { restaurantID, buttonHandler } = this.props;
    const { showGuidelinesModal, showLoginModal } = this.state;
    return (
      <div id="ask-form">
        <div id="ask-form-header">
          {`Get quick answers from Restaurant ${restaurantID} staff and past visitors.`}
        </div>
        <div id="ask-form-subheader">Note: your question will be posted publicly on the Questions & Answers page.</div>
        <textarea id="ask-form-textfield" ref={this.textfield} placeholder="Hi, what would you like to know about this restaurant?" />
        <div className="guidelines float-right" onClick={this.handleGuidelinesClick}>Posting guidelines</div>
        {showGuidelinesModal ? <GuidelinesModal restaurantID={restaurantID} handleGuidelinesCancelClick={this.handleGuidelinesCancelClick} /> : null}
        <button type="button" className="large-black-button" onClick={this.handleLoginClick}>Submit</button>
        {showLoginModal ? <LoginModal handleLoginCancelClick={this.handleLoginCancelClick} /> : null}
        <button type="button" className="large-white-button" onClick={buttonHandler}>Cancel</button>
      </div>
    );
  }
}

export default AskForm;
