import React from 'react';
import Enzyme from 'enzyme';
import Flag from './Flag';

it('contains all the correct components', () => {
  const wrap = Enzyme.shallow(<Flag />);
  expect(wrap.exists());
});