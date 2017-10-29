class UserService {
    constructor(Database) {
        this.Database = Database;
    }

    async create(user) {
        try {
            await this.Database.create(user);
        } catch(error) {
            console.log('Error on create a new user', error);
        }
    }
    
    async findAll() {
        try {
           const users = await this.Database.getAllUsers();
           return users;
        } catch (error) {
            console.log('Error on find users from database', error);
        }
    }
}

module.exports = UserService;
