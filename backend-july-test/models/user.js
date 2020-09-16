'use strict';
var Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define('User', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        name: {
            type: DataTypes.STRING,
            allowNull:false
        },
        email: {
            type: DataTypes.STRING,
            allowNull:false,
            unique:true,
            
        },
        password: {
            type:DataTypes.STRING,
            allowNull: false
        }
    },{
        timestamps: true
    });
    return User;
};