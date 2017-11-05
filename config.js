let config = {};

config.port = process.env.PORT || 3000;

// Sequelize
config.sequelize = {
    database: process.env.DB_DATABASE || 'test',
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || 'toor',
    dialect: 'postgres',
    logging: process.env.LOGGING || false,
    operatorsAliases: false,
    define: {
        timestamps: false
    }
}

module.exports = config;