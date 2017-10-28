const UserService = require('../src/users/user.service');
const { expectedUser } = require('./fixtures/user.json');

describe('UserService', () => {
    describe('findAll()', () => {
        it('should return all users', async() => {
            const Database = {
                async getAllUsers() {
                    return [expectedUser];
                }
            }
            const userService = new UserService(Database);
            const users = await userService.findAll();
            expect(users).to.be.eql([expectedUser]);
        });
    });
});