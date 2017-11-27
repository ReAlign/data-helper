// let _t = {};

// require('./../object-about/deep-clone')(_t);

// module.exports = ((_) => {
//     _.alias = (obj = {}, nameMap = {}, defaVal = '', { deepClone } = { deepClone: true }) => {
//         let _res = (Array.isArray(path)
//                     ? path
//                     : path.replace(/\[/g, '.')
//                         .replace(/\]/g, '').split('.')).reduce((o, k) => (o || {})[k], obj);

//         if(deepClone) {
//             _res = _t.deepClone(_res);
//         }

//         return _res || defaVal;
//     };
// });