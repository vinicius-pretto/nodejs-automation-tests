class UserService {
    constructor(database) {
        this.database = database;
    }

    async findAll() {
        try {
            const users = await this.database.getAllUsers();
            return users;
        } catch (error) {
            console.log('Error on findAll()', error);
        }
    }
}

module.exports = UserService;
