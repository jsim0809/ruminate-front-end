import React from 'react';

// Helper function to draw the complicated scroll bar numbering scheme
const mapScrollNumbers = (currPage, numPages, handlePageSelectionClick) => {
  const result = [];
  // If pages is less than 7, simply render all the pages.
  if (numPages <= 7) {
    for (let i = 1; i <= numPages; i += 1) {
      // This block, repeated throughout this function, renders the className as scroll-number-selected only if we are on the selected number.
      const isSelectedPage = currPage === i;
      result.push(isSelectedPage ? <div className="scroll-number-selected">{i}</div> : <div className="scroll-number" onClick={handlePageSelectionClick}>{i}</div>);
    }
    // If more than 7 pages, and selected on 1-4, put an ellipsis at the end.
  } else if (currPage <= 4) {
    for (let i = 1; i <= 6; i += 1) {
      const isSelectedPage = currPage === i;
      result.push(isSelectedPage ? <div className="scroll-number-selected">{i}</div> : <div className="scroll-number" onClick={handlePageSelectionClick}>{i}</div>);
    }
    result.push(<div className="scroll-ellipsis">...</div>);
    result.push(<div className="scroll-number" onClick={handlePageSelectionClick}>{numPages}</div>);
    // If more than 7 pages and selected on a higher number, put an ellipsis at the beginning. Render the current number +- 2.
  } else {
    result.push(<div className="scroll-number" onClick={handlePageSelectionClick}>1</div>);
    result.push(<div className="scroll-ellipsis">...</div>);
    for (let i = currPage - 2; (i <= currPage + 2) && (i <= numPages); i += 1) {
      const isSelectedPage = currPage === i;
      result.push(isSelectedPage ? <div className="scroll-number-selected">{i}</div> : <div className="scroll-number" onClick={handlePageSelectionClick}>{i}</div>);
    }
    // If the current number is close enough to the total, no need a second ellipsis. But if it isn't, render an ellipsis.
    if (currPage === (numPages - 3)) {
      result.push(<div className="scroll-number" onClick={handlePageSelectionClick}>{numPages}</div>);
    } else if (currPage < (numPages - 3)) {
      result.push(<div className="scroll-ellipsis">...</div>);
      result.push(<div className="scroll-number" onClick={handlePageSelectionClick}>{numPages}</div>);
    }
  }
  return result;
};

// The scroller at the bottom that allows you to change the displayed questions.
// Should receive the number of pages needed and some click handler functions as props.
const Scroller = ({
  currPage,
  numPages,
  handlePreviousButtonClick,
  handlePageSelectionClick,
  handleNextButtonClick
}) => (
    <div id="scroller">
      <button type="button" className="large-white-button" onClick={handlePreviousButtonClick}>Previous</button>
      <div id="scroll-numbers">
        {mapScrollNumbers(currPage, numPages, handlePageSelectionClick)}
      </div>
      <button type="button" className="large-black-button" onClick={handleNextButtonClick}>Next</button>
    </div>
  );

export default Scroller;
