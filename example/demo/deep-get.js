let _t = {};

require('./../../src/lib/base/typeof')(_t);

const _ = require('./../../src/index');

const MOCK = require('./../mock/m.index');

// let result1 = '';
// let result2 = '';

// for (let kk = 0; kk < 2; kk++) {
//     result = _.deepGet(MOCK.obj1, `work.member[${kk}].name`, 'null');
//     console.log(result);
// }

// let cache = _.deepClone(MOCK.obj1.work);

// cache.name = 'alj';

// console.log(MOCK.obj1.work);

// console.log(_.deepClone(MOCK.obj1.work));

let result1 = _.deepGet(MOCK.obj1, 'work.member', [], {deepClone: false});
// console.log(_t.typeOf(result1));
console.log(result1);
// result1[0].name = 'pp';
let k = 'member';
let result2 = _.deepGet(MOCK.obj1, 'work["member"]', []);
console.log(result2);

let result3 = _.deepGet(MOCK.obj1, ['work', 'member', '1'], []);
console.log(result3);