const { sequelize, DataTypes } = require("../db/connection.js");

let Like = sequelize.define("Like", {
  reactionType: DataTypes.STRING,
  createdAt: DataTypes.STRING,
});

module.exports = Like;
