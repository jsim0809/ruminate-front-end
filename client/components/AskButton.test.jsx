import React from 'react';
import Enzyme from 'enzyme';
import AskButton from './AskButton';

it('contains all the correct components', () => {
  const wrap = Enzyme.shallow(<AskButton />);
  expect(wrap.exists());
});