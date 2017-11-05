const { CREATED } = require('http-status');
const UserService = require('./user.service');

module.exports = (app) => {
    const userService = new UserService(app.database.models.Users);

    app.post('/users', (req, res) => {
        return userService.create(req.body)
            .then(() => res.sendStatus(CREATED));
    });
}