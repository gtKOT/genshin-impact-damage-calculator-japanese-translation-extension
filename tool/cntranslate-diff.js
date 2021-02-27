const { addedDiff, deletedDiff } = require('deep-object-diff');

require('./cn');
const cn = cntranslate;
require('../src/ja');
const ja = cntranslate;

console.log('---cn only---');
console.log(addedDiff(ja, cn));
console.log('---ja only---');
console.log(deletedDiff(ja, cn));
