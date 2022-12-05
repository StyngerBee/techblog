const bcrypt = require('bcrypt');
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class User extends Model {
    authPassword(loginPassword) {
        return bcrypt.compareSync(loginPassword, this.password);
    }
}

User.init(
    {
        id: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},
        
        username: { type: DataTypes.STRING, allowNull: false, unique: true},

        password: {type: DataTypes.STRING, allowNull: false, validate: {
            len: [8]
        }},
    },
    {
        hooks: {
            beforeCreate: async (createUser) => {
                createUser.password = await bcrypt.hash(createUser.password, 10);
                return createUser;
            },
            beforeUpdate: async (updatedUser) => {
                if (updatedUser.password){
                    updatedUser.password = await bcrypt.hash(updatedUser.password, 10);
                
                }
                return updatedUser;
            },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
    }
);

module.exports = User;