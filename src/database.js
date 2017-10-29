let { users } = require('./data.json');

const database = {
    getAllUsers() {
        return Promise.resolve(users);
    },

    create(user) {
        users.push(user);
        return Promise.resolve();
    }
}

module.exports = database;