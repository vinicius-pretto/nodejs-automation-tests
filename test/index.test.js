const assert = require('assert');
const { sum } = require('../index');

describe('Index', () => {
    describe('sum()', () => {
        it('should return the sum of 2 + 2 that equals 4', () => {
            const result = sum(2, 2);
            assert.deepEqual(result, 4);
        });
    });
});