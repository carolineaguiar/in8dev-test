const Sequelize = require("sequelize");
const database = require("./db");

const User = database.define('users', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    birthDate:{
        type: Sequelize.DATE,
        allowNull: false,
    },
    phone:{
        type: Sequelize.STRING,
        allowNull: false,
    }
},
{
    timestamps: false,
}
);

User.sync();

module.exports = User;