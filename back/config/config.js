const dotenv =require('dotenv');

dotenv.config();

module.exports = {
  "development": {
    "username": "postgres1",
    "password": process.env.DB_PASSWORD,
    "database": "postgres1",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "postgres1",
    "password": process.env.DB_PASSWORD,
    "database": "postgres1",
    "host": "127.0.0.1",
    "dialect": "postgres1"
  },
  "production": {
    "username": "postgres1",
    "password": process.env.DB_PASSWORD,
    "database": "postgres1",
    "host": "127.0.0.1",
    "dialect": "postgres1"
  }
}
