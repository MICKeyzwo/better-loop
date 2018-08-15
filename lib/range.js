"use strict";

const range = function* (b, e, s = 1) {
    if (Number.isNaN(+b)) throw new TypeError();
    if (e === void 0) e = b, b = 0;
    if (Number.isNaN(+e)) throw new TypeError();
    if (s === 0) throw new TypeError();
    if (b < e && s < 0 || b > e && s > 0) s *= -1;
    const eol = n => b < e ? n < e : n > e;
    for (let i = b; eol(i); i += s) yield(i);
};

module.exports = range;
