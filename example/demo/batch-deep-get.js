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
    },
    {
        path: 'work.types',
        key: 'ts',
        defaVal: {}
    },
    {
        path: 'work.num',
        key: 'n',
        defaVal: 0
    },
    {
        path: 'work.nums',
        key: 'ns',
        defaVal: 0
    }
];

// get array
let result1 = _.batchDeepGet(MOCK.obj1, list, {isResArray: true});
console.log(result1);

// get object
let result2 = _.batchDeepGet(MOCK.obj1, list);
console.log(result2);