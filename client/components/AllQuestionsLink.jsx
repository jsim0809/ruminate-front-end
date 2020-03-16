import React from 'react';

const AllQuestionsLink = ({ questionsCount }) => (
  <div id="all-questions-link">
    <a href="/">
      {`See all ${questionsCount} questions`}
    </a>
  </div>
);

export default AllQuestionsLink;
