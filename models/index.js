const dbConfig = require("../config/db.config.js");
const { Sequelize } = require("sequelize");
const { Op } = require("sequelize");
const pg = require("pg");

const client = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  dialectOptions: dbConfig.dialectOptions,
  dialectModule: require("pg"),
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};
db.Sequelize = Sequelize;
db.client = client;

db.products = require("./product")(client, Sequelize);
db.users = require("./user")(client, Sequelize);

module.exports = db;
