const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/config');

class Comment extends Model {}
Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        
    }
)