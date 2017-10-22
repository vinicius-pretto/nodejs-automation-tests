class UserService {
    constructor(database) {
        this.database = database;
    }

    calculateAge(currentYear, bornDate) {
        const year = new Date(bornDate).getFullYear();
        return currentYear - year;
    }

    buildUser(user) {
        const currentYear = new Date().getFullYear();
        const age = this.calculateAge(currentYear, user.bornDate);
        return Object.assign({}, user, { age });
    }

    async findAll() {
        try {
            const users = await this.database.getAllUsers();
            return users.map(user => this.buildUser(user));
        } catch (error) {
            console.log('Error on findAll()', error);
        }
    }
}

module.exports = UserService;
