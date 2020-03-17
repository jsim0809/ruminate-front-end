import React from 'react';
import GuidelinesModal from './GuidelinesModal';

class AskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
    this.textfield = React.createRef();
    this.handleGuidelinesClick = this.handleGuidelinesClick.bind(this);
  }

  // Set the keyboard's focus on the text field.
  componentDidMount() {
    this.textfield.current.focus();
  }

  handleGuidelinesClick() {
    this.setState({
      showModal: true,
    });
  }

  render() {
    const { restaurantID, buttonHandler } = this.props;
    return (
      <div id="ask-form">
        <div id="ask-form-header">
          {`Get quick answers from Restaurant ${restaurantID} staff and past visitors.`}
        </div>
        <div id="ask-form-subheader">Note: your question will be posted publicly on the Questions & Answers page.</div>
        <textarea id="ask-form-textfield" ref={this.textfield} placeholder="Hi, what would you like to know about this restaurant?" />
        <div className="guidelines float-right" onClick={this.handleGuidelinesClick}>Posting guidelines</div>
        {this.state.showModal ? <GuidelinesModal restaurantID={restaurantID} /> : <div />}
        <button type="button" className="large-black-button">Submit</button>
        <button type="button" className="large-white-button" onClick={buttonHandler}>Cancel</button>
      </div>
    );
  }
}

export default AskForm;
