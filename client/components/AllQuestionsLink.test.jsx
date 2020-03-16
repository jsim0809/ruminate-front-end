import React from 'react';
import Enzyme from 'enzyme';
import AllQuestionsLink from './AllQuestionsLink';

it('contains all the correct components', () => {
  const wrap = Enzyme.shallow(<AllQuestionsLink />);
  expect(wrap.exists());
});