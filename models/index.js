const User = require('./user');
const Tech = require('./tech');

User.hasMany(Tech, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Tech.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Tech };