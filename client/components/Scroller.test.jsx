import React from 'react';
import Enzyme from 'enzyme';
import Scroller from './Scroller';

it('contains all the correct components', () => {
  const wrap = Enzyme.shallow(<Scroller />);
  expect(wrap.exists());
});