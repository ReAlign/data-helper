let _t = {};

require('./../object-about/deep-clone')(_t);

module.exports = ((_) => {
    _.deepGet = (obj = {}, path = '', defaVal = '', { deepClone } = { deepClone: true }) => {
        //
        // let _arr = (Array.isArray(path) ? path : path.replace(/\[/g, '.').replace(/'|"|\]/g, '').split('.'));
        // console.log(_arr);

        // let _r = _arr.reduce((o, k) => {
        //     console.log('o: %o', o);
        //     console.log('k: %o', k);
        //     console.log('r: %o', (o || {})[k]);
        //     return (o || {})[k];
        // }, obj);
        //
        let _res = (Array.isArray(path)
                    ? path
                    : path.replace(/\[/g, '.').replace(/'|"|\]/g, '').split('.'))
                        .reduce((total, curVal) => (total || {})[curVal], obj);

        if(deepClone) {
            _res = _t.deepClone(_res);
        }

        return _res || defaVal;
    };
});