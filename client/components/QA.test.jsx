import React from 'react';
import Enzyme from 'enzyme';
import QA from './QA';

it('renders correctly', () => {
  const wrapper = Enzyme.shallow(<QA />);

  expect(wrapper.length).toBe(1);
  expect(wrapper.text()).toBe(`Questions & Answers<AllQuestionsLink /><AskButton /><AskForm /><QsAndAsBox />`);
});