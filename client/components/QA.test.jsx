import React from 'react';
import Enzyme from 'enzyme';
import QA from './QA';
import AllQuestionsLink from './AllQuestionsLink';
import AskButton from './AskButton';
import AskForm from './AskForm';
import QsAndAsBox from './QsAndAsBox';

it('contains all the correct components', () => {
  const wrap = Enzyme.shallow(<QA />);
  expect(wrap.exists());
  expect(wrap.containsMatchingElement(<div id="title">Questions & Answers</div>)).toBeTruthy();
  expect(wrap.containsMatchingElement(<AllQuestionsLink />)).toBeTruthy();
  expect(wrap.containsMatchingElement(<AskButton />)).toBeTruthy();
  expect(wrap.containsMatchingElement(<AskForm />)).toBeTruthy();
  expect(wrap.containsMatchingElement(<QsAndAsBox />)).toBeTruthy();
});