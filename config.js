const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  login: process.env.LOGIN_VISA,
  password: process.env.PASS_VISA,
  debug: process.env.DEBUG
};