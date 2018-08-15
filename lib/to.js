"use strict";

const until = require("./until.js");

const to = Symbol();

Object.defineProperty(global.Number.prototype, to, {
    value: function (e, fun) {
        this[until](e + 1, fun);
    }
});

module.exports = to;
