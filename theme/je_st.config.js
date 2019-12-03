module.exports = {
  preset: 'jest-expo',
  // this is a workaround for the "Jest encountered an unexpected token" issue
  // follow-up on https://github.com/expo/expo/issues/3133
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|react-clone-referenced-element|expo(nent)?|@unimodules/.*|jest-expo/.*|@expo(nent)?/.*|react-navigation|@react-navigation/.*|sentry-expo|native-base))',
  ],
  transform: {
    '\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  }
};
