const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('database', 'user', 'password', {
    host:'localhost',
    dialect:'sqlite',
    logging: false,
    storage: 'database.sqlite'
});

const Tags = sequelize.define('tags',{
    name: {type: Sequelize.STRING, unique: true},
    description: Sequelize.TEXT,
    username: Sequelize.STRING,
    usage_count: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false
    }
});