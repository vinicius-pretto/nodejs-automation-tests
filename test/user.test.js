const UserService = require('../src/users/user.service');
const { newUser, expectedUser } = require('./fixtures/user.json');

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

    describe('create()', () => {
        it('should create a new user', () => {
            const fakeDatabase = {
                create(user) { }
            };
            const createSpy = sinon.spy(fakeDatabase, 'create');
            const userService = new UserService(fakeDatabase);

            userService.create(newUser);
            
            sinon.assert.calledOnce(createSpy);
            sinon.assert.calledWith(createSpy, newUser);
            createSpy.restore();
        });
    });
});