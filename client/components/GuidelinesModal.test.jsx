import React from 'react';
import Enzyme from 'enzyme';
import GuidelinesModal from './GuidelinesModal';

it('contains all the correct components', () => {
  const wrap = Enzyme.shallow(<GuidelinesModal />);
  expect(wrap.exists());
});