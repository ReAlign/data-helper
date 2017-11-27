const _ = require('n-tools');

const MOCK = require('./mock/m.index');

let result = '';

// for (let kk = 0; kk < 2; kk++) {
//     result = _.deepGet(MOCK.obj1, `work.member[${kk}].name`, 'null');
//     console.log(result);
// }

// let cache = _.deepClone(MOCK.obj1.work);

// cache.name = 'alj';

// console.log(MOCK.obj1.work);

// console.log(_.deepClone(MOCK.obj1.work));

result = _.deepGet(MOCK.obj1, 'work.member2', []);
console.log(typeof result);
console.log(result.length);
console.log(result);