const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init({

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    body: {
        type: DataTypes.STRING,
        validate: {
           len: [3]
        }
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'User',
            key: 'id'
        }
    },
    blog_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'blog',
            key: 'id'
        }
    }
}, {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'
});

module.exports = Comment;