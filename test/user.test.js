const UserService = require('../src/users/user.service');

describe('UserService', () => {
    describe('calculateAge()', () => {
        it(`should return 28 with 2017 and '05/18/1989'`, () => {
            const database = {};
            const userService = new UserService(database);
            const age = userService.calculateAge(2017, '05/18/1989');
            expect(age).to.be.deep.eql(28);
        });
    });
});