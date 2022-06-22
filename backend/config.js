// refactoring
const dotenv = require('dotenv');
dotenv.config();
module.exports = {
//   endpoint: process.env.API_URL,
//   masterKey: process.env.API_KEY,
  databaseSource: process.env.DB_SOURCE,
  telegramBot: process.env.BOT_TOKEN,

};