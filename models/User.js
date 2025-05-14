const { sequelize, DataTypes } = require("../db/connection.js");

let User = sequelize.define("User", {
  username: DataTypes.STRING,
  email: DataTypes.STRING,
});

module.exports = User;
