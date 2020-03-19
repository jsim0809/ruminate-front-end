import React from 'react';
import Enzyme from 'enzyme';
import Headshot from './Headshot';

it('contains all the correct components', () => {
  const wrap = Enzyme.shallow(<Headshot />);
  expect(wrap.exists());
});