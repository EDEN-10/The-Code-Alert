const { DataTypes, Model } = require('sequelize');
const news = require('./news');

class usersComments extends Model { }

usersComments.init({
    content: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    usersId: {
        type: DataTypes.INTEGER,
        references: {
            model: news,
            key: 'users_id'
        }
    }
}, {
    sequelize: require('../database/connection'),
    modelName: 'usersComments',
});

Blog.hasMany(usersComments, { foreignKey: "news_id", targetKey: "id" });
usersComments.belongsTo(Blog, { onDelete: 'cascade' });

module.exports = usersComments;