const dotenv =require('dotenv');

dotenv.config();

module.exports = {
  "development": {
    "username": "postgres",
    "password": process.env.DB_PASSWORD,
    "database": "postgres1",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "postgres",
    "password": process.env.DB_PASSWORD,
    "database": "postgres1",
    "host": "127.0.0.1",
    "dialect": "postgres1"
  },
  "production": {
    "username": "postgres",
    "password": process.env.DB_PASSWORD,
    "database": "postgres1",
    "host": "127.0.0.1",
    "dialect": "postgres1"
  }
}
