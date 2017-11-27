let _t = {};

require('./../../src/lib/base/typeof')(_t);

const _ = require('./../../src/index');

const MOCK = require('./../mock/m.index');

let list = [
    {
        path: 'work.name',
        key: 'name1'
    },
    {
        path: 'work.type',
        key: 't'
    }
];

let result1 = _.batchDeepGet(MOCK.obj1, list, {isResArray: true});
console.log(result1);
// result1[0].name = 'pp';
// let k = 'member';
// let result2 = _.deepGet(MOCK.obj1, 'work["member"]', []);
// console.log(result2);

// let result3 = _.deepGet(MOCK.obj1, ['work', 'member', '1'], []);
// console.log(result3);