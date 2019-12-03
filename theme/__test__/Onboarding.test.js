import React from 'react';
import ReactNative from 'react-native';
import Onboarding from '../screens/Onboarding';

import renderer from 'react-test-renderer';

jest.setTimeout(15000);

test('renders Onboarding', () => {
  const tree = renderer.create(<Onboarding />).toJSON();
  expect(tree).toMatchSnapshot();
});

