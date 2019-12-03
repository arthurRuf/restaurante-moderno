import React from 'react';
import ReactNative from 'react-native';
import { render } from '@testing-library/react-native';

import Onboarding from '../screens/Onboarding';
import App from "../App";

test('should return error message', async () => {
  const { getByTestId, getByText, queryByTestId, baseElement } = render(
      <App />
    );
  const famousWomanInHistory = "abc";

  const input = getByTestId('tableNumber');
  fireEvent.changeText(input, famousWomanInHistory);

  const button = getByText('Entrar como Cliente');
  fireEvent.press(button);

  //REVER essa condição
  await wait(() => expect(queryByTestId('messageText')).toBeTruthy());
});
