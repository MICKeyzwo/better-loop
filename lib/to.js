"use strict";

const range = require("./range.js");

const to = Symbol();

Object.defineProperty(global.Number.prototype, to, {
    value: function (e, fun) {
        for (const i of range(this.valueOf() | 0, e + 1)) fun(i);
    }
});

module.exports = to;
