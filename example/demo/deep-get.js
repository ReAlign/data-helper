const _ = require('./../../src/index');

const MOCK = require('./../mock/m.index');

// no deepClone
let result1 = _.deepGet(MOCK.obj1, 'work.member[0]', [], {deepClone: false});
console.log('work.member[0]: %o', result1);
// reset name
result1.name = 'pp';

let result2 = _.deepGet(MOCK.obj1, 'work["member"][0]', []);
console.log('work.member[0]: %o', result2);

// deepClone
let result3 = _.deepGet(MOCK.obj1, ['work', 'member', '1'], []);
console.log('work.member[1]: %o', result3);
// reset name
result3.name = 'pp';

let result4 = _.deepGet(MOCK.obj1, ['work', 'member', '1'], []);
console.log('work.member[1]: %o', result4);