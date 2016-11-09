/// <reference path="typings/node/node.d.ts" />

class Dollar {
    amount: number;

    constructor(amount: number) {
        this.amount = amount;
    }

    times(multiplier: number) {
        this.amount *= multiplier;
    }
}

module.exports = Dollar;