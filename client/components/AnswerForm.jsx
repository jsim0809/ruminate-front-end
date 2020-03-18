import React from 'react';
import GuidelinesModal from './GuidelinesModal';
import LoginModal from './LoginModal';

// "Answer a question" form that pops up when the button is clicked.
class AnswerForm extends React.Component {
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
    const { restaurantID, handleAnswerFormCancelClick } = this.props;
    const { showGuidelinesModal, showLoginModal } = this.state;
    return (
      <div className="answer-form">
        {/* Prompt text */}
        <div className="answer-form-header">WHAT IS YOUR ANSWER?</div>
        {/* Text field */}
        <textarea className="answer-form-textfield" ref={this.textfield} placeholder="Can you answer this question? Enter your answer here." />
        {/* Posting guidelines -- pops up a modal. */}
        <div className="guidelines float-right" onClick={this.handleGuidelinesClick}>Posting guidelines</div>
        <div className="answer-form-buttonbar">
          {showGuidelinesModal ? <GuidelinesModal restaurantID={restaurantID} handleGuidelinesCancelClick={this.handleGuidelinesCancelClick} /> : null}
          {/* Submit button -- pops up a fake login modal. */}
          <button type="button" className="small-black-button" onClick={this.handleLoginClick}>Submit</button>
          {showLoginModal ? <LoginModal handleLoginCancelClick={this.handleLoginCancelClick} /> : null}
          {/* Cancel button -- closes the form. */}
          <button type="button" className="small-white-button" onClick={handleAnswerFormCancelClick}>Cancel</button>
        </div>
      </div>
    );
  }
}

export default AnswerForm;
