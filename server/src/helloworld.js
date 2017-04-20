// In './test_module.js':

function Foo() {
  return Soo("Hello World!");
}
// Export Foo as Foo.
module.exports.Foo = Foo;

// In './test_default_module.js':


// In './test_importer.js':

// Import 'Foo'
var TestModule = require('./util');
var Soo = TestModule.reverseString;
// Import the default export of './test_default_module.js' module.


console.log(Foo()); // prints 'I'm Foo!'
