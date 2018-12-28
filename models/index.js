'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};
const burg = ['point.js', 'polygon.js'];
config.forEach(cog => {
  Object.assign(cog, {
    define: {
      underscored: true
    }
  })
});
// let sequelize;
let sequelize = {};
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  // sequelize = new Sequelize(config.database, config.username, config.password, config);
  config.forEach(cog => {
    sequelize[cog.database] = new Sequelize(cog.database, cog.username, cog.password, cog);
  })
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    let model;
    if(burg.indexOf(file) > -1) {
      model = sequelize['data_burg']['import'](path.join(__dirname, file));
    } else {
      model = sequelize['demo_data_center']['import'](path.join(__dirname, file));
    }
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// db.sequelize = sequelize;
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
