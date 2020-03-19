import React from 'react';
import GuidelinesModal from './GuidelinesModal';
import LoginModal from './LoginModal';

// "Ask a question" form that pops up when the button is clicked.
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
    const { restaurantID, handleAskFormCancelClick } = this.props;
    const { showGuidelinesModal, showLoginModal } = this.state;
    return (
      <div id="ask-form">
        {/* Prompt text */}
        <div id="ask-form-header">
          {`Get quick answers from Restaurant ${restaurantID} staff and past visitors.`}
        </div>
        <div id="ask-form-subheader">Note: your question will be posted publicly on the Questions & Answers page.</div>
        {/* Text field */}
        <textarea id="ask-form-textfield" ref={this.textfield} placeholder="Hi, what would you like to know about this restaurant?" />
        {/* Posting guidelines -- pops up a modal. */}
        <div className="guidelines float-right" onClick={this.handleGuidelinesClick}>Posting guidelines</div>
        {showGuidelinesModal ? <GuidelinesModal restaurantID={restaurantID} handleGuidelinesCancelClick={this.handleGuidelinesCancelClick} /> : null}
        {/* Submit button -- pops up a fake login modal. */}
        <button type="button" className="large-black-button" onClick={this.handleLoginClick}>Submit</button>
        {showLoginModal ? <LoginModal handleLoginCancelClick={this.handleLoginCancelClick} /> : null}
        {/* Cancel button -- closes the form. */}
        <button type="button" className="large-white-button" onClick={handleAskFormCancelClick}>Cancel</button>
      </div>
    );
  }
}

export default AskForm;
