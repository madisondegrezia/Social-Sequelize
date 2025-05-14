const { sequelize, DataTypes } = require("../db/connection.js");

let Comment = sequelize.define("Comment", {
  body: DataTypes.STRING,
  createdAt: DataTypes.STRING,
});

module.exports = Comment;
