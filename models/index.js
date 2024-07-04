const sequelize = require('../config/database');
const Account = require('./account');

const initDb = async () => {
  await sequelize.sync({ force: true });
};

module.exports = {
  Account,
  initDb,
};
