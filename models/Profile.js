const { sequelize, DataTypes } = require("../db/connection.js");

let Profile = sequelize.define("profile", {
  bio: DataTypes.STRING,
  profilePicture: DataTypes.STRING,
  birthday: DataTypes.STRING,
});

module.exports = Profile;
