"use strict";

const range = require("./range.js");

const until = Symbol();

Object.defineProperty(global.Number.prototype, until, {
    value: function (e, fun) {
        for (const i of range(this.valueOf() | 0, e)) fun(i);
    }
});

module.exports = until;
