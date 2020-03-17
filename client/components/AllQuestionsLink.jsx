import React from 'react';

const AllQuestionsLink = ({ questionsCount, restaurantID }) => (
  <div id="all-questions-link">
    <a className="no-color-link" href={`/${restaurantID}/`}>
      {`See all ${questionsCount} questions`}
    </a>
  </div>
);

export default AllQuestionsLink;
