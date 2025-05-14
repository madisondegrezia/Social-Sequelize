const { sequelize, DataTypes } = require("../db/connection.js");

let Post = sequelize.define("Post", {
  title: DataTypes.STRING,
  body: DataTypes.STRING,
  createdAt: DataTypes.STRING,
});

module.exports = Post;
