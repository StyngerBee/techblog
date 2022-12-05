const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Post extends Model {}
Post.init(
    {
        id: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},

        head: { type: DataTypes.STRING, allowNull: false},

        comment: { type: DataTypes.TEXT, allowNull: false},

        createdAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW},

        userId: { type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        }},
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,       
    }
);

module.exports = Post;
