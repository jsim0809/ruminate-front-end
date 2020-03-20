import React from 'react';
import Enzyme from 'enzyme';
import QA from './QA';

it('contains all the correct components', () => {
  const wrap = Enzyme.mount(<QA />);
  expect(wrap.exists());
});