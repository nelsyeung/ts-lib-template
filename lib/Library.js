"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array_1 = require("core-js/es6/array");
var default_1 = (function () {
    function default_1() {
        this.helloWorld = [{ text: 'hello' }, { text: 'world' }, { text: '!' }];
    }
    default_1.prototype.world = function () {
        return array_1.find(this.helloWorld, function (t) { return t.text === 'world'; });
    };
    return default_1;
}());
exports.default = default_1;
//# sourceMappingURL=Library.js.map