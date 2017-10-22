const { users } = require('./data.json');

const database = {
    getAllUsers() {
        return Promise.resolve(users);
    }
}

module.exports = database;