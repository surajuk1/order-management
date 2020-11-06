const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../config/config.json`)[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  sequelize = new Sequelize(
    config.database, config.username, config.password, config
  );
}

fs
  .readdirSync(__dirname)
  .filter(file =>
    (file.indexOf('.') !== 0) &&
    (file !== basename) &&
    (file.slice(-3) === '.js'))
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.users = require('../models/users.js')(sequelize,Sequelize);
db.folders = require('../models/folder.js')(sequelize,Sequelize);
db.files = require('../models/file.js')(sequelize,Sequelize);
db.plan = require('../models/plan.js')(sequelize,Sequelize);

db.folders.belongsTo(db.users,{foreignKey:'created_by',targetKey:'id'});

db.files.belongsTo(db.users,{foreignKey:'created_by',targetKey:'id'});
db.files.belongsTo(db.folders,{foreignKey:'parent_directory',targetKey:'id'});

module.exports = db;