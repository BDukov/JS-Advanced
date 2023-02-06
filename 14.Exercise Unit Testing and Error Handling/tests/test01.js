const { expect, assert } = require('chai');
const isOddOrEven = require('../test.js');

describe('isOddOrEven', () => {
    it('Should return even when starting length is even', () => {
        assert.equal(isOddOrEven('even'), 'even');
    });
    it('Should return odd when starting length is even', () => {
        assert.equal(isOddOrEven('odd'), 'odd');
    });
    it('Should return undefined when the input is not a string', () => {
        assert.equal(isOddOrEven(1), undefined);
    });
});