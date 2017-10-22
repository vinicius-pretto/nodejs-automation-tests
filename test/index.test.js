const { expect } = require('chai');
const { sum } = require('../index');

describe('Index', () => {
    describe('sum()', () => {
        it('should return the sum of 2 + 2 that equals 4', () => {
            expect(sum(2, 2)).to.be.deep.equal(4);
        });
    });
});
