const { reloadApp } = require('detox-expo-helpers');

describe('App login', () => {
  beforeEach(async () => {
    await reloadApp();
  });

  it('should open costumer page', async () => {
    await element(by.id('tableNumber')).tap();
    await element(by.id('tableNumber')).typeText('abc');
    await element(by.id('sendButton')).tap();
    await expect(element(by.id('messageText'))).toHaveText('Mesa invalida');
  });
});
