const Sequelize = require("sequelize");

const dbConnection = new Sequelize("in8dev", "root", "1234",
{
    dialect:"mysql", host:"localhost"
});

module.exports = dbConnection;