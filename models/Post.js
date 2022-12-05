const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Post extends Model {}
Post.init(
    {
        id: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},
    }
)