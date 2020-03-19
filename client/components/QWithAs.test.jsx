import React from 'react';
import Enzyme from 'enzyme';
import QWithAs from './QWithAs';
import Headshot from './Headshot';
import Flag from './Flag';
import AnswerForm from './AnswerForm';
import AnswersBox from './AnswersBox';

it('contains all the correct components', () => {
  const wrap = Enzyme.shallow(<QWithAs />);
  expect(wrap.exists());
  expect(wrap.containsMatchingElement(<Headshot />)).toBeTruthy();
  expect(wrap.containsMatchingElement(<Flag />)).toBeTruthy();
  expect(wrap.containsMatchingElement(<AnswerForm />)).toBeTruthy();
  expect(wrap.containsMatchingElement(<AnswersBox />)).toBeTruthy();
});