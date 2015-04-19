﻿// @source /Collections/ArrayEnumerator.js

Bridge.define('Bridge.ArrayEnumerator', {
    constructor: function (array) {
        this.array = array;
        this.reset();
    },

    moveNext: function () {
        this.index++;

        return this.index < this.array.length;
    },

    getCurrent: function () {
        return this.array[this.index];
    },

    reset: function () {
        this.index = -1;
    },

    dispose: Bridge.emptyFn
});
