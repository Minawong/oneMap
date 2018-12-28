
if(process.env.NODE_ENV === 'production') {
  require('env2')('./prod.env');
} else {
  require('env2')('./.env');
}

const {env} = process;

module.exports = {
  "development": [{
    "username": env.POSTGRE_USERNAME,
    "password": env.POSTGRE_PASSWORD,
    "database": env.POSTGRE_DB_NAME,
    "host": env.POSTGRE_HOST,
    "port": env.POSTGRE_PORT,
    "dialect": "postgres",
    "operatorsAliases": false,  // 此参数为自行追加，解决高版本 sequelize 连接警告
  },{
    "username": env.POSTGRE_USERNAME,
    "password": env.POSTGRE_PASSWORD,
    "database": env.POSTGRE_DB2_NAME,
    "host": env.POSTGRE_HOST,
    "port": env.POSTGRE_PORT,
    "dialect": "postgres",
    "operatorsAliases": false,  // 此参数为自行追加，解决高版本 sequelize 连接警告
  }],
  "production": {
    "username": env.POSTGRE_USERNAME,
    "password": env.POSTGRE_PASSWORD,
    "database": env.POSTGRE_DB_NAME,
    "host": env.POSTGRE_HOST,
    "port": env.POSTGRE_PORT,
    "dialect": "postgres",
    "operatorsAliases": false,  // 此参数为自行追加，解决高版本 sequelize 连接警告
  }
}