import React from 'react';
import QWithAs from './QWithAs';
import Scroller from './Scroller';

// The large body section containing all the stored questions and answers, as well as the answer form and scroller.
class QsAndAsBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollerPage: 1,
    };
    this.handlePreviousButtonClick = this.handlePreviousButtonClick.bind(this);
    this.handlePageSelectionClick = this.handlePageSelectionClick.bind(this);
    this.handleNextButtonClick = this.handleNextButtonClick.bind(this);
  }

  numPages() {
    const { questions } = this.props;
    return 1 + Math.floor((questions.length - 1) / 3);
  }

  handlePreviousButtonClick() {
    const { scrollerPage } = this.state;
    this.setState({
      scrollerPage: scrollerPage - 1 || 1,
    });
  }

  handlePageSelectionClick(e) {
    this.setState({
      scrollerPage: Number(e.target.innerText),
    });
  }

  handleNextButtonClick() {
    const { scrollerPage } = this.state;
    this.setState({
      scrollerPage: scrollerPage === this.numPages() ? scrollerPage : scrollerPage + 1,
    });
  }

  render() {
    const { questions, restaurantID, handleGuidelinesClick, handleLoginClick } = this.props;
    const { scrollerPage } = this.state;
    return (
      <div>
        {/* Selects the 3 questions that we want, depending on the scroller state. */}
        {questions.slice((scrollerPage - 1) * 3, ((scrollerPage - 1) * 3) + 3).map((question, index) => (
          <QWithAs question={question} key={index} restaurantID={restaurantID} handleGuidelinesClick={handleGuidelinesClick} handleLoginClick={handleLoginClick} />
        ))}
        <Scroller currPage={scrollerPage} numPages={this.numPages()} handlePreviousButtonClick={this.handlePreviousButtonClick} handlePageSelectionClick={this.handlePageSelectionClick} handleNextButtonClick={this.handleNextButtonClick} />
      </div>
    );
  }
}

export default QsAndAsBox;
