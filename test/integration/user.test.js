const { CREATED, OK } = require('http-status');
const { newUser, defaultUser } = require('./fixtures/user.json');

describe('User routes', () => {
    beforeEach(() => {
        return UserModel
            .destroy({ where: {} })
            .then(() => UserModel.create(defaultUser));
    });

    describe('POST /users', () => {
        it('should create a new user', async() => {
            const response  = await request.post('/users').send(newUser);
            const resultSet = await UserModel.findById(newUser.id);
            const userCreated = resultSet.toJSON();

            expect(response).to.have.status(CREATED);
            expect(userCreated).to.be.eql(newUser);
        });
    });

    describe('GET /users', () => {
        it('should return all users', async() => {
            const response = await request.get('/users');

            expect(response).to.have.status(OK);
            expect(response.body.users).to.be.eql([defaultUser]);
        });
    });
});