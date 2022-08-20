const Users = require('./Users');
const news = require('./news');



Users.hasMany(news, {
  foreignKey: 'users_id',
  onDelete: 'CASCADE'
});




news.belongsTo(users, {
  foreignKey: 'users_id'
});






module.exports = { users, news };