"use strict";

const times = Symbol();

Object.defineProperty(global.Number.prototype, times, {
    value: function (fun) {
        const lim = this.valueOf() | 0;
        for (let i = 0; i < lim; i++) fun(i);
    }
});

module.exports = times;
