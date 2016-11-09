/// <reference path="../typings/mocha/mocha.d.ts" />

let assert = require('assert');

describe('money tests', function() {
    let Dollar = require('../dollar.js');

    it ('multiplies an amount (price per share) by a number (number of shares).', function() {
        let five: Dollar = new Dollar(5);
        five.times(2);
        assert.equal(five.amount, 10);
    });
});