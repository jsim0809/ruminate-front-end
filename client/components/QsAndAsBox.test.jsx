import React from 'react';
import Enzyme from 'enzyme';
import QsAndAsBox from './QsAndAsBox';

it('contains all the correct components', () => {
  const wrap = Enzyme.shallow(<QsAndAsBox />);
  expect(wrap.exists());
});