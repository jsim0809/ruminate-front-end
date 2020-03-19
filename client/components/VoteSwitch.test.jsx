import React from 'react';
import Enzyme from 'enzyme';
import VoteSwitch from './VoteSwitch';

it('contains all the correct components', () => {
  const wrap = Enzyme.shallow(<VoteSwitch />);
  expect(wrap.exists());
});