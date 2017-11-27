let _t = {};

require('./deep-get')(_t);

module.exports = ((_) => {
    _.batchDeepGet = (obj = {}, itemList = [], { isResArray } = { isResArray: false }) => {
        if(!(itemList && itemList.length)) {
            return false;
        }

        let addItem = (mainObj, obj, key = '', isResArray = false) => {
            if(isResArray) {
                mainObj.push(obj);
            } else {
                if(key) {
                    mainObj[key] = obj;
                }
            }

            return mainObj;
        };

        let res = isResArray ? [] : {};

        itemList.forEach((that) => {
            let _item = _t.deepGet(obj, that.path, that.defaVal, { deepClone: that.deepClone });
            res = addItem(res, _item, that.key, isResArray);
        });

        return res;
    };
});