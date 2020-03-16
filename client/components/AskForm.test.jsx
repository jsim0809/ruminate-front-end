import React from 'react';
import Enzyme from 'enzyme';
import AskForm from './AskForm';
import GuidelinesModal from './GuidelinesModal';

it('contains all the correct components', () => {
  const wrap = Enzyme.shallow(<AskForm />);
  expect(wrap.exists());
  expect(wrap.containsMatchingElement(<GuidelinesModal />)).toBeTruthy();
});