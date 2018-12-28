//app.js
require('env2')('./.env');
const Hapi = require('hapi');
const config = require('./config');
// const routeCamera = require('./routes/camera');
// const routeTest = require('./routes/test');
const routeUser = require('./routes/user');
const routeLayer = require('./routes/layer');
//swagger配置
const pluginHapiSwagger = require('./plugins/hapi-swagger');
const server = new Hapi.Server();
server.connection({
	port: config.port,
	host: config.host
});

const init = async () => {
	await server.register([
		...pluginHapiSwagger
	]);
	server.route([
		// ...routeCamera,
		// ...routeTest
		...routeUser,
		...routeLayer
	]);
	 //启动服务
	 await server.start();
	 console.log(2)
	 console.log(`Server running at: ${server.info.uri}`);
};

init();
 
