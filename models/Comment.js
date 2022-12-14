const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/config');

class Comment extends Model {}
Comment.init(
    {
        id: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},

        comment: { type: DataTypes.TEXT, allowNull: false},

        createdAt: {type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW},

        postId: { type: DataTypes.INTEGER,
        references: {
            model: 'post',
            key: 'id'
        }},
        userId: {type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id',
        }},
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,    
    }
);

module.exports = Comment;