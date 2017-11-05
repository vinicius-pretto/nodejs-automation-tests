const { CREATED } = require('http-status');
const { newUser } = require('./fixtures/user.json');

describe('User routes', () => {
    beforeEach(() => UserModel.destroy({ where: {} }));

    describe('POST /users', () => {
        it('should create a new user', async() => {
            const response  = await request.post('/users').send(newUser);
            const resultSet = await UserModel.findById(newUser.id);
            const userCreated = resultSet.toJSON();

            expect(response).to.have.status(CREATED);
            expect(userCreated).to.be.eql(newUser);
        });
    });
});