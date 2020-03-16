import React from 'react';
import Enzyme from 'enzyme';
import Answer from './Answer';
import Flag from './Flag';
import VoteSwitch from './VoteSwitch';

it('contains all the correct components', () => {
  const wrap = Enzyme.shallow(<Answer />);
  expect(wrap.exists());
  expect(wrap.containsMatchingElement(<Flag />)).toBeTruthy();
  expect(wrap.containsMatchingElement(<VoteSwitch />)).toBeTruthy();
});