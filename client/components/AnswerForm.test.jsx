import React from 'react';
import Enzyme from 'enzyme';
import AnswerForm from './AnswerForm';
import GuidelinesModal from './GuidelinesModal';

it('contains all the correct components', () => {
  const wrap = Enzyme.shallow(<AnswerForm />);
  expect(wrap.exists());
});