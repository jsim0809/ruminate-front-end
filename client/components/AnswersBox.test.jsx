import React from 'react';
import Enzyme from 'enzyme';
import AnswersBox from './AnswersBox';

it('contains all the correct components', () => {
  const wrap = Enzyme.shallow(<AnswersBox />);
  expect(wrap.exists());
});