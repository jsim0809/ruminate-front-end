import React from 'react';
import Enzyme from 'enzyme';
import AnswerForm from './AnswerForm';

it('contains all the correct components', () => {
  const wrap = Enzyme.shallow(<AnswerForm />);
  expect(wrap.exists());
});