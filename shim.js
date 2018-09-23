const shim = () => {
  global.navigator = require('navigator')

  // Thanks to zxqfox (https://github.com/zxqfox/console-assert)
  global.console.assert = function(expr) {
    if(expr) return;
    var args = Array.prototype.slice.call(arguments, 1);
    console.error.apply(console, ['Assertion failed:'].concat(args));
  }

  global.buffer = require('buffer/').Buffer

  const { randomBytes } = require('react-native-randombytes')

  global.crypto = {
    getRandomValues: randomBytes
  }

  console.log(global)
}

export { shim }