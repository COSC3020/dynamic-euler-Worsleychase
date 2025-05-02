const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');

//assert(factorial(10) === 3628800); Removed because I calculate the factorial inside of the main function
assert(e(10) === 2.7182818011463845);
