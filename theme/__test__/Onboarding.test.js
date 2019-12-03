import React from 'react';
import ReactNative from 'react-native';
import { render } from '@testing-library/react-native';

import Onboarding from '../screens/Onboarding';
import App from "../App";

test('examples of some things', async () => {
  const { getByTestId, getByText, queryByTestId, baseElement } = render(
      <App />
    );
  const famousWomanInHistory = "123";

  const input = getByTestId('tableNumber');
  fireEvent.changeText(input, famousWomanInHistory);

  const button = getByText('Entrar como Cliente');
  fireEvent.press(button);

  await wait(() => expect(queryByTestId('printed-username')).toBeTruthy());
});
