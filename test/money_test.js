let assert = require('assert');

describe('money tests', function() {
    it ('multiplies an amount (price per share) by a number (number of shares).', function() {
        let five = new Dollar(5);
        five.times(2);
        assert.equals(five.amount, 10);
    });
});