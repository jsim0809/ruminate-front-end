import React from 'react';

/**
 * The "See all questions" link that goes under the top header.
 * Parent: QA
 * Children: none
 */
const AllQuestionsLink = ({ questionsCount, restaurantID }) => (
  <div id="all-questions-link">
    <a className="no-color-link" href={`/${restaurantID}/`}>
      {`See all ${questionsCount} questions`}
    </a>
  </div>
);

export default AllQuestionsLink;
