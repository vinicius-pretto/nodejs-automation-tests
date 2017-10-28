class UserService {
    constructor(Database) {
        this.Database = Database;
    }

    async findAll() {
        try {
            const users = await this.Database.getAllUsers();
            return users;
        } catch (error) {
            console.log('Error on findAll()', error);
        }
    }
}

module.exports = UserService;
