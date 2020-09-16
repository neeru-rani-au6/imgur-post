'use strict';
var Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define('Post', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
    title: DataTypes.STRING,
    description:DataTypes.STRING,
    photoUrl:DataTypes.STRING
  },{
    timestamps: true
  });
  Post.associate = (models) => {
    Post.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
  };
  return Post;
};