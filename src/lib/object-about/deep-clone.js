let _t = {};

require('./../base/typeof')(_t);

let x = {
    cloneObj: (obj) => {
        let result = {},
            item, type;
        for(let i in obj) {
            if(obj.hasOwnProperty(i)) {
                item = obj[i];
                type = _t.typeOf(item);
                if (type === 'object') {
                    result[i] = x.cloneObj(item);
                } else if (type === 'array') {
                    result[i] = x.cloneArray(item);
                } else {
                    result[i] = item;
                }
            }
        }
        return result;
    },
    cloneArray: (obj) => {
        let result = [],
            item, type;
        for (let i = 0; i < obj.length; i++) {
            item = obj[i];
            type = _t.typeOf(item);
            if (type === 'object') {
                result[i] = x.cloneObj(item);
            } else if (type === 'array') {
                result[i] = x.cloneArray(item);
            } else if (typeof item !== 'object') {
                result[i] = item;
            }
        }
        return result;
    }
};

module.exports = ((_) => {
    _.deepClone = (obj) => {
        let type = _t.typeOf(obj);
        switch (type) {
            case 'object':
                return x.cloneObj(obj);
            case 'array':
                return x.cloneArray(obj);
            default:
                return obj;
        }
    };
});