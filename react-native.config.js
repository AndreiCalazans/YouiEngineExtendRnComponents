/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const fs = require('fs');
const path = require('path');

module.exports = {
  reactNativePath: fs.realpathSync(
    path.resolve(require.resolve('@youi/react-native-youi/package.json'), '..')
  )
};
