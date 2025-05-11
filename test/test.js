// test.js
const myPackage = require('../index.js'); // Adjust path as needed

describe('myPackage', function() {
  it('should greet the user', function() {
    expect(myPackage.greet('World')).toBe('Hello, World!');
  });
});