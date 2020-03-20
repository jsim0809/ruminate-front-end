import React from 'react';
import Enzyme from 'enzyme';
import QA from './QA';
import AskButton from './AskButton';
import AllQuestionsLink from './AllQuestionsLink';
import QsAndAsBox from './QsAndAsBox';
import AskForm from './AskForm';
import GuidelinesModal from './GuidelinesModal';
import LoginModal from './LoginModal';

it('exists and contains all the correct components', () => {
  const wrap = Enzyme.mount(<QA />);
  expect(wrap.exists());
  expect(wrap.containsMatchingElement(<AskButton />)).toBeTruthy();
  expect(wrap.containsMatchingElement(<AllQuestionsLink />)).toBeTruthy();
  expect(wrap.containsMatchingElement(<QsAndAsBox />)).toBeTruthy();
});

it('renders and removes the AskForm when the corresponding buttons are pressed', () => {
  const wrap = Enzyme.mount(<QA />);
  expect(wrap.containsMatchingElement(<AskForm />)).toBeFalsy();
  wrap.find(AskButton).simulate('click');
  expect(wrap.containsMatchingElement(<AskForm />)).toBeTruthy();
  wrap.find('#ask-form .large-white-button').simulate('click');
  expect(wrap.containsMatchingElement(<AskForm />)).toBeFalsy();
});

it('renders and removes the GuidelinesModal when the corresponding buttons are pressed', () => {
  const wrap = Enzyme.mount(<QA />);
  expect(wrap.containsMatchingElement(<GuidelinesModal />)).toBeFalsy();
  wrap.find(AskButton).simulate('click');
  wrap.find('#ask-form .guidelines').simulate('click');
  expect(wrap.containsMatchingElement(<GuidelinesModal />)).toBeTruthy();
  wrap.find('.modal-guidelines .modal-x-button').simulate('click');
  expect(wrap.containsMatchingElement(<GuidelinesModal />)).toBeFalsy();
});

// it('renders and removes the LoginModal when the corresponding buttons are pressed', () => {
//   const wrap = Enzyme.mount(<QA />);
//   expect(wrap.containsMatchingElement(<LoginModal />)).toBeFalsy();
//   wrap.find(AskButton).simulate('click');
//   expect(wrap.containsMatchingElement(<LoginModal />)).toBeTruthy();
//   wrap.find('#ask-form .large-white-button').simulate('click');
//   expect(wrap.containsMatchingElement(<LoginModal />)).toBeFalsy();
// });
