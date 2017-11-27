module.exports = ((_) => {
    _.typeOf = (o = '') =>
        (o == null
            ? String(o)
            : ({}).toString.call(o).slice(8, -1).toLowerCase());
});